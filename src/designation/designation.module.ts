import { Module } from '@nestjs/common';
import { DesignationController } from './designation.controller';
import { DesignationService } from './designation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Designation, DesignationSchema } from './designation.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name: Designation.name, schema: DesignationSchema}
  ])],
  controllers: [DesignationController],
  providers: [DesignationService]
})
export class DesignationModule {}
