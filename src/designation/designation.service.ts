import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Designation } from './designation.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class DesignationService {
  constructor(
    @InjectModel(Designation.name) private desingationModel: Model<Designation>,
  ) {}

  async create(body: any): Promise<any> {
    const designation = new this.desingationModel({
      name: body.name,
      rate: body.rate,
    });
    return await designation.save();
  }

  async all() {
    return await this.desingationModel.find().exec();
  }

  async deleteDesignation(designation: string) {
    const result = await this.desingationModel
      .findByIdAndDelete(new Types.ObjectId(designation))
      .exec();
    if (!result) {
      // Handle the case where the document was not found
      console.log(`Document with ID ${designation} not found.`);
    }
    return result;
  }

  async update(designation: string, body) {
    return await this.desingationModel.findByIdAndUpdate(designation, body, {
      new: true,
    });
  }
}
