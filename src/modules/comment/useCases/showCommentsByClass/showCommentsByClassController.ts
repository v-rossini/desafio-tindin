import { Response, Request } from "express";
import { container } from "tsyringe";

import { ICreateCommentForm } from "../../forms/ICreateCommentForm";
import { CommentDto } from "../../dtos/CommentDto";
import { AppError } from "../../../../shared/errors/AppError";
import { ShowCommentsByClassUseCase } from "./showCommentsByClassUsecase";

class ShowCommentsByClassController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {const showCommentsByClassUseCase = container.resolve(ShowCommentsByClassUseCase);

        const { id } = request.params;
        const { email } = request.user;
        let commentary: CommentDto[] | undefined;
        
        commentary = await showCommentsByClassUseCase.execute(id);
        
        return response.status(201).json(commentary);}
        catch(err) {
            if (err instanceof AppError)
                return response.status(err.statusCode).json(err.message)
            return response.status(500).json("Houve um erro inesperado")
            }
    }
}
export { ShowCommentsByClassController };