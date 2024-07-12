import { Component, OnDestroy, OnInit } from '@angular/core';
import * as data from '../../../../data/movies.json'
import { movieslist } from '@cores/models/movies.model';
import { FiltersService } from '@modules/category/services/filters.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categorypage',
  templateUrl: './categorypage.component.html',
  styleUrls: ['./categorypage.component.css']
})
export class CategorypageComponent implements OnInit, OnDestroy {
  mockmovies: Array<movieslist> = [];
  mockmoviesf: Array<movieslist> = [];
  listObservers$: Subscription[] = [];
  categorys: string = '';

  constructor( private asfilter: FiltersService) {}

  ngOnInit(): void {
    this.mockmovies = (data as any).default.datas; 
    

    const observer$ = this.asfilter.callcategory.subscribe(category => {
      if (category) {
        console.log('inicio de componente');
        this.filtersmoviescategory(category);
      }
    });
    this.listObservers$.push(observer$);
  }

  ngOnDestroy(): void {
    console.log('Componente destruido y suscripciones desuscritas');
    this.listObservers$.forEach(u => u.unsubscribe());
  }

  filtersmoviescategory(category: string): void {
    this.mockmoviesf = this.mockmovies.filter(catego => catego.genre === category);  //Filtrar las peliculas por categorias 
    this.categorys = category;
   
  }
}