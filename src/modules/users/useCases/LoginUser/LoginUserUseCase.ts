import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../errors/AppErrors';
import { ILoginUserDTO } from '../../dtos/IUserRepositoryDTO'
import { IUserRepository } from '../../repositories/IUsersRepository'

@injectable()
class LoginUserCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute({ email, password }: ILoginUserDTO): Promise<void> {

    const emailExist = await this.userRepository.findByEmail(email);

    if (!emailExist) {
      throw new AppError("Email não registrado", 401);
    }

    const verifyLogin = await this.userRepository.verifyLogin(email, password);

    if (verifyLogin.exist === false) {
      throw new AppError("Email ou Senha incorreto", 401);
    }

  }

}

export { LoginUserCase }