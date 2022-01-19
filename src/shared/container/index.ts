import { container } from "tsyringe";

import { IClassesRepository } from "../../modules/classes/repositories/IClassesRepository";
import { ClassesRepository } from "../../modules/classes/repositories/ClassesRepository";
import { ICommentRepository } from "../../modules/comment/repositories/ICommentRepository";
import { CommentRepository } from "../../modules/comment/repositories/CommentRepository";
import { IUserRepository } from "../../modules/user/repositories/IUserRepository";
import { UserRepository } from "../../modules/user/repositories/UserRepository";

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
);

container.registerSingleton<ICommentRepository>(
    "CommentsRepository",
    CommentRepository
);
container.registerSingleton<IClassesRepository>(
    "ClassesRepository",
    ClassesRepository
);