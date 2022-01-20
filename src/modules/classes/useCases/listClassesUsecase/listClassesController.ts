import { Response, Request } from "express";
import { container } from "tsyringe";

import { ClassDto } from "../../dtos/ClassDto";
import { IClassFilters } from "../../forms/IClassFilters";
import { AppError } from "../../../../shared/errors/AppError";
import { ListClassesUseCase } from "./listClassesUsecase";

class ListClassesController {
    async handle(request: Request, response: Response): Promise<Response> {
        try {const listClassesUsecase = container.resolve(ListClassesUseCase);

        const  query_data: IClassFilters   = request.params;
        const { email } = request.user;
        let classes: ClassDto[] | undefined;
        
        classes = await listClassesUsecase.execute(query_data);
        
        return response.status(201).json(classes);}
        catch(err) {
            if (err instanceof AppError)
                return response.status(err.statusCode).json(err.message)
            return response.status(500).json("Houve um erro inesperado")
            }
    }
}
export { ListClassesController };