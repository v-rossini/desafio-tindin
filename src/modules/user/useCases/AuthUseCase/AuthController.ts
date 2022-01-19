import { Request, Response } from "express";
import { container } from "tsyringe";

import { IUserDto } from "../../dtos/IUserDto";
import { AuthUserUseCase } from "./AuthUserUsecase";
import { AppError } from "../../../../shared/errors/AppError";

class AuthUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        let token: IUserDto | undefined;
        
        try {
            const authUserUseCase = container.resolve(AuthUserUseCase);
            const { email, password } = request.body;

            token = await authUserUseCase.execute({ email, password });
        } catch(err)  {
            return response.status(400).json(err);
        }

        return response.status(200).json(token);
    }
}

export { AuthUserController };