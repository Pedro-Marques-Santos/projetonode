import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../errors/AppErrors';
import { ICategoriesRepository } from "../../repositories/ICategoriesRespotitory";

interface IRequest {
  name: string,
  description: string
}

@injectable()
class CreateCategoryUseCase {

  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) { }

  async execute({ name, description }: IRequest): Promise<void> {

    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new AppError("Já existe um carro registrado com esse nome!", 401);
    }

    await this.categoriesRepository.create({ name, description })
  }

}

export { CreateCategoryUseCase }