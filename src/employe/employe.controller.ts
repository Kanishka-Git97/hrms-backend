import {
  Controller,
  Param,
  Post,
  Body,
  HttpException,
  Get,
} from '@nestjs/common';
import { EmployeService } from './employe.service';

@Controller('employee')
export class EmployeController {
  constructor(private readonly employeService: EmployeService) {}

  @Post()
  async addEmploye(@Body() body: any) {
    try {
      return await this.employeService.create(body);
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  @Get()
  async getEmployees() {
    try {
      return await this.employeService.all();
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  @Get(':employee')
  async getEmployee(@Param() params: { employee: string }) {
    try {
      return await this.employeService.get(params.employee);
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  @Post('/remove')
  async deleteDesignation(@Body() body: any) {
    try {
      return await this.employeService.deleteEmployee(body.employee);
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }
}
