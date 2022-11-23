import { container } from 'tsyringe';
import { Response, Request } from "express"
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {

  async handle(request: Request, respose: Response): Promise<Response> {
    const { name, password, email } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({ name, password, email });

    return respose.status(201).send();
  }

}

export { CreateUserController }