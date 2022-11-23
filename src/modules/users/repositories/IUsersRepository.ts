import { IUserRepositoryDTO } from "../dtos/IUserRepositoryDTO";

interface IUserRepository {
  create({ name, password, email }: IUserRepositoryDTO): Promise<void>;
  findByEmail(email: string): Promise<boolean>;
}

export { IUserRepository }