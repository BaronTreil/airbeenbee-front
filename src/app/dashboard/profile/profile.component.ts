import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

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
        "",
        [Validators.required, Validators.pattern(/[0-9a-zA-Z]{2,}/)]
      ]
    }, {
        validator: this.matchPasswords
      }
    );
  }

  checkOnChange() {
    console.log("alerte coucou");
    const pVal = this.editProfileForm.value['password'];
    const pcVal = this.editProfileForm.value['passwordCheck'];

    (pVal == pcVal) ? "" : this.editProfileForm

  }

  matchPasswords(ac: AbstractControl) {
    let password = ac.value(['password']);
    let confirmPassword = ac.value(['passwordCheck']);
    if (password != confirmPassword) {
      console.log('false');
      ac.get('confirmPassword').setErrors({ MatchPassword: true })
    } else {
      console.log('true');
      return null
    }
  }

}
