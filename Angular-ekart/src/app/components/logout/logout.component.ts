import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent  {

  constructor(private loginService:LoginService, private snackBar: MatSnackBar,private router:Router) { }
  LoggingOut() {
    this.loginService.logout();
    this.snackBar.open('Logout Successful', 'Close', {
             duration: 2000
            });
  
    this.router.navigate(['/Login']);
  }

}
