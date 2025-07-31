import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>,next:HttpHandler) {
    console.log("auth Interceptor called");
    if( localStorage.getItem('authToken') === null){
      return next.handle(req);}
    const authToken = localStorage.getItem('authToken');
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    });
    // return next.handle(clonedReq);
      return next.handle(req);
  }
  }

