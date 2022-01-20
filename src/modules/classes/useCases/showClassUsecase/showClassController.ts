import { Response, Request } from "express";
import { container } from "tsyringe";

import { ClassDto } from "../../dtos/ClassDto";
import { IClassFilters } from "../../forms/IClassFilters";
import { AppError } from "../../../../shared/errors/AppError";
import { ShowClassUsecase } from "./showClassUsecase";

class ShowClassController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {const showClassUsecase = container.resolve(ShowClassUsecase);

        const  { id }   = request.params;
        const { email } = request.user;
       
        const classes = await showClassUsecase.execute(id);
        if (classes)
            return response.status(201).json(classes);
        
        return response.status(404).json({message: "ID não encontrado"})
        }
        catch(err) {
            if (err instanceof AppError)
                return response.status(err.statusCode).json(err.message)
            return response.status(500).json("Houve um erro inesperado")
            }
    }
}
export { ShowClassController };