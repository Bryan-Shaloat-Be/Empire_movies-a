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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
