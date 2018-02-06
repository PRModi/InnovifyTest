import { AuthGuard } from './../shared/services/authguard';
import { Routes, CanActivate } from "@angular/router";
import { NgModule } from "@angular/core";

import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from "./home/home.component";
import { SignupComponent } from "./signup/signup.component";
import { RouterModule } from "@angular/router";

export const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
