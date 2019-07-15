import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, FormGroup, NgForm, Validators, FormBuilder} from '@angular/forms';
import { AuthService } from 'src/app/_services/ITR/auth.service';
import { User } from 'src/app/_models/User';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-itr-register',
  templateUrl: './itr-register.component.html',
  styleUrls: ['./itr-register.component.css']
})
export class ItrRegisterComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  registerForm: FormGroup;
  user: User;

  constructor(private router: Router, private fb: FormBuilder, private authservice: AuthService) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  back() {
    this.router.navigate(['/ITR/login']);
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailID: ['',
    [
      Validators.required,
      Validators.email
    ]],
      mobNo: ['',
    [
      Validators.required,
      Validators.pattern('[0-9]{10}')
    ]],
      password: ['',
    [
      Validators.required,
      Validators.minLength(8)
    ]],
      panNo: ['',
      [
        Validators.required,
        Validators.pattern('[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}')
      ]
    ]
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.user = Object.assign({}, this.registerForm.value);
      console.log('register: ', this.user);
      this.authservice.register(this.user)
      .subscribe(() => {
            alert('Registration successfull');
          }, error => {
            alert(error);
          }, () => {
              localStorage.setItem('registeredUser', JSON.stringify(this.user));
              this.router.navigate(['/ITR/ITR-Form']);
          });
    }
  }
}
