import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        'X-RapidAPI-Key': 'e4f8195d64msh14ebc169d2e68c4p17249fjsn50c206abb70c',
        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
      },
      setParams: {
        key: 'f9a7ec520f094704bfdca46062b5e539'
      }
    })
    return next.handle(request);
  }
}
