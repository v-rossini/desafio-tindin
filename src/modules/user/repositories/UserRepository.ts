import { getRepository, Repository } from "typeorm";

import { IUserRepository } from "./IUserRepository";
import { User } from "../entity/User";

class UserRepository implements IUserRepository {
    private repository: Repository<User>;
    constructor() {
        this.repository = getRepository(User);
    }

    findByEmail(email: string): Promise<User | undefined> {
        const user = this.repository.findOne({ email });
        return user;
    }
}
export { UserRepository };
