import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from './core/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';


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
import { ItrFormComponent } from './Financial Services/ITR/itr-form/itr-form.component';
import { ItrUserDashboardComponent } from './Financial Services/ITR/itr-user-dashboard/itr-user-dashboard.component';
import { AuthGuard } from './_guards/auth.guard';
import { AuthService } from './_services/ITR/auth.service';

export function tokenGetter() {
   return localStorage.getItem('token');
}
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
      ItrRegisterComponent,
      ItrFormComponent,
      ItrUserDashboardComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(appRouts),
      BrowserAnimationsModule,
      CustomMaterialModule,
      HttpClientModule,
      JwtModule.forRoot({
         config: {
           tokenGetter: tokenGetter,
           whitelistedDomains: ['localhost:5000'],
           blacklistedRoutes: ['localhost:3001/auth/']
         }
       })
   ],
   providers: [
      AuthService,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
