import { Router } from "express";
import { CreateCommentController } from "../modules/comment/useCases/createComment/createCommentController";

const classesRouter = Router();

classesRouter.get("",  (request, response) => {})
classesRouter.post("", (request, response) => {})
classesRouter.put("",  (request, response) => {})

classesRouter.get("/:id", (request, response) => {})
classesRouter.post("/:id", (request, response) => {})

classesRouter.get("/comments", (request, response) => {})

const createCommentController = new CreateCommentController();
classesRouter.post("/comments", createCommentController.handle)

classesRouter.post("/comments/:id", (request, response) => {})

export {classesRouter}