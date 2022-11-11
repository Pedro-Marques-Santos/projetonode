import { inject, injectable } from "tsyringe";
import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRespotitory";

@injectable()
class ListCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) { }

  execute(): Category[] {
    const list = this.categoriesRepository.list();

    return list;
  }
}

export { ListCategoryUseCase }