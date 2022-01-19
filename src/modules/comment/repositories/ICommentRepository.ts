import { ICommentDto } from "../dtos/ICommentResponseDto";
import { ICreateCommentForm } from "../forms/ICreateCommentForm";
import { IGetCommentsForm } from "../forms/IGetCommentsForm";


interface ICommentRepository {
    getComments(data: IGetCommentsForm): Promise<ICommentDto[]>;
    create(data: ICreateCommentForm): Promise<ICommentDto>;
    delete(id: string): Promise<void>;
}

export { ICommentRepository };