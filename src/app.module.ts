import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { DesignationModule } from './designation/designation.module';
import { EmployeModule } from './employe/employe.module';
import { PaycheckModule } from './paycheck/paycheck.module';


@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://rashmiproductionhr:adqFUNlrLM9RMH03@psengineering.inbzwh5.mongodb.net/',
    ),
    AdminModule,
    DesignationModule,
    EmployeModule,
    PaycheckModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
