import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Models/User.Model';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private _LoginService: LoginService,  private snackBar: MatSnackBar,private router:Router) {}

    Studentform = new FormGroup({
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
      ]),
    });


    onSubmit() {
      console.log(this.Studentform);
        console.log(this.Studentform.value);
        this._LoginService.validateUser(this.Studentform.value).subscribe({
          next: (response) => {
            console.log('User logged in successfully:', response);
            // console.log('User logged in successfully:', response.token);
            // this.snackBar.open('Message archived');
            this.snackBar.open('Login Successful', 'Close', {
             duration: 3000
            });
             this.snackBar.open(`Welcome Back ${response.user.firstName}`, 'Close', {
             duration: 3000
            });
            // alert("Login Successful");
            this._LoginService.saveToken(response.token);
            this._LoginService.saveUser(response.user);
                this.router.navigate(['/Products']);
          },
          error: (error) => {
            console.error('Error logging in user:', error);
          }
        });
      this.Studentform.reset();
    
    }

    
  }


