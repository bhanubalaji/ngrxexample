import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Store} from '@ngrx/store';
import { loginData } from '../state/login.actions'
import { loginSuccess } from '../state/login.selector';

@Component({
  selector: 'app-loginexample',
  templateUrl: './loginexample.component.html',
  styleUrls: ['./loginexample.component.css']
})
export class LoginexampleComponent implements OnInit {
  msg:any
  constructor(private fb: NonNullableFormBuilder, private store:Store) {}
  ngOnInit(): void {
  console.log('jj')

this.store.select(loginSuccess).subscribe((res:any)=>{
if(res.body){
    console.log(res.body)
    console.log(res.body.result)
if(res.body.result== true){
  this.msg ='date submitted'

}
  }
})
  }

  validateForm: FormGroup<{
    userName: FormControl<string>;
    password: FormControl<string>;
    remember: FormControl<boolean>;
  }> = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    remember: [true]
  });

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      


this.store.dispatch(loginData({submitdata:this.validateForm.value}))   //dispatch a logiin action to action.ts





    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}


// this.store.select(loginSuccess).subscribe((res:any)=>{
//   console.log(res)
// })