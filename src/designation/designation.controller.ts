import {
  Controller,
  Body,
  HttpException,
  Post,
  Get,
  Delete,
  Patch,
  Param,
} from '@nestjs/common';
import { DesignationService } from './designation.service';

@Controller('designation')
export class DesignationController {
  constructor(private readonly designationService: DesignationService) {}

  @Post()
  async createDesignation(@Body() body: any) {
    try {
      return await this.designationService.create(body);
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  @Get()
  async getDesignations() {
    try {
      return await this.designationService.all();
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  @Post('/remove')
  async deleteDesignation(@Body() body: any) {
    try {
      return await this.designationService.deleteDesignation(body.designation);
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  @Patch(':designation')
  async updateDesignation(
    @Body() body: any,
    @Param() params: { designation: string },
  ) {
    try {
      return await this.designationService.update(params.designation, body);
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }
}
