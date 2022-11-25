import { Request, Response } from "express";

import { container } from 'tsyringe'

import { LoginUserCase } from "./LoginUserUseCase";

class LoginUserController {
  async handle(request: Request, respose: Response): Promise<Response> {
    const { email, password } = request.body;

    const loginUserUseCase = container.resolve(LoginUserCase);

    const user = await loginUserUseCase.execute({ email, password });

    return respose.json(user);
  }
}

export { LoginUserController }