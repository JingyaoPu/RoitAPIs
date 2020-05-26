import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap, startWith } from 'rxjs/operators'
import { RequestCache, RequestCacheWithMap } from './request-cache.service';
import { Injectable } from '@angular/core';
@Injectable()
export class requestCacheInterceptorService implements HttpInterceptor {
    intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        //return next.handle(req);
        if (!isCachable(req)) {
            return next.handle(req);
        }else{
            const cachedRes = this.requestCacheWithMap.get(req);
            const res$ = forwardRequest(req,next,this.requestCacheWithMap);
            if(cachedRes) console.log("getResFromCache: "+JSON.stringify(cachedRes))
            return cachedRes? res$.pipe(
                startWith(cachedRes)
            )
            :res$;
        }
    }

    constructor(private requestCacheWithMap: RequestCacheWithMap){}

}

function isCachable(req: HttpRequest<any>) {
    if (req.method == 'GET') return true;
    else return false;
}

function forwardRequest(
    req: HttpRequest<any>,
    next: HttpHandler,
    cache: RequestCache): Observable<HttpEvent<any>> {

    // No headers allowed in npm search request
    const noHeaderReq = req.clone({ headers: new HttpHeaders() });

    return next.handle(noHeaderReq).pipe(
        tap(event => {
            // There may be other events besides the response.
            if (event instanceof HttpResponse) {
                cache.put(req, event); // Update the cache.
                console.log("cached request: "+JSON.stringify(req));
            }
        })
    );
}