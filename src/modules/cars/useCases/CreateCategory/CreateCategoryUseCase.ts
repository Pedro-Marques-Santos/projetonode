import { inject, injectable } from 'tsyringe'
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

  execute({ name, description }: IRequest) {

    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Já existe um carro registrado com esse nome!");
    }

    this.categoriesRepository.create({ name, description })
  }

}

export { CreateCategoryUseCase }