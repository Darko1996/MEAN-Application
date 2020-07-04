import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  forbiddenUsername = 'blabla';
  forbiddenPassword = 'blabla';

  constructor(public authService: AuthService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, { validators: [Validators.required, this.forbiddenName.bind(this)] }),
      password: new FormControl(null, { validators: [Validators.required, this.forbiddenPass.bind(this)] }),
    });
  }

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
    this.dialog.closeAll();
  }

  loginCLose() {
    this.dialog.closeAll();
  }

  /* ----- custom validators ----- */

  forbiddenName(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsername.indexOf(control.value)) {
      return { 'nameIsForbidden': true }; // error name
    }
    return null;
  }

  forbiddenPass(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenPassword.indexOf(control.value)) {
      return { 'passwordIsForbidden': true }; // error name
    }
    return null;
  }

}
