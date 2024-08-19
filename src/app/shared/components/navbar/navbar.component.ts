import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryFilterService } from '@modules/category/services/category-filter.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu: boolean = false;
  isClickable: boolean = true;

  constructor(public router: Router, private categoryChange: CategoryFilterService, private cookieService: CookieService) {}  //recordar cambiar a privado los routers 

  link_menu: {
    defaultOptions: Array<any>, accesslink: Array<any>
  } = { defaultOptions: [], accesslink: [] }

  onclickmenu() {
    this.menu = !this.menu;
    console.log(this.menu);  //cambio en la variable para desplegar un menu
  }

  filtercategory(category: string) {
    this.categoryChange.setCategory(category);  //Utilizar un servicio reactivo para escuchar los cambios de la categorias y filtrar
    this.router.navigate(['/category']);
  }

  logout(){
    this.cookieService.delete('token', '/');
    console.log('Sesión cerrada, cookie eliminada');
    this.router.navigate(['/auth/login']);  
  }

  ngOnInit(): void {
    console.log('NavbarComponent initialized with menu state:', this.menu);
    this.menu = false
    this.link_menu.defaultOptions = [
      {
        name: "Inicio",
        router: ['/','movies']
      },
      {
        name: "Categorias",
      }
      ,
      {
        name: "Peliculas",
        router: ['/','onlyMovies']
      },
      {
        name: "Series",
        router: ['/','series']
      }
      ,
      {
        name: "Historial",
        router: ['/','history']
      }
      ,
      {
        name: "Favoritos",
        router: ['/','favorites']
      }
    ];
    this.categoryChange.callcategory.subscribe(category => {
    });
  }
}
