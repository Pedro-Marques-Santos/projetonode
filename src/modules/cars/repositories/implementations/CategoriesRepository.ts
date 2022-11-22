import { Category } from "../../entities/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRespotitory";

import { getRepository, Repository } from "typeorm"

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[] = [];
  private repository: Repository<Category> // recebe os methodos de inserir, atualizar e remover

  constructor() {
    this.categories = [];
    this.repository = getRepository(Category); //repositório embutido
  }

  findByName(name: string): boolean {
    let stateName = false;
    this.categories.map((element) => {
      stateName = element.name === name;
    })

    return stateName;
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find()
    return categories;
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name
    }); //criando um tipo de objeto para guardar no database

    await this.repository.save(category)
  }

}

export { CategoriesRepository }