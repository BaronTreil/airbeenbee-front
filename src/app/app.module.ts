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

const appRoutes: Routes = [
  { path: "auth/signup", component: SignupComponent },
  { path: "", component: AuthenticationComponent },
  { path: "auth/signin", component: SigninComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    NgbModule.forRoot()
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
