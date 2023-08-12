import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateHello, Hello } from 'shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Hello {
    return this.appService.getHello();
  }

  @Post()
  createHello(@Body() body: CreateHello) {
    return body.first_names;
  }
}