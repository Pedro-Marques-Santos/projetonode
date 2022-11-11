import { Request, Response } from "express";

import { container } from "tsyringe";

import { ListCategoryUseCase } from "./ListCategoryUseCase"

class ListCategoryController {
  handle(request: Request, response: Response): Response {
    const listCategoryUseCase = container.resolve(ListCategoryUseCase);

    const allList = listCategoryUseCase.execute();

    return response.json(allList);
  }
}

export { ListCategoryController }