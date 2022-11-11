import { Category } from "../../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRespotitory";

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[] = [];

  constructor() {
    this.categories = [];
  }

  findByName(name: string): boolean {
    let stateName = false;
    this.categories.map((element) => {
      stateName = element.name === name;
    })

    return stateName;
  }

  list(): Category[] {
    return this.categories;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    category.name = name;
    category.description = description;

    this.categories.push(category);
  }

}

export { CategoriesRepository }