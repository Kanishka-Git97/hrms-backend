import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { Admin } from './admin.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin.name) private adminModel: Model<Admin>) {}

  async create(body: any) {
    const password = bcrypt.hashSync(body.password, Number(10));

    let user = new this.adminModel({ fullName: body.name, password: password });
    user = await user.save();

    return { user };
  }

  async login(body: any) {
    const user = await this.adminModel
      .findOne({
        _id: new Types.ObjectId(body.user),
      })
      .exec();

    if (!user) {
      throw new NotFoundException('Incorrect email or password');
    }

    const passCheck = bcrypt.compareSync(body.password, user.password);
    if (!passCheck) {
      throw new UnauthorizedException('Incorrect Password');
    }
    return { user };
  }

  async all(): Promise<Array<any>> {
    return await this.adminModel.find().exec();
  }

  async delete(user: string){
    return await this.adminModel.findByIdAndDelete(user).exec();
  }
}
