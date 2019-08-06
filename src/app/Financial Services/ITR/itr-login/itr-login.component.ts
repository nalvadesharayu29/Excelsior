import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { AuthService } from 'src/app/_services/ITR/auth.service';
import { AlertifyService } from 'src/app/_services/shared/alertify.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: "app-itr-login",
  templateUrl: "./itr-login.component.html",
  styleUrls: ["./itr-login.component.css"]
})
export class ItrLoginComponent implements OnInit {
  model: any = {};
  showSpinner: boolean;
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.pattern("[A-Za-z]{5}[0-9]{4}[A-Za-z]{1}")
  ]);
  passwordFormControl = new FormControl("", [
    Validators.required,
    Validators.minLength(8)
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private authService: AuthService,
              private alertifyService: AlertifyService) {}

  ngOnInit() {}

  login(): void {
    this.authService.login(this.model).subscribe(
      data => {
        this.alertifyService.success("Logged in successfully");
      },
      error => {
        this.alertifyService.error("Failed to login");
      },
      () => {
        this.router.navigate(['/ITR/User-Dashboard']);
      }
    );
  }

  back() {
    this.router.navigate(["/ITR"]);
  }
}
