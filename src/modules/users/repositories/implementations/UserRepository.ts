import { IUserRepositoryDTO, UserVerifyDTO } from "../../dtos/IUserRepositoryDTO";
import { IUserRepository } from "../IUsersRepository";

import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findByEmail(email: string): Promise<boolean> {
    const users = await this.repository.find();
    let userExist = false;
    users.map((element) => {
      email === element.email ? userExist = true : userExist;
    });
    return userExist;
  }

  async verifyLogin(email: string, password: string): Promise<UserVerifyDTO> {

    let userVerify = {
      exist: false
    } as UserVerifyDTO;

    const users = await this.repository.find();
    users.map((user) => {
      if (email === user.email && password === user.password) {
        userVerify = {
          ...userVerify,
          exist: true,
          user: user
        }
      }
    })

    return userVerify;
  }

  async create({ name, password, email }: IUserRepositoryDTO): Promise<void> {

    const user = this.repository.create({
      name,
      password,
      email
    });

    await this.repository.save(user);
  }

}

export { UserRepository }