import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postlist } from "./post.state";
// const PostState= 

const getselector = createFeatureSelector<postlist>('post')


export const postSelector = createSelector(getselector,(state)=>{
    return state.post
})

export const postSelectorById = createSelector(getselector,(state: { post: { [x: string]: any; }; },props: { id: string | number; })=>{
    console.log(props)
    return state.post["find"]((post:any)=>post.id==props.id)
})