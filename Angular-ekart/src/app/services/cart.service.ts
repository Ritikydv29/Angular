import { CartItem, CartItems, CartResponse } from '../Models/Product.Model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://localhost:7226/api';

  cartlength:Number = 0;
  private cartItemsSubject =new BehaviorSubject<CartItems[]>([]);

  cartItems$ = this.cartItemsSubject.asObservable();

  constructor(private http: HttpClient) {}

 

 addToCart(cart: CartItem): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Cart/add-cart`, cart).pipe(
      tap((response) => {
         this.GetCart(response.cartId).subscribe({
          next: (items) =>{
            this.cartItemsSubject.next(items);
            this.cartlength = items.length;
            console.log('Cart length after adding item:', this.cartlength);
          },
           error: (err) => console.error('Error fetching cart after adding item:', err)
         });
        // this.fetchCartItems(Cart.CartId); 
      })
     );
  }

  GetCart(CartId: number): Observable<CartItems[]> {
    return this.http.get<CartItems[]>(`${this.apiUrl}/CartItem/${CartId}`);
  }
  GetCartId(userId: number): Observable<CartResponse> {
    return this.http.get<CartResponse>(`${this.apiUrl}/cart/${userId}`).pipe(
      tap((response) => {
         this.GetCart(response.cartId).subscribe({
          next: (items) =>this.cartItemsSubject.next(items),
           error: (err) => console.error('Error fetching cart after adding item:', err)
         });
        // this.fetchCartItems(Cart.CartId); 
      })
     );
  }
 RemoveFromCart(CartItemId: number): Observable<String> {
  console.log('Removing item from cart:', CartItemId);
    return this.http.delete(`${this.apiUrl}/CartItem/${CartItemId}`, { responseType: 'text' }).pipe(
      tap(() => {
        this.cartItemsSubject.next(this.cartItemsSubject.getValue().filter(item => item.cartItemId !== CartItemId));
        this.cartlength = this.cartItemsSubject.getValue().length;
        console.log('Cart length after removal:', this.cartlength);
      })
    );
  }
  
}

