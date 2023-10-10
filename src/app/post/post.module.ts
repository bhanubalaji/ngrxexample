import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostlistComponent } from "./postlist/postlist.component";
import { AddpostComponent } from "./addpost/addpost.component";
import { EditpostComponent } from "./editpost/editpost.component";
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { appReducer } from "../store/app.state";
import { postReducer } from "./state/post.reducer";
const routes:Routes=[
    {path:'', component:PostlistComponent, 
children:[{path:'addpost',component:AddpostComponent},
{path:'edit/:id',component:EditpostComponent}]
}
]
@NgModule({
    declarations:[PostlistComponent,AddpostComponent,EditpostComponent,],
    imports:[CommonModule,ReactiveFormsModule, RouterModule.forChild(routes),StoreModule.forFeature('post',postReducer)]
})


export class PostModule{}
