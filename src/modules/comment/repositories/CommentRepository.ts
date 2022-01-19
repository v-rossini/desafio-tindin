import { getRepository, Repository } from "typeorm";
import { Classes } from "../../classes/entity/Classes";

import { ICommentDto } from "../dtos/ICommentDto";
import { Comment } from "../entity/Comment";
import { ICreateCommentForm } from "../forms/ICreateCommentForm";
import { IGetCommentsForm } from "../forms/IGetCommentsForm";
import { ICommentRepository } from "./ICommentRepository";

class CommentRepository implements ICommentRepository {
    private commentsRepository: Repository<Comment>;
    private classRepository: Repository<Classes>;

    constructor() {
        this.commentsRepository = getRepository(Comment);
    }

    async getCommentsByClass(data: IGetCommentsForm): Promise<ICommentDto[]> {
        throw new Error("Method not implemented.");
    }

    async create(  data: ICreateCommentForm  ): Promise<ICommentDto> {
        throw new Error("Method not implemented.");
    }

    async delete(id: string): Promise<void> {
        await this.commentsRepository.delete({ id });
    }
}

export { CommentRepository };
