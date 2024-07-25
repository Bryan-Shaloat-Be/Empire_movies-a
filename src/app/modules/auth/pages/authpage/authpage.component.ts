import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '@modules/auth/services/user.service';


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
  successMessage: string = '';

  constructor(public router: Router, private userService: UserService){}


  registerView(){
    this.change_view = !this.change_view  //Cambio de vista entre el registro y el inicio de sesion
    console.log(this.change_view);
  }

  registerUser(form: NgForm){ //uso del servicio para registros de usuarios nuevos 
    const userData = {
      userName: form.value.userName,
      mail: form.value.mail,
      password: form.value.password,
      preferences: 'action' 
    }
    this.userService.registerService(userData).subscribe(response =>{
      console.log('usuario registrado con exito', response);
    }, error =>{
      console.error('Registration error:', error);
    });
  
    this.successMessage = 'Registro exitoso. Redirigiendo...'; // Mensaje de registro exitoso y recarga de pagina
    setTimeout(() => {
      window.location.reload();
    }, 2000); 
  }

  ngOnInit(): void {
    this.formlogingroup = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    })
  }

  navigatedtohome(){  // Login inprovisado 
    const email = this.formlogingroup.get('email')?.value;
    const password = this.formlogingroup.get('password')?.value;  // Toma de valores del formulario
    if(email !== ''){
      this.router.navigate(['/movies'])  //ligera validacion de pruebas
    }else{
      alert('No ingreso su usuario')
    } 
  }
}
