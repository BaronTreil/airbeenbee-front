import { UserService } from "./services/user.service";
import { AuthService } from "./services/auth.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationComponent } from "./auth/authentication/authentication.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: "", component: AuthenticationComponent },
  { path: "dashboard", canActivate: [AuthGuardService], component: DashboardComponent},
  { path: '**', redirectTo: 'AuthenticationComponent' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    AuthenticationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    NgbModule.forRoot()
  ],
  providers: [AuthGuardService, AuthService, UserService],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
