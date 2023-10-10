import { Post } from "src/app/models/post.model"


export interface postlist{
    post:Post[]
}

export const initialState = {
    post:[
        {id:'1',title:'ravi', description:'sample1'},{id:'2',title:'ra', description:'sample2'}
]

}