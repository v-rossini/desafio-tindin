import { Comment } from "../../comment/entity/Comment";
import { Classes } from "../entity/Classes";
import { ClassesRepository } from "../repositories/ClassesRepository";

class ClassDto {
  name: String;
  description: String;
  video: string;
  data_init: Date;
  data_end: Date;
  date_created: Date;
  date_updated: Date;
  total_comments: number;

  comments: Comment[];
  last_comment: Comment;
  last_comment_date: Date;

  constructor(classes: Classes) {
    Object.assign(this, classes);
    this.comments = this.comments
      .sort(sortByDate)
      .slice(0,3);
    this.last_comment = this.comments[0];
    this.last_comment_date = this.last_comment.date_created;
  }
}

export { ClassDto };

function sortByDate (comment1: Comment, comment2: Comment): number {
return comment2.date_created.valueOf() - comment1.date_created.valueOf()
}
