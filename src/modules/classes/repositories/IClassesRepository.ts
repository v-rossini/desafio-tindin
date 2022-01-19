import { IClassDto } from "../dtos/IClassDto";
import { IClassFilters } from "../forms/IClassFilters";
import { ICreateClassForm } from "../forms/ICreateClassForm";
import { IGetAllClassesForm } from "../forms/IGetAllClassesForm";
import { IGetClassForm } from "../forms/IGetClassForm";
import { IUpdateClassForm } from "../forms/IUpdateClassForm";


interface IClassesRepository {
    getAllClasses(data: IGetAllClassesForm, filter: IClassFilters): Promise<IClassDto[]>;
    getClass(data: IGetClassForm): Promise<IClassDto>;
    update(data: IUpdateClassForm): Promise<IClassDto>;
    create(data: ICreateClassForm): Promise<IClassDto>;
    delete(id: string): Promise<void>;
}

export { IClassesRepository };