import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  public message: string = "";
  public username: string = "";
  private _token: string | null = "";
  hide = true;

  constructor(private _fb: FormBuilder, private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.buildTodoForm();
    if (this._token == null) {
      this._token = this._authService.getToken();
    }
  }

  public buildTodoForm() {
    this.loginForm = this._fb.group({
      username: [''],
      password: [''],
    });
  }

  public onLogin() {
    let formValue = this.loginForm.value;
    this._authService.userLogin(formValue).subscribe((res) => {
      this._token = res.token;
      if (this._token) {
        this._authService.setUserName(res.username);
        this._authService.setToken(res.token);
        this._router.navigateByUrl("/master");
      }
      // return this.message = res.message;
    })
  }

}
