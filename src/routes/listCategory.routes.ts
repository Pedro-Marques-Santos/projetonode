import { Router } from "express";
import { ListCategoryController } from "../modules/cars/useCases/ListCategory/ListCategoryController";

const listCategoryRoutes = Router();

const listCategoryController = new ListCategoryController();

listCategoryRoutes.get("/", (request, response) => {
  listCategoryController.handle(request, response);
})

export { listCategoryRoutes }