import { inject, injectable } from "tsyringe";

import { ICreateClassForm } from "../../forms/ICreateClassForm";
import { ClassDto } from "../../dtos/ClassDto";
import { IClassesRepository } from "../../repositories/IClassesRepository";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
class CreateClassUseCase {
    constructor(

        @inject("ClassesRepository")
        private classesRepository: IClassesRepository
    ) {}

    async execute(data: ICreateClassForm): Promise<ClassDto> {
        
        const classes = await this.classesRepository.create(data); 
        return new ClassDto(classes)

    }
}

export { CreateClassUseCase };