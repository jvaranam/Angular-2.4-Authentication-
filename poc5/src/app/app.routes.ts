/*import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './../services/auth.service';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
*/
 /*export const router: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-email', component: EmailComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuard] }

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);*/


import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import { AuthComponent } from "./auth/auth.component";
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    }/*,
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: 'profile',
        loadChildren: 'app/profile/profile.module#ProfileModule'
    },
    {
        path: 'signin',
        loadChildren: 'app/signin/signin.module#SignInModule'
    }*/
];

export const AppRouterProvider: ModuleWithProviders = RouterModule.forRoot(appRoutes);