import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from "@angular/common";

import { AuthComponent } from './auth.component';
import {SignupComponent} from "./signup/signup.component";

import { AuthRouterProvider } from './auth.routes';


@NgModule({
  declarations: [
    AuthComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AuthRouterProvider
  ],
  providers: [],
  bootstrap: [AuthComponent],
  exports:[AuthComponent]
})
export class AuthModule { }

/*import {NgModule} from "@angular/core";

import {AuthRouterProvider} from "./auth.routes";
import {AuthComponent} from "./auth.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    imports: [
        CommonModule,
        AuthRouterProvider,
        ReactiveFormsModule
    ],
    declarations: [
        AuthComponent
    ],
    providers: [
        AuthService
    ],
    exports: [AuthComponent]
})

export class AuthModule {}*/
