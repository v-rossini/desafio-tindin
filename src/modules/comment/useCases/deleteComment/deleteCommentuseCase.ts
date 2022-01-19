import { inject, injectable } from "tsyringe";

import { ICreateCommentForm } from "../../forms/ICreateCommentForm";
import { CommentDto } from "../../dtos/CommentDto";
import { ICommentRepository } from "../../repositories/ICommentRepository";
import { IClassesRepository } from "../../../classes/repositories/IClassesRepository";

@injectable()
class CreateCommentUseCase {
    constructor(
        @inject("CommentRepository")
        private commentRepository: ICommentRepository,
        @inject("ClassesRepository")
        private classesRepository: IClassesRepository
    ) {}

    async execute(id: string): Promise<void> {
        const comment = await this.commentRepository.findById(id)
        if (comment) {
            const classes = await this.classesRepository.getClass(comment.id_class)
            if (classes) {
            await this.classesRepository.update({id: comment.id_class, total_comments: classes.total_comments + 1})
            }
        }
    }
}

export { CreateCommentUseCase };


