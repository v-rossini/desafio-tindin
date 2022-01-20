import { inject, injectable } from "tsyringe";

import { ClassDto } from "../../dtos/ClassDto";
import { IClassesRepository } from "../../repositories/IClassesRepository";
import { ICommentRepository } from "../../../comment/repositories/ICommentRepository";


@injectable()
class DeleteClassUsecase {
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
            await this.classesRepository.delete(id)
            }
        }
    }
}

export { DeleteClassUsecase };