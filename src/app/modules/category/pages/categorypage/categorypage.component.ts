import { Component, OnDestroy, OnInit } from '@angular/core';
import * as data from '../../../../data/movies.json'
import { movieslist } from '@cores/models/movies.model';
import { Subscription } from 'rxjs';
import { CategoryFilterService } from '@modules/category/services/category-filter.service';

@Component({
  selector: 'app-categorypage',
  templateUrl: './categorypage.component.html',
  styleUrls: ['./categorypage.component.css']
})
export class CategorypageComponent implements OnInit, OnDestroy {
  listObservers$: Subscription[] = [];
  categorys: string | null = '';
  SeriesC: any[] = [];
  MoviesC: any[] = [];

  constructor( private categoryFilter: CategoryFilterService ) {}

  ngOnInit(): void {
    const observer$ = this.categoryFilter.callcategory.subscribe(category => {
      if (category) {
        console.log('inicio de componente');
        this.GetMoviesCategory(category);
        this.GetSeriesCategory(category);
      }
      this.categorys = category
    });
    this.listObservers$.push(observer$);
  }

  ngOnDestroy(): void {
    console.log('Componente destruido y suscripciones desuscritas');
    this.listObservers$.forEach(u => u.unsubscribe());
  }

  /*filtersmoviescategory(category: string): void {
    this.mockmoviesf = this.mockmovies.filter(catego => catego.genre === category);  //Filtrar las peliculas por categorias 
    this.categorys = category;
  }*/

  GetMoviesCategory(Category: any){
    this.categoryFilter.getMoviesCategory(Category).subscribe(response=>{
    this.MoviesC = response.data
    })
  }

  GetSeriesCategory(Category: any){
    this.categoryFilter.getSeriesCategory(Category).subscribe(response =>{
      this.SeriesC = response.data
      console.log(response)
    })
  }
}