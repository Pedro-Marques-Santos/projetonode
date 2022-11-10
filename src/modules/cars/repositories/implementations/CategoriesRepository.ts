import { Category } from "../../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRespotitory";

class CategoriesRepository implements ICategoriesRepository {
  private categories: ICreateCategoryDTO[] = [];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    category.name = name;
    category.description = description;

    this.categories.push(category);
  }

}

export { CategoriesRepository }