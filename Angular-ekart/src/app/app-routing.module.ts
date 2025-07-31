import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './Components/registration/registration.component';  
import { ProductListComponent } from './Components/product-list/product-list.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { CategoryComponent } from './Components/category/category.component';
import { CartComponent } from './Components/product-list/cart/cart.component';
import { LogoutComponent } from './Components/logout/logout.component';
const routes: Routes = [
  { path: 'Register', component: RegistrationComponent},
    {path: 'Products', component: ProductListComponent},
       {path: 'Home', component: HomeComponent},
          {path: '', component: HomeComponent},
          {path: 'Login', component: LoginComponent},
          {path:'Category', component: CategoryComponent},
           {path:'Cart', component: CartComponent},
           {path:'Logout',component:LogoutComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

  
})
export class AppRoutingModule { }
