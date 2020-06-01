import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpSentEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import { HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler){
    const nextReq = req.clone({
      headers: req.headers.set('X-Riot-Token', 'RGAPI-0d48e721-f140-448c-b173-f666c0cdc048')
    });
    console.log('header reset with token');
    return next.handle(nextReq);
  }

  constructor() { }
}
