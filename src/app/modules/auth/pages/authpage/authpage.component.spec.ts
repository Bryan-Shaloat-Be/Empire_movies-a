import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthpageComponent } from './authpage.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http'
import { UserService } from '@modules/auth/services/user.service';
import { Observable, of } from 'rxjs';

describe('AuthpageComponent', () => {
  let component: AuthpageComponent;
  let fixture: ComponentFixture<AuthpageComponent>;
  let router: Router;
  let service: UserService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientModule],
      declarations: [AuthpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthpageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router)
    service = TestBed.inject(UserService)
    
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Pruebas para login', () => {
    component.loginUser()
    const userdat = {}
    spyOn(service, 'loginservice').and.returnValue(of(userdat))
  });

  it('should create', () => {
    component.registerUser()
    
    const spyserv = spyOn(service, 'registerService')
  }); 

  it('should create', () => {
    component.registerView()
  });



  /* it('Verificacion de condicionales se espera que sea invalido ',() => {
    spyOn(window, 'alert');
    component.formlogingroup.setValue({email:'', password:'xdededede'});     // Test para el else
    component.navigatedtohome()
    expect(window.alert).toHaveBeenCalledWith('No ingreso su usuario')
  }); 

  /*it('Verificacion de condicionales se espera que sea valido',() => {
    spyOn(component.router,'navigate');
    component.formlogingroup.setValue({email:'sasd', password:'xdededede'});  //Test para el if
    component.navigatedtohome()

    expect(component.router.navigate).toHaveBeenCalledWith(['/movies'])
  });*/
  
});


