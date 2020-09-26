import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FooInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => {
        if (typeof data === 'string') {
          return data.toUpperCase();
        } else if (typeof data === 'number') {
          return Math.floor(data);
        } else {
          return data;
        }
      }),
    );
  }
}
