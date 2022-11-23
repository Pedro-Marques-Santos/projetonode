import { ISpecificationDTO, ISpecificationRepository } from "../ISpecificationRepository";

import { getRepository, Repository } from "typeorm"
import { Specification } from "../../entities/Specification";

class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specification>

  constructor() {
    this.repository = getRepository(Specification)
  }

  async create({ color, newcar }: ISpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      color,
      newcar
    });
    await this.repository.save(specification)
  }

}

export { SpecificationRepository }