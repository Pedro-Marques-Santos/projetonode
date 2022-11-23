interface ISpecificationDTO {
  color: string,
  newcar: string
}

interface ISpecificationRepository {
  create({ color, newcar }: ISpecificationDTO): Promise<void>;
}

export { ISpecificationDTO, ISpecificationRepository }