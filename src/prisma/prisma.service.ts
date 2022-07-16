import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'mongodb+srv://cj:qazwsxedc@cluster0.rtzli.mongodb.net/BOOKMARK-API?authSource=admin&replicaSet=atlas-4b57x7-shard-0&w=majority',
        },
      },
    });
  }
}
