import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { BarInterceptor } from './bar.interceptor';
import { FooInterceptor } from './foo.interceptor';

@UseInterceptors(BarInterceptor, FooInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('string')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('number')
  getNumber(): number {
    return Math.random() * 1000;
  }

  @Get('object')
  getObject(): Record<string, any> {
    return { hello: 'world' };
  }
}
