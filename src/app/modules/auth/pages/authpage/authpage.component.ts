import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-authpage',
  templateUrl: './authpage.component.html',
  styleUrl: './authpage.component.css'
})
export class AuthpageComponent implements OnInit{

  formlogingroup : FormGroup = new FormGroup({});
  change_view: boolean = false;

  constructor(public router: Router){}


  registerView(){
    this.change_view = !this.change_view
    console.log(this.change_view);
  }


  ngOnInit(): void {
    this.formlogingroup = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })
  }

  navigatedtohome(){
    const email = this.formlogingroup.get('email')?.value;
    const password = this.formlogingroup.get('password')?.value;  // Toma de valores del formulario
    if(email !== ''){
      this.router.navigate(['/movies'])  //ligera validacion de pruebas
    }else{
      alert('No ingreso su usuario')
    } 
  }
}
