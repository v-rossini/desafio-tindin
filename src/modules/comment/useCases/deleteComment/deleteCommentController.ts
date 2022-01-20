import { Response, Request } from "express";
import { container } from "tsyringe";

import { ICreateCommentForm } from "../../forms/ICreateCommentForm";
import { CommentDto } from "../../dtos/CommentDto";
import { AppError } from "../../../../shared/errors/AppError";
import { DeleteCommentUsecase } from "./deleteCommentUsecase";




class DeleteCommentController {
    async handle(request: Request, response: Response): Promise<Response> {

        const deleteCommentUsecase = container.resolve( DeleteCommentUsecase );

        const { id } = request.params;
        const { email } = request.user;

        await deleteCommentUsecase.execute(id);
        return response.status(204).send();

    }}


export { DeleteCommentController };