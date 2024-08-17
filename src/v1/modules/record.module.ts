import { Module } from '@nestjs/common';
import { RecordController } from '../controllers/record.controller';
import { RecordService } from '../services/record.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule.register({
      baseURL: 'https://api.yclients.com/api/v1',
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
        Accept: `application/vnd.yclients.v2+json`,
        Authorization: `Bearer ${process.env.YCLIENTS_PARTNER_TOKEN}, User ${process.env.YCLIENTS_TOKEN}`,
      },
    }),
  ],
  controllers: [RecordController],
  providers: [RecordService],
})
export class RecordModule {}
