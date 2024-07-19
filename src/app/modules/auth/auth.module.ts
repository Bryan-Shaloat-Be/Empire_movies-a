import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthpageComponent } from './pages/authpage/authpage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterModule } from '@modules/register/register.module';


@NgModule({
  declarations: [
    AuthpageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    RegisterModule
  ],
  exports:[
    AuthpageComponent
  ]
})
export class AuthModule { }
