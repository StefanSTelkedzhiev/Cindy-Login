import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
   
  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }

  public handleLoginButtonClick() {
    const {router} = this;
    const {email, password} = this.loginForm.value;
    Backendless.UserService.login( email, password, false )
    .then( function( loggedInUser ) {
    router.navigate(['offers']);
    })
    .catch( function( error ) {
    });
  }

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }
}
