import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
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
    console.log(token);
    
    if (token) {
      this.isAuthenticated = true;
    }
    else {
      this.isAuthenticated = false;
    }

    // this.isAuthenticated = this._authService.getIsAuth();
    // this.authListenerSubs = this._authService.getAuthStatusListener()
    // .subscribe((res) => {
    //   console.log(res);
      
    //   this.isAuthenticated = res;
    // });

    // this._authService.isUserAuthenticated().subscribe((res) => {
    //   console.log(res);
    //   if(token){
    //     this.isAuthenticated = res;
    //   }
    // });
  }

}
