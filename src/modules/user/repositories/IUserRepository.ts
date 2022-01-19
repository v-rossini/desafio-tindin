import { IAuthUserForm } from "../forms/IAuthUserForm";
import { User } from "../entity/User";
import { IUserDto } from "../dtos/IUserDto";

interface IUserRepository {
    findByEmail(email: string): Promise<User | null>;
}

export { IUserRepository };