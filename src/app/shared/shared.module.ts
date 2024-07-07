import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionMoviesComponent } from './components/section-movies/section-movies.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { RecommendationMoviesComponent } from './components/recommendation-movies/recommendation-movies.component';
import { HistoryViewComponent } from './components/history-view/history-view.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SectionMoviesComponent,
    CardMovieComponent,
    RecommendationMoviesComponent,
    HistoryViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    SectionMoviesComponent,
    CardMovieComponent,
    RecommendationMoviesComponent,
    HistoryViewComponent
  ]
})
export class SharedModule { }
