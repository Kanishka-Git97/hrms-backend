import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employe } from './employe.schema';
import { Model, Types } from 'mongoose';
import { Designation } from 'src/designation/designation.schema';

@Injectable()
export class EmployeService {
  constructor(
    @InjectModel(Employe.name) private employeeModel: Model<Employe>,
    @InjectModel(Designation.name) private designationModel: Model<Designation>,
  ) {}

  async create(body: any) {
    // Check availabilit of the Designation
    const selectedDesignation = await this.designationModel.findOne({
      _id: body.designation,
    });
    if (!selectedDesignation) {
      throw new BadRequestException('Invalid Designation');
    }
    const employee = new this.employeeModel({
      fullName: body.name,
      employeeID: body.emp_id,
      fingerPrint: body.finger,
      designation: selectedDesignation._id,
    });
    return await employee.save();
  }

  async all() {
    return await this.employeeModel.find().populate('designation').exec();
  }

  async get(id: string) {
    return await this.employeeModel
      .findById(new Types.ObjectId(id))
      .populate('designation')
      .exec();
  }

  async deleteEmployee(employee: string) {
    const result = await this.employeeModel
      .findByIdAndDelete(new Types.ObjectId(employee))
      .exec();
    if (!result) {
      // Handle the case where the document was not found
      console.log(`Document with ID ${employee} not found.`);
    }
    return result;
  }
}
