import { Request, Response } from "express";

import { container } from "tsyringe";

import { ListCategoryUseCase } from "./ListCategoryUseCase"

class ListCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoryUseCase = container.resolve(ListCategoryUseCase);

    const list = await listCategoryUseCase.execute();

    return response.json(list);
  }
}

export { ListCategoryController }