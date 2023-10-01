import { Body, Controller, HttpException, Post, Get } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  async addAdmin(@Body() body: any) {
    try {
      const { user } = await this.adminService.create(body);
      return user;
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  @Post('/login')
  async login(@Body() body: any) {
    try {
      const { user } = await this.adminService.login(body);
      return user;
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }

  @Get()
  async getUsers() {
    try {
      return await this.adminService.all();
    } catch (err) {
      throw new HttpException(err.message, err.status);
    }
  }
}
