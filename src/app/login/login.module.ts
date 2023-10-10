import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { LoginexampleComponent } from "./loginexample/loginexample.component"
import { NzFormModule } from 'ng-zorro-antd/form'
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { IconDefinition } from '@ant-design/icons-angular'
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon'
import {IconsProviderModule} from '../icons-provider.module'
import { StoreModule } from "@ngrx/store"
import { loginReducer } from "./state/login.reducer"
import { LoginEffects } from "./state/login.effects"
// import { loginReducer } from "./state/login.reducer"
import { EffectsModule } from '@ngrx/effects';



const routes:Routes=[
    {path:'',component:LoginexampleComponent}
]
@NgModule({
    declarations:[ LoginexampleComponent],
    imports:[CommonModule,
      EffectsModule.forFeature([LoginEffects]),
      RouterModule.forChild(routes),
      NzFormModule,
      ReactiveFormsModule,
      NzInputModule,
      NzButtonModule,
      FormsModule,
      IconsProviderModule,
      StoreModule.forFeature('successdata',loginReducer)],
  // providers: [
  //   { provide: NZ_ICONS, useValue: icons }
  // ]
})


export class LoginModule{}

