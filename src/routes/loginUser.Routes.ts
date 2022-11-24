import { Router } from "express";
import { LoginUserController } from "../modules/users/useCases/LoginUser/LoginUserController";

const loginUserRouter = Router()

const loginUserController = new LoginUserController()

loginUserRouter.post("/", (request, response) => {
  return loginUserController.handle(request, response);
});

export { loginUserRouter }