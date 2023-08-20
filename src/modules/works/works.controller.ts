import { Controller, Get } from '@nestjs/common';

@Controller('works')
export class WorksController {
  constructor() {}

  @Get()
  getWorks(): string {
    return 'Works';
  }
}
