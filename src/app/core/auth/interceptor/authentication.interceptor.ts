import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  public authToken = this._authService.getToken()

  constructor(private _authService: AuthService) {
    console.log(this._authService.getToken());
    
   }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = this._authService.getToken();
    console.log(authToken);
    
    const authoRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    console.log(authoRequest.headers);
    
    return next.handle(authoRequest);
  }
}
