import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = request.clone({
      headers: new HttpHeaders({
        "X-RapidAPI-Key": "2434b58409msh0181e45f4ad1cc8p15b8e1jsn0344a3020698",
        "X-RapidAPI-Host": "movies-app1.p.rapidapi.com"
      })
    });
    return next.handle(apiReq);
  }
}
