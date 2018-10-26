import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  isAuth: boolean;
  authSubject = new Subject<boolean>();

  constructor() {}

  emitAuthStatus() {
    this.authSubject.next(this.isAuth);
  }

  createNewUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          () => {
            this.isAuth = true;
            resolve();
            this.emitAuthStatus();
          },
          error => {
            this.isAuth = false;
            reject(error);
            this.emitAuthStatus();
          }
        );
    });
  }

  signInUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          () => {
            this.isAuth = true;
            resolve();
            this.emitAuthStatus();
          },
          error => {
            this.isAuth = false;
            reject(error);
            this.emitAuthStatus();
          }
        );
    });
  }

  signOutUser() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.isAuth = false;
        this.emitAuthStatus();
      });
  }

  editUser(){
    //TODO edit password
  }
}
