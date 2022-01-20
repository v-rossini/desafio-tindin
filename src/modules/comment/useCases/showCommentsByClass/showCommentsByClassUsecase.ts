import { inject, injectable } from "tsyringe";

import { ICreateCommentForm } from "../../forms/ICreateCommentForm";
import { CommentDto } from "../../dtos/CommentDto";
import { ICommentRepository } from "../../repositories/ICommentRepository";
import { IClassesRepository } from "../../../classes/repositories/IClassesRepository";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class ShowCommentsByClassUseCase {
    constructor(
        @inject("CommentRepository")
        private commentRepository: ICommentRepository,
    ) {}

    async execute(id: string): Promise<CommentDto[]> {
        const comments = await this.commentRepository.getCommentsByClass(id);

        return comments.map(comment => new CommentDto(comment))

    }
}

export { ShowCommentsByClassUseCase };