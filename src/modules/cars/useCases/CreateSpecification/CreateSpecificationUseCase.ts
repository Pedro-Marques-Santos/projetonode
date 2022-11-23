import { inject, injectable } from 'tsyringe'
import { ISpecificationRepository } from '../../repositories/ISpecificationRepository'

interface IRequest {
  color: string,
  newcar: string
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) { }

  async execute({ color, newcar }: IRequest): Promise<void> {

    await this.specificationRepository.create({ color, newcar })

  }

}

export { CreateSpecificationUseCase }