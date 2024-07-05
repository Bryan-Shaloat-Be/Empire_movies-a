import { Component, Input } from '@angular/core';
import { movieslist } from '@cores/models/movies.model';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrl: './card-movie.component.css'
})
export class CardMovieComponent {
  @Input() movie!: movieslist;
}
