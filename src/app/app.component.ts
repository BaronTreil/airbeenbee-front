import { AuthService } from "./services/auth.service";
import { Component } from "@angular/core";
import * as firebase from "firebase";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "airbeenbee-front";
  auth = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService) {
    const config = {
      apiKey: "AIzaSyDVyKUx20_00JH0ulIk0Ip9GGYMv087D4s",
      authDomain: "airbeenbee-8ef15.firebaseapp.com",
      databaseURL: "https://airbeenbee-8ef15.firebaseio.com",
      projectId: "airbeenbee-8ef15",
      storageBucket: "airbeenbee-8ef15.appspot.com",
      messagingSenderId: "679914697133"
    };
    firebase.initializeApp(config);

    this.authSubscription = this.authService.authSubject.subscribe(
      (isAuth: boolean) => {
        this.auth = isAuth;
      }
    );
  }
}
