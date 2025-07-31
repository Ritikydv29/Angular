import { Component } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `<h1>Welcome to {{ title }}!</h1>
  // <button (click)="title = 'My Application'">Change Title</button>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-ekart';
  // cartlength: Number = 0;
  constructor(private cartService:CartService){}
  // ngOnInit() {  
  //   // Initialize cart length from the service
  //   this.cartService.cartItems$.subscribe(items => {
  //     this.cartService.cartlength = items.length;
  //     console.log('Cart length app:', this.cartService.cartlength);
  //   });
    
  //   console.log('Initial cart length: app', this.cartService.cartlength);
  // }
}
