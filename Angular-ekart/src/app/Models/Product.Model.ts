export interface Product {
  productId: number;
  categoryId: number;
  title: string;
    description: string;
    price: string;
    offer: string;
    category: string;
    imageName?: string;

}
export interface Cart {
  categoryId: number;
  category: string;    
}

export interface CartItem {
    UserId:number,
    ProductId:number,
    Quantity:number
}

export interface CartItems {
  cartItemId: number;
  cartId: number;
  productId: number;
  quantity: number;
  product: Product;
  cart?: any;
  
}

export interface CartResponse {
  cartId: number;
  userId: number;
    ordered: boolean;
    orderedOn: string;
    orders?: any;
}