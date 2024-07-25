import { Component, OnInit } from '@angular/core';
import {  FormBuilder,FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '@modules/auth/services/user.service';


@Component({
  selector: 'app-authpage',
  templateUrl: './authpage.component.html',
  styleUrl: './authpage.component.css'
})
export class AuthpageComponent implements OnInit{

  successMessage: string = '';
  change_view: boolean = false;
  formUserRegister: FormGroup = new FormGroup({});

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

  constructor(public router: Router, private userService: UserService, private fr: FormBuilder){}


  registerView(){
    this.change_view = !this.change_view  //Cambio de vista entre el registro y el inicio de sesion
    console.log(this.change_view);
  }

  registerUser(){ //uso del servicio para registros de usuarios nuevos 
    if (this.formUserRegister.valid){
      console.log(this.formUserRegister.value)
      const userData = this.formUserRegister.value
      this.userService.registerService(userData).subscribe(response =>{
        console.log('usuario registrado con exito', response);
      }, error =>{
        console.error('Registration error:', error);
      });
    }
    this.successMessage = 'Registro exitoso. Redirigiendo...'; // Mensaje de registro exitoso y recarga de pagina
  }

  ngOnInit(): void {
      this.formUserRegister = this.fr.group({
      'userName': new FormControl('', Validators.required),
      'mail': new FormControl('',[Validators.required, Validators.email]), // Grupo de formulario con validaciones para el registro de usuarios 
      'password': new FormControl('',Validators.required),
      'preferences': new FormControl('', Validators.required)
    });
  }
}
