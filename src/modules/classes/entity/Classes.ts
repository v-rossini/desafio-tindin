import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("classes")
class Classes {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    video: string;

    @CreateDateColumn()
    date_init: Date;

    @CreateDateColumn()
    date_end: Date;

    @CreateDateColumn()
    date_created: Date;

    @CreateDateColumn()
    date_updated: Date;

    @Column()
    total_comments: number

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export { Classes };