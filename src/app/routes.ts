import { Routes } from '@angular/router';
import { IncomeTaxComponent } from './Financial Services/ITR/income-tax/income-tax.component';
import { GstComponent } from './Financial Services/gst/gst.component';
import { InsuranceComponent } from './Financial Services/insurance/insurance.component';
import { MutualFundComponent } from './Financial Services/mutual-fund/mutual-fund.component';
import { DivyankaFabricsComponent } from './Divyanka Fabrics/divyanka-fabrics/divyanka-fabrics.component';
import { HomeComponent } from './Home/Home.component';
import { ItrLoginComponent } from './Financial Services/ITR/itr-login/itr-login.component';
import { ItrRegisterComponent } from './Financial Services/ITR/itr-register/itr-register.component';
import { ItrFormComponent } from './Financial Services/ITR/itr-form/itr-form.component';
import { ItrUserDashboardComponent } from './Financial Services/ITR/itr-user-dashboard/itr-user-dashboard.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRouts: Routes = [
    { path: '', component: HomeComponent},
            { path: 'ITR', component: IncomeTaxComponent},
            // { path: 'ITR/login', component: ItrLoginComponent},
            // { path: 'ITR/register', component: ItrRegisterComponent},
            // { path: 'ITR/ITR-Form', component: ItrFormComponent},
            // { path: 'ITR/User-Dashboard', component: ItrUserDashboardComponent, canActivate: [AuthGuard]},

            { path: 'GST', component: GstComponent},

            { path: 'insurance', component: InsuranceComponent},

            { path: 'mutualFund', component: MutualFundComponent},

    { path: 'divyankaFabrics', component: DivyankaFabricsComponent},

    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
