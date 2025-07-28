import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  constructor(private cartservice:CartService) { }
  cartlength: Number = 0;
  ngOnInit(): void {
    // Initialize cart length from the service
    this.cartservice.cartItems$ .subscribe(items => {
      this.cartlength = items.length;
      console.log('Cart length:', this.cartlength);
    });
    
    console.log('Initial cart length:', this.cartlength);
  }

}
