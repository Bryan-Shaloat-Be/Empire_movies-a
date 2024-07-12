import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthpageComponent } from './authpage.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthpageComponent', () => {
  let component: AuthpageComponent;
  let fixture: ComponentFixture<AuthpageComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
      declarations: [AuthpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthpageComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router)
    fixture.detectChanges();
  });

  it('Verificacion de condicionales para la entrada de un formulario de inicio de sesion',() => {
    spyOn(window, 'alert');
    component.formlogingroup.setValue({email:'', password:'xdededede'});     // Test para el else
    component.navigatedtohome()
    expect(window.alert).toHaveBeenCalledWith('No ingreso su usuario')
  });

  it('Verificacion de condicionales para la entrada de un formulario de inicio de sesion',() => {
    spyOn(component.router,'navigate');
    component.formlogingroup.setValue({email:'sasd', password:'xdededede'});  //Test para el if
    component.navigatedtohome()

    expect(component.router.navigate).toHaveBeenCalledWith(['/movies'])
  });
});


