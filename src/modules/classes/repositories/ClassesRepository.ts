import { container } from "tsyringe";
import { getRepository, Repository } from "typeorm";

import { IClassDto } from "../dtos/IClassDto";
import { ICreateClassForm } from "../forms/ICreateClassForm";
import { IGetAllClassesForm } from "../forms/IGetAllClassesForm";
import { IGetClassForm } from "../forms/IGetClassForm";
import { IUpdateClassForm } from "../forms/IUpdateClassForm";
import { IClassesRepository } from "./IClassesRepository";

export class ClassesRepository implements IClassesRepository {
    getAllClasses(data: IGetAllClassesForm): Promise<IClassDto[]> {
        throw new Error("Method not implemented.");
    }
    getClass(data: IGetClassForm): Promise<IClassDto> {
        throw new Error("Method not implemented.");
    }
    update(data: IUpdateClassForm): Promise<IClassDto> {
        throw new Error("Method not implemented.");
    }
    create(data: ICreateClassForm): Promise<IClassDto> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
}