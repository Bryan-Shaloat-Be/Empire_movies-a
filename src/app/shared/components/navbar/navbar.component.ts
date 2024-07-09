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
  }

  filtercategory(category: string) {
    this.asfilter.setCategory(category);
  }

  ngOnInit(): void {
    this.link_menu.defaultOptions = [
      {
        name: "Inicio",
        router: ['/','movies']
      },
      {
        name: "Categorias",
      }
    ];
    this.asfilter.callcategory.subscribe(category => {
      if (category) {
        this.router.navigate(['/category']);
      }
    });
  }
}
