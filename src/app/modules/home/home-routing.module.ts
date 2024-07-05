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
    loadChildren:() => import(`@modules/favorites/favorites.module`).then(m => m.FavoritesModule)
  },
  {
    path: 'movies',
    loadChildren:() => import(`@modules/favorites/favorites.module`).then(m => m.FavoritesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
