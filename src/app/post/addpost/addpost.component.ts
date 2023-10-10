import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { submitdata } from '../state/post.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  registerdata:any
constructor(private fs:FormBuilder,private store:Store){}


  ngOnInit(): void {




this.registerdata = this.fs.group({
  title:[''],
  description:['']
})




  }


  submitdata(data:any){
    console.log(data.value)
    this.store.dispatch(submitdata({data:data.value}))
  }

}
