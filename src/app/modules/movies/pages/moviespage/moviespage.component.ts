import { Component, Input, OnInit } from '@angular/core';
import * as data from '../../../../data/movies.json'
import { movieslist } from '@cores/models/movies.model';

@Component({
  selector: 'app-moviespage',
  templateUrl: './moviespage.component.html',
  styleUrl: './moviespage.component.css'
})
export class MoviespageComponent implements OnInit{
  mockmovies: Array<movieslist> = [];
  constructor(){}

  ngOnInit(): void {
    const {datas} : any = (data as any).default
    this.mockmovies = datas
  }
}
