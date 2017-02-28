import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {AuthComponent} from "./auth.component";
import {SignupComponent} from "./signup/signup.component";

export const authRoutes: Routes = [{
		path: 'auth',
		component: AuthComponent
	},
    {
        path: 'signup',
        component: SignupComponent
    }
];

export const AuthRouterProvider: ModuleWithProviders = RouterModule.forChild(authRoutes);