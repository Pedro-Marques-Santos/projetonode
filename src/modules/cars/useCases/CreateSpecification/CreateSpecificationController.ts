import { Response, Request } from 'express'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';
import { container } from 'tsyringe';


class CreateSpecificationController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { color, newcar } = request.body;

    const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase);

    await createSpecificationUseCase.execute({ color, newcar });

    return response.status(201).send();
  }

}

export { CreateSpecificationController }