import { Comment } from "../../comment/entity/Comment";
//import mongoose, { Document } from "mongoose";
import { Document } from 'mongoose';
import { mongoose } from "../../../database/"



export const classesSchema = new mongoose.Schema( {
    name: {type: String, trim: true, required: true},

    description: {type: String, trim: true, required: true},

    video: {type: String, trim: true, required: true},

    date_init: {type: Date, required: true},

    date_end: {type: Date, required: true},

    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],

    total_comments: {type: Number, default: 0}}, {timestamps: {createdAt: "date_created", updatedAt: "date_updated"}});

export class Classes {
    name: string;
    description: string;
    video: string;
    date_init: Date;
    date_end: Date;
    date_created: Date;
    date_updated: Date;
    comments: Comment[];
    total_comments: string;
} 
