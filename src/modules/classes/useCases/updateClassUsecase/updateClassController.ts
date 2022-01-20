import { ClassDto } from "../../dtos/ClassDto";
import { IClassFilters } from "../../forms/IClassFilters";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateClassForm } from "../../forms/IUpdateClassForm";
import { UpdateClassUsecase } from "./updateClassUsecase"
import { Request, Response } from "express";
import { container } from "tsyringe";

class UpdateClassController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {const updateClassUsecase = container.resolve(UpdateClassUsecase);

            const  query_data: IUpdateClassForm  = request.params;
            const { email } = request.user;
            
            const classes = await updateClassUsecase.execute(query_data);
        
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
export { UpdateClassController };