import { Comment } from "../../comment/entity/Comment";

interface IClassDto {

id: string,
name: String,
description: String,
video: string,
data_init: Date,
data_end: Date,
date_created: Date,
date_updated: Date,
total_comments: number,
comments: Comment[],
last_comment: Comment,
last_comment_date: Date



}

export { IClassDto };