import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  public username: string | null = "";
  public isAuthenticated: boolean = false;
  private authListenerSubs!: Subscription;

  constructor(
    private _authService: AuthService,
    private _router: Router,
  ) { }

  ngOnInit(): void {
    this.props();
  }

  public onLogout() {
    this._authService.clearLocalStorage();
    this._router.navigateByUrl("/");
  }

  public props() {
    this.username = this._authService.getUserName();
    const token = this._authService.getToken();

    if (token) {
      this.isAuthenticated = true;
    }
    else {
      this.isAuthenticated = false;
    }
  }

}
