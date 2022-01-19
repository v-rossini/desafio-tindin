import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";

import { Classes } from "../../classes/entity/Classes";

@Entity("comments")
class Comment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    comment: string;

    @ManyToOne(() => Classes, classes => classes.comments)
    id_class: User;

    @CreateDateColumn()
    date_created: Date;

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Comment };