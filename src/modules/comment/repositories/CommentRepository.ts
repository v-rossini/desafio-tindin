import { getRepository, Repository } from "typeorm";
import { Classes } from "../../classes/entity/Classes";

import { Comment, commentSchema } from "../entity/Comment";
import { ICreateCommentForm } from "../forms/ICreateCommentForm";
import { IGetCommentsForm } from "../forms/IGetCommentsForm";
import { ICommentRepository } from "./ICommentRepository";
import mongoose, { Model } from "mongoose";

export class CommentRepository implements ICommentRepository {
  private model: Model<Comment>;

  constructor() {
    this.model = mongoose.model("Comment", commentSchema);
  }

  async getCommentsByClass(id: string): Promise<Comment[]> {
    return await this.model.find({ id_class: id }).lean(true);
  }

  async create(data: ICreateCommentForm): Promise<Comment> {
    const comment = new this.model(data);
    await comment.save();
    return comment.toObject();
  }

  async findById(id: string): Promise<Comment | null> {
    return await this.model.findById(id).lean(true);
  }

  async delete(id: string): Promise<void> {
    this.model.findByIdAndDelete(id).lean(true);
  }
}
