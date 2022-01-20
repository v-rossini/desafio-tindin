import { Response, Request } from "express";
import { container } from "tsyringe";

import { ICreateClassForm } from "../../forms/ICreateClassForm";
import { ClassDto } from "../../dtos/ClassDto";
import { CreateClassUseCase } from "./createClassUsecase";
import { AppError } from "../../../../shared/errors/AppError";

class CreateClassController {
    async handle(request: Request, response: Response): Promise<Response> {
        
        const createClassUseCase = container.resolve(CreateClassUseCase);

        const  class_data : ICreateClassForm = request.body;
        const { email } = request.user;
        let classes: ClassDto | undefined;
        
        classes = await createClassUseCase.execute(class_data);

        return response.status(201).json(classes);}

}
export { CreateClassController };