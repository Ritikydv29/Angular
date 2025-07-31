import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/Models/Category.Model';
import { Cart, CartItem, Product } from 'src/app/Models/Product.Model';
import { CategoryService } from 'src/app/services/Category.service';
import { ProductService } from 'src/app/services/product.service';
import { CartComponent } from './cart/cart.component';
import { CartService } from 'src/app/services/cart.service';
import { LoginService } from 'src/app/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
declare var bootstrap: any;
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];       // All products
  items: Product[] = [];          // Filtered products
  categories: Category[] = [];    // All categories
  selectedCategoryId: number | null = null;
  cartItems:CartItem;
  
  // @ViewChild(CartComponent) cartComponent!: CartComponent;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
     private cartService: CartService,
     private loginService: LoginService,
     private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.GetProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log('Products loaded:', this.products);
        this.items = data; 
      },
      error: (err) => console.error(err)
    });
  }

  loadCategories(): void {
    this.categoryService.GetCategories().subscribe({
      next: (data) => {
        this.categories = data;
        console.log('Categories loaded:', this.categories);
      },
      error: (err) => console.error(err)
    });
  }

  filterProductsByCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    console.log("Selected Category ID:", this.selectedCategoryId);
    
    this.items = this.products.filter(product => product.categoryId === categoryId);
    console.log("Filtered Products:", this.items);
  }

addtoCart(product: Product): void {
   
    const cartItem: CartItem = {

      UserId: this.loginService.getUser() ? parseInt(this.loginService.getUser()) : 0, 
      ProductId: product.productId,
      Quantity: 1 // Assuming a static quantity of 1 for now
    };
    this.cartService.addToCart(cartItem).subscribe({
    next: () => {
      this.snackBar.open('Product added to cart successfully!', 'Close', {
        duration: 2000
      });
      console.log('✅ Product added to cart and state updated!');
    },
    error: (err) => console.error('❌ Failed to add cart item:', err)
  });
  
}

  modalDescription: string = '';
   openModal(description: string) {
    console.log('Opening modal with:', description); // Add this
    this.modalDescription = description;
    const modalElement = document.getElementById('productModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}
