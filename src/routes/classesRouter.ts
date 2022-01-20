import { Router } from "express";
import { CreateCommentController } from "../modules/comment/useCases/createComment/createCommentController";
import { DeleteCommentController } from "../modules/comment/useCases/deleteComment/deleteCommentController";
import { ShowCommentsByClassController } from "../modules/comment/useCases/showCommentsByClass/showCommentsByClassController";

const classesRouter = Router();

classesRouter.get("",  (request, response) => {})
classesRouter.post("", (request, response) => {})
classesRouter.put("",  (request, response) => {})

classesRouter.get("/:id", (request, response) => {})
classesRouter.post("/:id", (request, response) => {})

const showCommentsByClassController = new ShowCommentsByClassController(); 
classesRouter.get("/comments", showCommentsByClassController.handle)

const deleteCommentController = new DeleteCommentController(); 
classesRouter.post("/comments/:id", deleteCommentController.handle)

const createCommentController = new CreateCommentController();
classesRouter.post("/comments", createCommentController.handle)


export {classesRouter}