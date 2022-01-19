import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "../../../../config/auth";
import { IUserDto } from "../../dtos/IUserDto";
import { IAuthUserForm } from "../../forms/IAuthUserForm";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class AuthUserUseCase {
    constructor(
        @inject("UsersRepository") private userRepository: IUserRepository
    ) {}
    async execute({
        email,
        password,
    }: IAuthUserForm): Promise<IUserDto> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new Error("Invalid Email or Password");
        }

        const correctPassword = await compare(password, user.password);
        if (!correctPassword) {
            throw new Error("Invalid Email or Password");
        }

        const token = sign({}, auth.secret_token, {
            subject: user.email,
            expiresIn: auth.token_expiration,
        });
        const res: IUserDTO = {
            email: user.email,
            token,
            name: user.name
        };
        return res;
    }
}

export { AuthUserUseCase };