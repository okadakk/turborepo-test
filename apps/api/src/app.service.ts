import { Injectable } from '@nestjs/common';
import { Hello } from 'shared';

@Injectable()
export class AppService {
  getHello(): Hello {
    return {
      message: 'konnnitiwa',
    };
  }
}
