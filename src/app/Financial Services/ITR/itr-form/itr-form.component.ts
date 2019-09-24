import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, FormGroup, NgForm, Validators, FormBuilder} from '@angular/forms';
import { AuthService } from 'src/app/_services/ITR/auth.service';
import { User } from 'src/app/_models/User';
import { AlertifyService } from 'src/app/_services/shared/alertify.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-itr-form',
  templateUrl: './itr-form.component.html',
  styleUrls: ['./itr-form.component.css']
})
export class ItrFormComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  userDetailsForm: FormGroup;
  isAadhar = true;
  user: User;
  constructor(private router: Router, private fb: FormBuilder, private authservice: AuthService,
              private alertify: AlertifyService) { }

  ngOnInit() {
    this.createUserDetailsForm();
  }

  createUserDetailsForm() {
    this.userDetailsForm = this.fb.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      fatherName: ['', Validators.required],
      dateOfBirth: [Date, Validators.required],
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
      aadharNo: ['',
        [
          Validators.pattern('[0-9]{12}'),
        ]],
      isAadhar: [''],
      aadharEnrolID: ['',
      [
        Validators.pattern('[0-9]{28}'),
      ]],
      panNo: ['',
        [
          Validators.required,
          Validators.pattern('[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}')
        ]],

        area: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        zip: ['',
        [
          Validators.required,
          Validators.pattern('[0-9]{6}'),
        ]],
        landmark: ['']
      // bankInfo: this.fb.group({
      //   name: ['', Validators.required],
      //   ifsc: ['', Validators.required],
      //   accNo: ['', Validators.required]
      // }),

      // incomeInfo: this.fb.group({
      //   salary: ['', Validators.required],
      //   houseProperty: ['', Validators.required],
      //   capitalGain: ['', Validators.required],
      //   businessIncome: ['', Validators.required],
      //   otherIncome: ['']
      // })
    });
  }

  saveUserDetails() {
    if (this.userDetailsForm.valid) {
      if (this.isAadhar) {
        if (this.userDetailsForm.controls['aadharNo'].value === '') {
          alert('Please enter Aadhar Number');
        } else {
          this.user = Object.assign({}, this.userDetailsForm.value);
        }
      } else {
        if (this.userDetailsForm.controls['aadharEnrolID'].value === '') {
          alert('Please enter Aadhar Enrollment ID');
        } else {
          this.user = Object.assign({}, this.userDetailsForm.value);
        }
      }

      console.log('user-Details: ', this.user);

    } else  {
      console.log('user form invalid');
    }
  }

  isAadharChanged() {
    this.isAadhar = !this.isAadhar;
    if (this.isAadhar) {
      this.userDetailsForm.controls['aadharEnrolID'].setValue('');
    } else {
      this.userDetailsForm.controls['aadharNo'].setValue('');
    }
    console.log('this.isAadhar', this.isAadhar);
  }
}
