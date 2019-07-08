import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from './core/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { DivyankaFabricsComponent } from './Divyanka Fabrics/divyanka-fabrics/divyanka-fabrics.component';
import { GstComponent } from './Financial Services/gst/gst.component';
import { IncomeTaxComponent } from './Financial Services/ITR/income-tax/income-tax.component';
import { InsuranceComponent } from './Financial Services/insurance/insurance.component';
import { MutualFundComponent } from './Financial Services/mutual-fund/mutual-fund.component';

import { appRouts } from './routes';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ItrLoginComponent } from './Financial Services/ITR/itr-login/itr-login.component';
import { ItrRegisterComponent } from './Financial Services/ITR/itr-register/itr-register.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      DivyankaFabricsComponent,
      IncomeTaxComponent,
      GstComponent,
      InsuranceComponent,
      MutualFundComponent,
      NavbarComponent,
      FooterComponent,
      ItrLoginComponent,
      ItrRegisterComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRouts),
      BrowserAnimationsModule,
      CustomMaterialModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
