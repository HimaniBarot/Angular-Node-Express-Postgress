import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  token: string = "secret-key-authentication-for-sdgsdg";
  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = "OS1Ed51sadgfds56g1dsd21g3ds111E1165rs1g3as1d3e3a1";

    const authoRequest = request.clone({
      setHeaders: {
        Authorization: `Token: ${authToken}`
      }
    });

    return next.handle(authoRequest);
  }
}
