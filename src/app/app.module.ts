import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from '@modules/home/page/homepage/homepage.component';
import { CategoryModule } from '@modules/category/category.module';
import { SharedModule } from '@shared/shared.module';
import { HomeModule } from '@modules/home/home.module';
import { AuthModule } from '@modules/auth/auth.module';
import { MoviesModule } from '@modules/movies/movies.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CategoryModule,
    SharedModule,
    HomeModule,
    AuthModule,
    MoviesModule,
    RouterModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
