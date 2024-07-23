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

  items_select: Array<any> = [
    {value: 'Accion', viewValue: 'Accion'},
    {value: 'Animacion', viewValue: 'Animacion'},
    {value: 'Aventura', viewValue: 'Aventura'},
    {value: 'Disparos', viewValue: 'Disparos'},
    {value: 'Catastrofe', viewValue: 'Catastrofe'},
    {value: 'Ciencia Ficcion', viewValue: 'Ciencia Ficcion'},
    {value: 'Comedia', viewValue: 'Comedia'},
    {value: 'Crimen', viewValue: 'Crimen'},
    {value: 'Deportes', viewValue: 'Deportes'},
    {value: 'Documentales', viewValue: 'Documentales'},  // Lista de categorias para elegir en el apartado de preferencias 
    {value: 'Drama', viewValue: 'Drama'},
    {value: 'Epicas', viewValue: 'Epicas'},
    {value: 'Fantasia', viewValue: 'Fantasia'},
    {value: 'Futurista', viewValue: 'Futurista'},
    {value: 'Historico', viewValue: 'Historico'},
    {value: 'Musical', viewValue: 'Musical'},
    {value: 'Religion', viewValue: 'Religion'},
    {value: 'Romance', viewValue: 'Romance'},
    {value: 'Suspenso', viewValue: 'Suspenso'},
    {value: 'Terror', viewValue: 'Terror'},
  ]

  constructor(public router: Router){}


  registerView(){
    this.change_view = !this.change_view  //Cambio de vista entre el registro y el inicion de sesion
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
