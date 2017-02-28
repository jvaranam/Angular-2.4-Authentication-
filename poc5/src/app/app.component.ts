//import '../../public/css/styles.css';
//import '../../public/css/style.css';
import '../../public/css/font-awesome.min.css';
import { Component, OnInit} from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Params } from "@angular/router";
import { AuthGuard } from './../services/auth.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {    

	constructor(private _authService: AuthGuard, private _title: Title, private router: Router) {

    }    

    ngOnInit():void {
      /*JVI Authentication code need to be updated here */
              //this._storage.store('isLoggedIn', false);
      this._title.setTitle('authentication');
		//this.router.navigate(['/auth']);
    }
}
