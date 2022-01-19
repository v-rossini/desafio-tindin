import { getRepository, Repository } from "typeorm";

import { IUserRepository } from "./IUserRepository";
import { User } from "../entity/User";
import mongoose, { Model } from "mongoose";

class UserRepository implements IUserRepository {
    private model: Model<User>;

    async findByEmail(email: string): Promise<User | null> {
        return await this.model.findOne({email: email});
    }
}
export { UserRepository };
