import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {

  public signupForm!: FormGroup;
  hide = true;

  constructor(private _fb: FormBuilder, private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.buildTodoForm();
  }

  public buildTodoForm() {
    this.signupForm = this._fb.group({
      user_id: [],
      username: [''],
      password: [''],
    });
  }

  public onSignup() {
    this._authService.addUser(this.signupForm.value).subscribe((res) => {
      console.log(res);
      this._router.navigateByUrl("/login");
    })
  }

}
