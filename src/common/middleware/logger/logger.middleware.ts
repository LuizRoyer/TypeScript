import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(
      'Log ...',
      new Date().toDateString(),
      JSON.stringify(req.body),
      req.method,
    );
    next();
  }
}
