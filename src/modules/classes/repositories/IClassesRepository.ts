import { Classes } from "../entity/Classes";
import { IClassFilters } from "../forms/IClassFilters";
import { ICreateClassForm } from "../forms/ICreateClassForm";
import { IUpdateClassForm } from "../forms/IUpdateClassForm";


interface IClassesRepository {
    getAllClasses(filter?: IClassFilters): Promise<Classes[]>;
    getClass(id: string): Promise<Classes | null>;
    update(data: IUpdateClassForm): Promise<Classes | null>;
    create(data: ICreateClassForm): Promise<Classes>;
    delete(id: string): Promise<void>;
}

export { IClassesRepository };