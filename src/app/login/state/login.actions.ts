import { createAction, props } from "@ngrx/store";

export const loginData = createAction('loginDate',props<{submitdata:any}>())   //get login action and export it 


export const loginsubmit = createAction('loginsubmit',props<{data:any}>())