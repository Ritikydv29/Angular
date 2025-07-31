import { createInput } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {
modalDescription: string = '';
  @Input()
  product:{
      id: number;
      name: string;

      description?: string;
      imageUrl?: string;
      category?: string;
      stock?: number;
      rating?: number;
      isAvailable?: boolean;
      gender: string,
      size: number[],
      color: string[],
      price: number,
      discountPrice?: number,
      is_in_inventory: boolean,
      items_left: number,
      imageURL: string,
      slug: string
      
  };
  //  openModal(description: string) {
  //   console.log('Opening modal with:', description); // Add this
  //   this.modalDescription = description;
  //   const modalElement = document.getElementById('productModal');
  //   const modal = new bootstrap.Modal(modalElement);
  //   modal.show();
  // }
   

}
