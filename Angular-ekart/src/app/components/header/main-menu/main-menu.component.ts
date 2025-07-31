import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  constructor(private cartservice:CartService,private loginService:LoginService) { }
  cartlength: Number = 0;
  IsLoggedIn: boolean ;
  ngOnInit(): void {
    // Initialize cart length from the service
    this.cartservice.cartItems$ .subscribe(items => {
      this.cartlength = items.length;
      console.log('Cart length:', this.cartlength);
    });
    
    console.log('Initial cart length:', this.cartlength);
    // Check if the user is logged in
    this.loginService.isLoggedIn$.subscribe(isLoggedIn => {
      this.IsLoggedIn = isLoggedIn;
      console.log('User logged in status:', this.IsLoggedIn);
    });
  }

}
