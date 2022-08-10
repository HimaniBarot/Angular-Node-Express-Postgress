import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ResponseHandlingInterceptor implements HttpInterceptor {

  private _title: string = "";
  private _message: string = "";

  constructor(private _toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((errorResponse: HttpErrorResponse) => {
        return of()
      })
    );
  }
}
