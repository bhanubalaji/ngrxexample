import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/post.model";

export const submitdata = createAction('submitdata',props<{data:Post}>())


export const updatedata = createAction('updatedata',props<{datas:any}>())

export const  deletedata = createAction('deletedata',props<{id:any}>())