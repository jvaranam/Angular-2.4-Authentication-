import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2Webstorage} from 'ng2-webstorage';
//import {firebaseConfig} from './../environments/firebase.config';

import { AppComponent } from './app.component';
import { AuthModule } from "./auth/auth.module";
//import { AuthComponent } from "./auth/auth.component";

import { AuthGuard } from './../services/auth.service';
import { AppRouterProvider } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    //AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouterProvider,
    Ng2Webstorage,
    AuthModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }