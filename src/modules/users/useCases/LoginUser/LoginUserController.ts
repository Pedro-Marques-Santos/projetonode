import { Request, Response } from "express";

import { container } from 'tsyringe'

import { LoginUserCase } from "./LoginUserUseCase";

class LoginUserController {
  async handle(request: Request, respose: Response): Promise<Response> {
    const { email, password } = request.body;

    const loginUserUseCase = container.resolve(LoginUserCase);
    await loginUserUseCase.execute({ email, password });

    return respose.status(201).send();
  }
}

export { LoginUserController }