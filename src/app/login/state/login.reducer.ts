import { createReducer, on } from "@ngrx/store"
import { initialState } from "./login.state"
import { loginsubmit } from "./login.actions"

const  _loginReducer = createReducer(initialState,
    on(loginsubmit,(state:any,action:any)=>{
        return {
            ...state,
            successdata:action.data
        }}
))


export function loginReducer(state:any,action:any){
    return _loginReducer(state, action)
}