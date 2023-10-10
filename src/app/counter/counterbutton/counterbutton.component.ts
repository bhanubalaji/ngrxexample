import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, inputvalue, reset } from '../state/counter.actions';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.css']
})
export class CounterbuttonComponent {

  inputvalue:any


constructor(private store:Store<AppState>){}
  increment(){
this.store.dispatch(increment())
  }
  decrement(){
    this.store.dispatch(decrement())
  }
  reset(){
    this.store.dispatch(reset())
  }

  addvalue(){
    console.log(this.inputvalue);
    this.store.dispatch(inputvalue({ count: +this.inputvalue}))
  }

}
