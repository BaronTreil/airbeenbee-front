import { AuthService } from "./../../services/auth.service";
import { UserService } from "./../../services/user.service";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-authentication",
  templateUrl: "./authentication.component.html",
  styleUrls: ["./authentication.component.css"]
})
export class AuthenticationComponent implements OnInit {
  registerForm: FormGroup;
  loginForm: FormGroup;
  registerErrorMsg: string;
  loginErrorMsg: string;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.initRegisterForm();
    this.initLoginForm();
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [Validators.required, , Validators.pattern(/[0-9a-zA-Z]{2,}/)]
      ]
    });
  }
  initRegisterForm() {
    this.registerForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [Validators.required, , Validators.pattern(/[0-9a-zA-Z]{2,}/)]
      ],
      userType: new FormControl("1")
    });
  }

  onSubmitRegister() {
    if (this.registerForm.valid) {
      const email = this.registerForm.value["email"];
      const password = this.registerForm.value["password"];

      this.authService.createNewUser(email, password).then(
        () => {
          this.router.navigate(["dashboard"]);
        },
        error => {
          this.registerErrorMsg = error;
        }
      );
    }
  }

  onSubmitLogin() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value["email"];
      const password = this.loginForm.value["password"];

      this.authService.signInUser(email, password).then(
        () => {
          this.router.navigate(['dashboard']);
        },
        (error) => {
          this.loginErrorMsg = error;
        }

      );
    }
  }
}
