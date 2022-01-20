import { Response, Request } from "express";
import { container } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { DeleteClassUsecase } from "./deleteClassUsecase";




class DeleteClassController {
    async handle(request: Request, response: Response): Promise<Response> {

        const deleteClassUsecase = container.resolve( DeleteClassUsecase );

        const { id } = request.params;
        const { email } = request.user;

        await deleteClassUsecase.execute(id);
        return response.status(204).send();


    }}


export { DeleteClassController };