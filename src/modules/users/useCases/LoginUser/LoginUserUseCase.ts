import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../errors/AppErrors';
import { ILoginUserDTO, UserVerifyDTO, UserWithToken } from '../../dtos/IUserRepositoryDTO'
import { IUserRepository } from '../../repositories/IUsersRepository'

import jwt from 'jsonwebtoken'

@injectable()
class LoginUserCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute({ email, password }: ILoginUserDTO): Promise<UserWithToken> {

    const secretKey = 'skljaksdj9983498327453lsldkjf';

    const emailExist = await this.userRepository.findByEmail(email);

    if (!emailExist) {
      throw new AppError("Email não registrado", 401);
    }

    const verifyLogin = await this.userRepository.verifyLogin(email, password);

    if (verifyLogin.exist === false) {
      throw new AppError("Email ou Senha incorreto", 401);
    }

    const createToken = jwt.sign(
      {
        email: verifyLogin.user.email,
        password: verifyLogin.user.password
      },
      secretKey,
      {
        expiresIn: '1h',
        subject: '1'
      }
    )

    const userWitchToken = {
      user: verifyLogin.user,
      token: createToken
    } as UserWithToken;

    return userWitchToken

  }

}

export { LoginUserCase }