import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { TopHeaderComponent } from './Components/top-header/top-header.component';
import { TopMenuComponent } from './Components/header/top-menu/top-menu.component';
import { MainMenuComponent } from './Components/header/main-menu/main-menu.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { FilterComponent } from './Components/product-list/filter/filter.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { ProductComponent } from './Components/product-list/product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './Components/registration/registration.component';
import { HomeComponent } from './Components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { CategoryComponent } from './Components/category/category.component';
import { CartComponent } from './Components/product-list/cart/cart.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopHeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    ProductListComponent,
    FilterComponent,
    ProductComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    CategoryComponent,
    CartComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    CommonModule,
      MatSnackBarModule
    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
