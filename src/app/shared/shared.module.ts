import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionMoviesComponent } from './components/section-movies/section-movies.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SectionMoviesComponent,
    CardMovieComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    SectionMoviesComponent,
    CardMovieComponent
  ]
})
export class SharedModule { }
