import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviespageComponent } from './pages/moviespage/moviespage.component';
import { share } from 'rxjs';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    MoviespageComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ]
})
export class MoviesModule { }
