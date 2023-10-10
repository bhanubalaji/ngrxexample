import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { postSelectorById } from '../state/post.selector';
import { updatedata } from '../state/post.actions';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent {

  registerdata!: FormGroup
  id: any
  idresdata:any
  updateid: any;
  constructor(private fs: FormBuilder, private store: Store, private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.route.paramMap.subscribe((res: any) => {
      console.log(res.get('id'))
      const id = res.get('id')
      this.store.select(postSelectorById, { id }).subscribe((res) => {
        console.log(res)
        this.idresdata=res
        this.updateid=this.idresdata.id
        this.createdata()
      })
    })



  }

  createdata(){
    this.registerdata=new FormGroup({
      title: new FormControl(this.idresdata.title)  ,
      description:new FormControl(this.idresdata.description)
    })
  }


  updatedata(data: any) {
    console.log(data.value)
    data.value.id=this.updateid

    this.store.dispatch(updatedata({datas:data.value}))
  }

}
