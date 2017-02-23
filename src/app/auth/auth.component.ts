//import '../../../public/css/style.css';
import '../../../public/css/form-elements.css';
import {
    Component, OnInit, HostBinding, trigger, state, style, transition, animate, keyframes,
} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/map';
import { AuthGuard } from '../../services/auth.service';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
    animations: [
        trigger('routeAnimation', [
            state('*', style({opacity: 1, transform: 'translateX(0)'})),
            transition('void => *', [
                animate('0.3s 0.3s', keyframes([
                    style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
                    style({opacity: 1, transform: 'translateX(25px)', offset: 0.3}),
                    style({opacity: 1, transform: 'translateX(0)', offset: 1.0})
                ]))
            ]),
            transition('* => void', [
                animate('0.3s', keyframes([
                    style({opacity: 1, transform: 'translateX(0)', offset: 0}),
                    style({opacity: 1, transform: 'translateX(-25px)', offset: 0.3}),
                    style({opacity: 0, transform: 'translateX(100%)', offset: 1})
                ]))
            ])
        ])
    ]
})
export class AuthComponent {

    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }


    @HostBinding('style.position') get position() {
        return 'absolute';
    }

    @HostBinding('style.width') get width() {
        return '100%';
    }

/*  @LocalStorage('errMsg')
    public error:any;*/

    constructor(private _authService:AuthGuard) {
    }

    login(source:string):void {
        //this._authService.login(source);
    }

    emptyMessages():void{  //delete error messages
        //this._storage.store('errMsg', '');
    }

}
