import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './Home/Home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent ,
        pathMatch: 'full',
        canActivate: []
      }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes, {useHash: true}),
    ],
    exports: [
      RouterModule,
    ]
  })
  export class AppRoutingModule {
  }

export const appRoutingProviders: any[] = [
    // AuthenticatedUserGuard
  ];

export const appRoutes: any = RouterModule.forRoot(routes, {useHash: true});
