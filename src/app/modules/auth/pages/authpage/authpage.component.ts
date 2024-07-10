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

  constructor(private router: Router){}

  ngOnInit(): void {
    this.formlogingroup = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')

    })
  }

  navigatedtohome(){
    
    this.router.navigate(['/movies'])
  }
}
