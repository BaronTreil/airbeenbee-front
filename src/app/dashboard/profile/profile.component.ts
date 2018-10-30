import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { auth } from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  editProfileForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.initEditProfileForm();
  }

  initEditProfileForm() {
    this.editProfileForm = this.formBuilder.group({
      password: [
        "",
        [Validators.required, Validators.pattern(/[0-9a-zA-Z]{2,}/)]
      ],
      passwordCheck: [
        ""
      ]
    }, {
        validator: this.matchPasswords
      }
    );
  }

  onSubmitEditProfile(){
    console.log("submitting ...");
  }

  checkOnChange() {
    console.log("alerte coucou");
    const pVal = this.editProfileForm.value['password'];
    const pcVal = this.editProfileForm.value['passwordCheck'];

    (pVal == pcVal) ? "" : this.editProfileForm

  }
  get f() {
    
    return this.editProfileForm.controls;
  }


  matchPasswords(group: FormGroup) {
    let pass = group.controls.password.value;
    let confirmPass = group.controls.passwordCheck.value;

    let resp = (pass === confirmPass ? null : { notSame: true });
    console.log("testing match passwords : " + JSON.stringify(resp));
    return resp;
  }

}
