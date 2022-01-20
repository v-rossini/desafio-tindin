
import { ICreateCommentForm } from "../forms/ICreateCommentForm";
import { IGetCommentsForm } from "../forms/IGetCommentsForm";
import { Comment } from "../entity/Comment"


interface ICommentRepository {
    getCommentsByClass(id: String): Promise<Comment[]>;
    create(data: ICreateCommentForm): Promise<Comment>;
    findById(id: string): Promise<Comment | null>
    delete(id: string): Promise<void>;
}

export { ICommentRepository };