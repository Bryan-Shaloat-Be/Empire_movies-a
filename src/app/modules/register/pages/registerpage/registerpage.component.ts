import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrl: './registerpage.component.css'
})
export class RegisterpageComponent {
  change_view: boolean = true;

constructor(public router: Router){}
  registerView(){
  }
}
