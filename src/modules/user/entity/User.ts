import {
    Column,
    Entity,
    PrimaryColumn,
  } from 'typeorm';
  import { v4 as uuid } from 'uuid';
  
  @Entity("users")
  class User {
    @PrimaryColumn()
    email: string;
  
    @Column()
    name: string;
  
    @Column()
    password: string;
  
  }

  export { User };