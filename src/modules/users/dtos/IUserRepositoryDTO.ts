import { User } from "../entities/User";

interface IUserRepositoryDTO {
  name: string;
  password: string;
  email: string;
}

interface ILoginUserDTO {
  password: string;
  email: string;
}

interface UserVerifyDTO {
  exist: boolean;
  user?: User;
}

interface UserWithToken {
  user?: User;
  token: string;
}

export { IUserRepositoryDTO, ILoginUserDTO, UserVerifyDTO, UserWithToken }