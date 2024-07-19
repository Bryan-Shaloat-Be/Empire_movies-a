import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './page/homepage/homepage.component';

const routes: Routes = [
  {
    path: 'favorites',
    loadChildren:() => import(`@modules/favorites/favorites.module`).then(m => m.FavoritesModule)
  },
  {
    path: 'category',
    loadChildren:() => import(`@modules/category/category.module`).then(m => m.CategoryModule)
  },
  {
    path: 'movies',
    loadChildren:() => import(`@modules/movies/movies.module`).then(m => m.MoviesModule)
  }
  ,
  {
    path: 'history',
    loadChildren:() => import(`@modules/history/history.module`).then(m => m.HistoryModule)
  }
  ,
  {
    path: 'series',
    loadChildren:() => import(`@modules/series/series.module`).then(m => m.SeriesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
