import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginInterface } from "./login.state";

export const getfeature =createFeatureSelector<LoginInterface>('successdata')
export const loginSuccess = createSelector(getfeature,(state)=>{
    return state.successdata
})