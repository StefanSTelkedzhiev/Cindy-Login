import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-offer',
  templateUrl: './add-new-offer.component.html',
  styleUrls: ['./add-new-offer.component.css']
})
export class AddNewOfferComponent implements OnInit {

  addOfferForm = new FormGroup({
    companyName: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    description: new FormControl(''),
    salary: new FormControl('', Validators.required)
  });

  constructor(
    private router: Router) { }

  ngOnInit(): void {
    Backendless.UserService.isValidLogin()
    .then((isValid) => {
      if (!isValid) {
        this.router.navigate(['login']);
      }
    })
    .catch((error) => this.router.navigate(['login']));
  }

  handleSubmitButtonClick(){
    const {router} = this;
    Backendless.Data.of( "Offer" ).save( this.addOfferForm.value )
    .then( function( savedObject ) {
      router.navigate(['offers']);
    })
    .catch( function( error ) {
      console.log(error);
    });
  }

}
