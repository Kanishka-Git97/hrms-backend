import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { PaycheckService } from './paycheck.service';

@Controller('paycheck')
export class PaycheckController {
  constructor(private readonly paycheckService: PaycheckService) {}

  @Post()
  async createPaycheck(@Body() body) {
    try {
      return await this.paycheckService.create(body);
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  @Post('/checks')
  async getPaychecks(@Body() body) {
    try {
      return await this.paycheckService.getPaychecks(body);
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  @Post('/remove')
  async deletePaychecks(@Body() body) {
    try {
      return await this.paycheckService.deletePaycheck(body.paycheck);
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }
}
