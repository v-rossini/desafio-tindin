import { Router } from "express";
import { AuthUserController } from "../modules/user/useCases/AuthUseCase/AuthUserController";

const usersRouter = Router();

const authController = new AuthUserController();
usersRouter.post("", (request, response) => {})

export {usersRouter}