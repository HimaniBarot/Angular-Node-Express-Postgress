import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public username: string | null = "";

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
    this.username = this._authService.getUserName();
    console.log(this.username);
  }

  public onLogout() {
    this._authService.clearLocalStorage();
    this._router.navigateByUrl("/");
  }

}
