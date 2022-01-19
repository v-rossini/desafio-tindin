import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Comment } from "../../comment/entity/Comment";

@Entity("classes")
class Classes {

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    video: string;

    @Column()
    date_init: Date;

    @Column()
    date_end: Date;

    @CreateDateColumn()
    date_created: Date;

    @UpdateDateColumn()
    date_updated: Date;

    @OneToMany(() => Comment, comment => comment.id_class)
    comments: Comment[];

    @Column()
    total_comments: number

}

export { Classes };