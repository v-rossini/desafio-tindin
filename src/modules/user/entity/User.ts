import {
    Column,
    Entity,
  } from 'typeorm';
  
  @Entity("users")
  class User {

    @Column()
    email: string;
  
    @Column()
    name: string;
  
    @Column()
    password: string;
  
  }

  export { User };