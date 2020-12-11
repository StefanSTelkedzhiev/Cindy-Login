import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  public handleRegisterButtonClick(){
  const {router} = this;
  Backendless.UserService.register(this.registerForm.value)
  .then( function( registeredUser ) {
    router.navigate(['offers']);
    })
  .catch( function( error ) {
    });
  }

}

