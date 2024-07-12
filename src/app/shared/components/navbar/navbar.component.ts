import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FiltersService } from '@modules/category/services/filters.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu: boolean = false;

  constructor(public router: Router, private asfilter: FiltersService) {}  //recordar cambiar a privado los routers 

  link_menu: {
    defaultOptions: Array<any>, accesslink: Array<any>
  } = { defaultOptions: [], accesslink: [] }

  onclickmenu() {
    this.menu = !this.menu;  //cambio en la variable para desplegar un menu
  }

  filtercategory(category: string) {
    this.asfilter.setCategory(category);  //Utilizar un servicio reactivo para escuchar los cambios de la categorias y filtrar
    this.router.navigate(['/category']);
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
        name: "favoritos",
        router: ['/','favorites']
      }
    ];
    this.asfilter.callcategory.subscribe(category => {
    });
  }
}
