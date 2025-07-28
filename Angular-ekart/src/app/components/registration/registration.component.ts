import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
// export class RegistrationComponent implements OnInit {
export class RegistrationComponent {
  
  constructor(private UserService: UserService) {}
  Studentform = new FormGroup({
    FirstName: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Za-z]{3,12}$/),
    ]),
    MiddleName: new FormControl(null),
    LastName: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[A-Za-z]{3,12}$/),
    ]),
    Email: new FormControl(null, [Validators.required, Validators.email]),
    Mobile: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\d+$/),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    Address: new FormControl(null, [Validators.required]),
    Password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    ]),
  });
  onSubmit() {
    console.log(this.Studentform);
      console.log(this.Studentform.value);
    this.UserService.registerUser(this.Studentform.value).subscribe({
      next: (response) => {
        console.log('User registered successfully:', response);
      },
      error: (error) => {
        console.error('Error registering user:', error);
      }
    });
    // this.Studentform.reset();
  //   alert('First Name is' + this.Studentform.value.FirstName);
  //   alert('Last Name is' + this.Studentform.value.LastName);
  //   this.Studentform.reset();
  // }
  // ngOnInit() {
  //   console.log(this.Studentform.get('PhoneNumber')?.errors);
  //   this.Studentform.get('PhoneNumber')?.valueChanges.subscribe(() => {
  //     console.log('Phone errors:', this.Studentform.get('PhoneNumber')?.errors);
  //   });
  }
  // onFormSubmit(){
  //   console.log(this.Studentform);
  // }
}
