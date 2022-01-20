import { inject, injectable } from "tsyringe";

import { IClassesRepository } from "../../repositories/IClassesRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { IClassFilters } from "../../forms/IClassFilters";
import { ClassDto } from "../../dtos/ClassDto";

@injectable()
class ListClassesUseCase {
    constructor(
        @inject("CommentRepository")
        private classesRepository: IClassesRepository,
    ) {}

    async execute(query_data?: IClassFilters): Promise<ClassDto[]> {
        const classes = await this.classesRepository.getAllClasses(query_data);

        return classes.map(_class => new ClassDto(_class))

    }
}

export { ListClassesUseCase };