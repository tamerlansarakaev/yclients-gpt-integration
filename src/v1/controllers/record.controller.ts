import { Controller, Get, Query, Res } from '@nestjs/common';
import { RecordService } from '../services/record.service';
import { Response } from 'express';

@Controller('api/v1/records')
export class RecordController {
  constructor(private recordService: RecordService) {}

  @Get('get_services')
  async getService(@Query('query') query: string = '', @Res() res: Response) {
    try {
      const services = await this.recordService.getServices(query);
      return res.status(200).json(services);
    } catch (error) {
      return res.status(error.status || 500).json(error);
    }
  }
}
