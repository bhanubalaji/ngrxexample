import { CounterState } from "../counter/state/counter.state";
import { postlist } from "../post/state/post.state";
import { counterReducer} from "../counter/state/counter.reducer"
import { postReducer} from "../post/state/post.reducer"


export interface AppState{
    count:CounterState,
    post:postlist
}

export const appReducer = {
    counter:counterReducer,
    // post:postReducer
}