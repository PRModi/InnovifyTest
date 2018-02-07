import { FooterComponent } from './../shared/component/footer/footer.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthService } from '../shared/services/auth.service';
import { HttpModule } from '@angular/http';
import { AuthGuard } from '../shared/services/authguard';
import { fakeBackendProvider } from '../shared/fake/fake-backend';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../shared/fake/jwt-interceptor';
import { ImageCropperComponent } from 'ng2-img-cropper';
import { HeaderComponent } from '../shared/component/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    ImageCropperComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [FormBuilder, AuthService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }, fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
