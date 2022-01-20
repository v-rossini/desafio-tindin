import { inject, injectable } from "tsyringe";

import { IClassesRepository } from "../../repositories/IClassesRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { IClassFilters } from "../../forms/IClassFilters";
import { ClassDto } from "../../dtos/ClassDto";

@injectable()
class ShowClassUsecase {
    constructor(
        @inject("ClassesRepository")
        private classesRepository: IClassesRepository,
    ) {}

    async execute(id: string): Promise<ClassDto | null> {
        
        const classes = await this.classesRepository.getClass(id);
        if (classes)
            return new ClassDto(classes)
        
        return null

    }
}

export { ShowClassUsecase };