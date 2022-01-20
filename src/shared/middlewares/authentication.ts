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
): Promise<Response | undefined> {
    const authHeader = request.headers.authorization;
    console.log("chegou1")

    
        try {
            if (!authHeader) {
                const error =  new JWTTokenMissingError();
                return response.status(error.statusCode).json(error.message)
            }

            const [, token] = authHeader.split(" ");
            const { sub } = verify(token, auth.secret_token || "") as IPayload;

            const userRepository = new UserRepository();
            const user = await userRepository.findByEmail(sub);
            if (!user) {
                const error = new AppError("user not found");
                return response.status(error.statusCode).json(error.message)
            }

            request.user = { email: user.email };
            next();
        
        } catch {
            const error = new JWTInvalidTokenError();
            return response.status(error.statusCode).json(error.message)
        }
}