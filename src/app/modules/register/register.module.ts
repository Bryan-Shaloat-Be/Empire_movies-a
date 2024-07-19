import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterpageComponent } from './pages/registerpage/registerpage.component';
import { AuthModule } from '@modules/auth/auth.module';



@NgModule({
  declarations: [
    RegisterpageComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
  
],
  exports:[
    RegisterpageComponent
  ]
})
export class RegisterModule { }
