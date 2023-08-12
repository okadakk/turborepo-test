import { Injectable } from '@nestjs/common';
import { Hello } from 'shared';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getHello(): Promise<Hello> {
    const a = await this.prisma.user.create({
      data: {
        name: 'a',
        email: 'basdf',
        createdAt: new Date(),
      },
    });
    console.log(a);
    return {
      message: 'konnnitiwa',
    };
  }
}
