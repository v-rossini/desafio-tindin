//import mongoose, { Document } from "mongoose";
import { Classes } from "../../classes/entity/Classes";
import { Document } from 'mongoose';
import { mongoose } from "../../../database/"





export const commentSchema = new mongoose.Schema( {
    comment: {type: String, trim: true, required: true},

    id_class: { type: mongoose.Schema.Types.ObjectId, ref: 'Classes' }},
 
    {timestamps: {createdAt: "date_created", updatedAt: "date_updated"}});

export class Comment {
    comment: string;
    date_created: Date;
    date_updated: Date;
    id_class: string;
} 