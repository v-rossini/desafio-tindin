import { Comment } from '../entity/Comment';

class CommentDto {
    id: string;
    id_class: string;
    comment: string;
    date_created: Date;



constructor(comment: Comment){
    Object.assign(this, comment)
}

}
export { CommentDto };