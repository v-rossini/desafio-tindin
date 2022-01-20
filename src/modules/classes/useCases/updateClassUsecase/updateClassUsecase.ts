import { inject, injectable } from "tsyringe";

import { IClassesRepository } from "../../repositories/IClassesRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { IClassFilters } from "../../forms/IClassFilters";
import { ClassDto } from "../../dtos/ClassDto";
import { IUpdateClassForm } from "../../forms/IUpdateClassForm";

@injectable()
class UpdateClassUsecase {
    constructor(
        @inject("ClassesRepository")
        private classesRepository: IClassesRepository,
    ) {}

    async execute(query_data: IUpdateClassForm): Promise<ClassDto | null> {
        
        const classes = await this.classesRepository.update(query_data);
        if (classes)
            return new ClassDto(classes)
        
        return null

    }
}

export { UpdateClassUsecase };