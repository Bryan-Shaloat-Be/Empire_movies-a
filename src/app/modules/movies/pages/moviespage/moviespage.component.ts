import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as data from '../../../../data/movies.json'
import { movieslist } from '@cores/models/movies.model';
import { FiltersService } from '@modules/category/services/filters.service';

@Component({
  selector: 'app-moviespage',
  templateUrl: './moviespage.component.html',
  styleUrl: './moviespage.component.css'
})
export class MoviespageComponent implements OnInit{
  mockmovies: Array<movieslist> = [];
  mockmoviesf: Array<movieslist> = [];
  listObservers$: Array<any> =[];

  constructor(){}

  ngOnInit(): void {
    const {datas} : any = (data as any).default // lectura de datos 
    
    this.mockmovies = datas
  }
}

