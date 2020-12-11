import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
   
  offers:any; 

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

    Backendless.Data.of( "Offer" ).find()
    .then((result) => {
      console.log(result);
      this.offers = result || [];
    })
    .catch((error) => {
    });
  }

  public handleLogoutButtonClick(){
    Backendless.UserService.logout()
    .then(() => {
      this.router.navigate(['login'])
    })
    .catch( function( error ) {
    });
  }
}
