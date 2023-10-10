import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initialState, postlist } from '../state/post.state';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { postSelector } from '../state/post.selector';
import { deletedata } from '../state/post.actions';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit{
  data:any;
  post :Observable<Post[]> | undefined
constructor(private store:Store){}
  ngOnInit(): void {
  //  this.store.select(state => state).subscribe((state:any) => {
  //   // const postState = state || initialState.post;
  //   console.log('Selected Post State:', state.post.post);
  //   this.data=state.post.post
  // });
  this.post =this.store.select(postSelector)     
  console.log(this.post)
}



delete(id:any){

  this.store.dispatch(deletedata({id:id}))
}

// updateaction(id:any){
// console.log(id)
// }


  
}
