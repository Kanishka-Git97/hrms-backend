import { Module } from '@nestjs/common';
import { EmployeController } from './employe.controller';
import { EmployeService } from './employe.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Employe, EmployeSchema } from './employe.schema';
import {
  Designation,
  DesignationSchema,
} from 'src/designation/designation.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employe.name, schema: EmployeSchema },
      { name: Designation.name, schema: DesignationSchema },
    ]),
  ],
  controllers: [EmployeController],
  providers: [EmployeService],
})
export class EmployeModule {}
