import { container } from "tsyringe";
import { getRepository, Repository } from "typeorm";
import { Classes, classesSchema } from "../entity/Classes";
import { IClassFilters } from "../forms/IClassFilters";
import { ICreateClassForm } from "../forms/ICreateClassForm";
import { IUpdateClassForm } from "../forms/IUpdateClassForm";
import { IClassesRepository } from "./IClassesRepository";
import mongoose, { Model } from "mongoose";

export class ClassesRepository implements IClassesRepository {
  private model: Model<Classes>;

  constructor() {
    this.model = mongoose.model("Classes", classesSchema);
  }

  async getAllClasses(
    filter?: IClassFilters
  ): Promise<Classes[]> {
    return await this.model.aggregate([
      { $match: {} }, //colocar filtros
      {
        $lookup: {
          from: "Comments",
          foreignField: "id_class",
          localField: "_id",
          as: "comments",
        },
      },
    ]);
  }

  async getClass(id: string): Promise<Classes | null> {
    return await this.model.findById(id);
  }

  async update(data: IUpdateClassForm): Promise<Classes | null> {
    const { id, ...updateQuery } = data;
    return await this.model.findByIdAndUpdate(
      { _id: id },
      { $set: updateQuery },
      { new: true }
    );
  }

  create(data: ICreateClassForm): Promise<Classes> {
    const classes = new this.model(data);
    return classes.save();
  }

  async delete(id: string): Promise<void> {
    this.model.findByIdAndDelete(id);
  }
}
