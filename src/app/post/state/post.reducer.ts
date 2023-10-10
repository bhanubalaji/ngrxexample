import { createReducer, on } from "@ngrx/store"
import { initialState } from "./post.state"
import { deletedata, submitdata, updatedata } from "./post.actions"


const _postreducer = createReducer(initialState,
    on(submitdata,(state,action)=>{
        let post = {...action.data};
        post.id=(state.post.length+1).toString()
        return{
            ...state,
            post:[...state.post, post]
        }
    }),on(updatedata,(state,action)=>{
        let post = {...action.datas};
        let updatedate = state.post.map((item)=>(item.id == post.id)? post: item)
        return{
            ...state,
            post:updatedate
        }
    }),on(deletedata,(state,action)=>{
        let id= action.id
        let deletedata=state.post.filter(item=>(item.id!==id))
        return{
            ...state,
            post:deletedata
        }
    })
    )







export function postReducer(state:any,action:any){
    return _postreducer(state,action)
}
