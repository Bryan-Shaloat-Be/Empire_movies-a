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

  constructor(private router: Router, private asfilter: FiltersService) {}

  link_menu: {
    defaultOptions: Array<any>, accesslink: Array<any>
  } = { defaultOptions: [], accesslink: [] }

  onclickmenu() {
    this.menu = !this.menu;
    console.log('Menu state changed to:', this.menu);
  }

  filtercategory(category: string) {
    this.asfilter.setCategory(category);
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
