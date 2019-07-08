import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-itr-login',
  templateUrl: './itr-login.component.html',
  styleUrls: ['./itr-login.component.css']
})
export class ItrLoginComponent implements OnInit {
  username: string;
  password: string;
  showSpinner: boolean;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}')
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
    //  this.router.navigate(['user']);
    } else {
      alert('Invalid credentials');
    }
  }

  back() {
    this.router.navigate(['/financialServices/ITR']);
  }
}
