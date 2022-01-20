import mongoose, { Document } from 'mongoose';

export const userSchema = new mongoose.Schema( {
  name: {type: String, trim: true, required: true},

  email: {type: String, trim: true, required: true},

  password: {type: String, trim: true, required: true}}
  );

  export class User {
    name: string;
    email: string;
    password: string;
} 