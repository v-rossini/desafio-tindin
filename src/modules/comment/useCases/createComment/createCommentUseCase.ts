import { inject, injectable } from "tsyringe";

import { ICreateCommentForm } from "../../forms/ICreateCommentForm";
import { CommentDto } from "../../dtos/CommentDto";
import { ICommentRepository } from "../../repositories/ICommentRepository";
import { IClassesRepository } from "../../../classes/repositories/IClassesRepository";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class CreateCommentUseCase {
    constructor(
        @inject("CommentRepository")
        private commentRepository: ICommentRepository,
        @inject("ClassesRepository")
        private classesRepository: IClassesRepository
    ) {}

    async execute(data: ICreateCommentForm): Promise<CommentDto> {
        // const classes = await this.classesRepository.getClass(data.id_class);
        // if (!classes) 
            // throw new AppError("Classe inválida", 400) 
        
        const comment = await this.commentRepository.create(data); 
        return new CommentDto(comment)

    }
}

export { CreateCommentUseCase };