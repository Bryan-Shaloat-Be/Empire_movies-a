import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  menu: boolean = false
  link_menu: {
    defaultOptions: Array<any>, accesslink: Array<any>
  } = {defaultOptions:[], accesslink:[] }

  onclickmenu(){
    this.menu = !this.menu;
  }

  ngOnInit(): void {
    this.link_menu.defaultOptions = [
      {
        name: "Inicio",
        router:['/']
      },
      {
        name: "Categorias",
        router:['/']
      },
    ] 
  }
}
