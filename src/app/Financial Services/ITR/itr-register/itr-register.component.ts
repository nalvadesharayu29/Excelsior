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
  selector: 'app-itr-register',
  templateUrl: './itr-register.component.html',
  styleUrls: ['./itr-register.component.css']
})
export class ItrRegisterComponent implements OnInit {
  matcher = new MyErrorStateMatcher();

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  emailID = new FormControl('', [Validators.required, Validators.email]);
  panNo = new FormControl('', [Validators.required, Validators.pattern('[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}')]);
  mobNo = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back() {
    this.router.navigate(['/financialServices/ITR/login']);
  }

}
