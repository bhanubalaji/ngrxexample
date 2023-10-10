import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { PostlistComponent } from './post/postlist/postlist.component';
import { AddpostComponent } from './post/addpost/addpost.component';
import { EditpostComponent } from './post/editpost/editpost.component';

const routes: Routes = [
  {path:'counter', component:CounterComponent},
{path:'post', loadChildren:()=>import('./post/post.module').then((m)=>m.PostModule)},
{path:'login',loadChildren:()=>import('./login/login.module').then((m)=>m.LoginModule)}
];

  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
