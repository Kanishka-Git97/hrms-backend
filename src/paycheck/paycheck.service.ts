import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Paycheck } from './paycheck.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class PaycheckService {
  constructor(
    @InjectModel(Paycheck.name) private paycheckModel: Model<Paycheck>,
  ) {}

  async create(body) {
    const paycheck = new this.paycheckModel();
    paycheck.workingHours = body.workingHours;
    paycheck.year = body.year;
    paycheck.month = body.month;
    paycheck.rate = body.rate;
    paycheck.amount = body.amount;
    paycheck.deduction = body.deduction;
    paycheck.employee = body.employee;

    return await paycheck.save();
  }

  async getPaychecks(body) {
    const paychecks = await this.paycheckModel
      .find({
        year: body.year,
        month: body.month,
      })
      .populate('employee')
      .exec();

    const filteredPaychecks = paychecks.filter(
      (paycheck) => paycheck.employee !== null,
    );

    return filteredPaychecks;
  }

  async deletePaycheck(paycheck: string) {
    const result = await this.paycheckModel
      .findByIdAndDelete(new Types.ObjectId(paycheck))
      .exec();
    if (!result) {
      // Handle the case where the document was not found
      console.log(`Document with ID ${paycheck} not found.`);
    }
    return result;
  }
}
