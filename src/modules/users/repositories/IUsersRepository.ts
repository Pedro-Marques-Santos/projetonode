import { IUserRepositoryDTO, UserVerifyDTO } from "../dtos/IUserRepositoryDTO";
import { User } from "../entities/User";

interface IUserRepository {
  create({ name, password, email }: IUserRepositoryDTO): Promise<void>;
  findByEmail(email: string): Promise<boolean>;
  verifyLogin(email: string, password: string): Promise<UserVerifyDTO>;
}

export { IUserRepository }