import { Component, Input, OnInit } from '@angular/core';
import { CartItem, CartItems, CartResponse, Product } from 'src/app/Models/Product.Model';
import { CartService } from 'src/app/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
declare var bootstrap: any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

    cartlength:Number = 0;
    item: Product ;
    CartItem:CartResponse;
    cartItems: CartItems[] = [];
    constructor( private cartService: CartService,private snackbar:MatSnackBar) {}


    ngOnInit(): void {
        this.cartService.cartItems$.subscribe({
            next: (items) => {
                this.cartItems = items;
                this.cartlength = items.length;
                // console.log('length of cart items:', this.cartlength);
                console.log('Cart items updated:', this.cartItems);
            },
            error: (err) => console.error('Error fetching cart items:', err)
        });
    
        this.cartService.GetCartId(localStorage.getItem('user') ? parseInt(localStorage.getItem('user')) : 0, ).subscribe({ 
            next: (response) => {
                this.CartItem = response;
                console.log('Cart items fetched:', this.cartItems);
            },
            error: (err) => console.error('Error fetching cart items:', err)
        });
}


    RemoveFromCart(CartItemId: number): void {
       this.cartService.RemoveFromCart(CartItemId).subscribe({
    next: (response) => {
        this.snackbar.open('Item removed from cart', 'Close', {
            duration: 2000
        });
      console.log('Item removed successfully:', response);
      // Optionally refresh the local cart data or UI here
    },
    error: (err) => {
      console.error('Error removing item from cart:', err);
    }
  });
    }
 
    
}
