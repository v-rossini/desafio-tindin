import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import auth from "../../config/auth";
import { UserRepository } from "../../modules/user/repositories/UserRepository";
import { AppError } from "../errors/AppError";
import { JWTInvalidTokenError } from "../errors/JWTInvalidTokenError";
import { JWTTokenMissingError } from "../errors/JWTTokenMissingError";

interface IPayload {
    sub: string;
}
export async function authentication(
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    const authHeader = request.headers.authorization;

    try {
        if (!authHeader) {
            throw new JWTTokenMissingError;
        }

        const [, token] = authHeader.split(" ");
        const { sub } = verify(token, auth.secret_token || "") as IPayload;

        const userRepository = new UserRepository();
        const user = await userRepository.findByEmail(sub);
        if (!user) {
            throw new AppError("user not found");
        }
        request.user = { email: user.email };
        next();
    } catch {
        throw new JWTInvalidTokenError();
    }
}