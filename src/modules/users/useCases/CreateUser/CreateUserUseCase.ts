import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../errors/AppErrors'
import { IUserRepositoryDTO } from '../../dtos/IUserRepositoryDTO'
import { IUserRepository } from '../../repositories/IUsersRepository'

@injectable()
class CreateUserUseCase {

  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) { }

  async execute({ name, password, email }: IUserRepositoryDTO): Promise<void> {

    const emailExist = await this.userRepository.findByEmail(email)

    if (emailExist) {
      throw new AppError("já existe uma conta registrada com esse email", 401);
    }

    await this.userRepository.create({ name, password, email })

  }

}

export { CreateUserUseCase }