import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';

@Injectable()
export class AppInterceptorInterceptor implements HttpInterceptor {

  constructor() {}
  handleError(error:HttpErrorResponse){
    console.log(error);
    return throwError(error);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request);
    return next.handle(request)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }
}
