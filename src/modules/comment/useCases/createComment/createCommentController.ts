import { Response, Request } from "express";
import { container } from "tsyringe";

import { ICreateCommentForm } from "../../forms/ICreateCommentForm";
import { CommentDto } from "../../dtos/CommentDto";
import { CreateCommentUseCase } from "./createCommentUseCase";
import { AppError } from "../../../../shared/errors/AppError";

class CreateCommentController {
    async handle(request: Request, response: Response): Promise<Response> {
        console.log("chegou1")
        try {const createCommentUseCase = container.resolve(CreateCommentUseCase);

        const { comment, id_class }: ICreateCommentForm = request.body;
        const { email } = request.user;
        let commentary: CommentDto | undefined;
        
        commentary = await createCommentUseCase.execute({comment: comment, id_class: id_class});
        
        return response.status(201).json(comment);}
        catch(err) {
            if (err instanceof AppError)
                return response.status(err.statusCode).json(err.message)
            return response.status(500).json("Houve um erro inesperado")
            }
    }
}
export { CreateCommentController };