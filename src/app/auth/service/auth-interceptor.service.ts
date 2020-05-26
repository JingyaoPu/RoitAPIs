import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpSentEvent, HttpResponse, HttpHeaders } from '@angular/common/http';
import { HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler){
    const nextReq = req.clone({
      headers: req.headers.set('X-Riot-Token', 'RGAPI-9627f0d7-2cc4-4e69-b218-905d80cad4e8')
    });
    console.log('header reset with token');
    return next.handle(nextReq);
  }

  constructor() { }
}
