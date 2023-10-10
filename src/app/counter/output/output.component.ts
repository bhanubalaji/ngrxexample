import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCounter} from '../state/counter.selectors';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
counter:any=0


constructor(private store:Store<AppState>){}


  ngOnInit(): void {
this.store.select(getCounter).subscribe((res)=>{
  console.log(res)
  this.counter =res
})

  }



}
