import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    ObjectID,
    ObjectIdColumn
} from "typeorm";

import { Classes } from "../../classes/entity/Classes";

@Entity("comments")
class Comment {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    comment: string;

    @ManyToOne(() => Classes, classes => classes.comments)
    id_class: Classes;

    @CreateDateColumn()
    date_created: Date;

}

export { Comment };