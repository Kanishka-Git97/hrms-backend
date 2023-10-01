import { Module } from '@nestjs/common';
import { PaycheckController } from './paycheck.controller';
import { PaycheckService } from './paycheck.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Paycheck, PaycheckSchema } from './paycheck.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Paycheck.name, schema: PaycheckSchema },
    ]),
  ],
  controllers: [PaycheckController],
  providers: [PaycheckService],
})
export class PaycheckModule {}
