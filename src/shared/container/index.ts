import { container } from 'tsyringe';

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRespotitory";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository';
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository';
import { UserRepository } from '../../modules/users/repositories/implementations/UserRepository';
import { IUserRepository } from '../../modules/users/repositories/IUsersRepository';

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository", CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository", SpecificationRepository
);

container.registerSingleton<IUserRepository>(
  "UserRepository", UserRepository
);