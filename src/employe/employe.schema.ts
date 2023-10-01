import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongooseSchema } from 'mongoose';

export type EmployeDocument = HydratedDocument<Employe>;

@Schema()
export class Employe {
  @Prop({ required: true, trim: true })
  fullName: string;

  @Prop({ required: true, trim: true, unique: true })
  employeeID: string;

  @Prop({ required: true, trim: true, unique: true })
  fingerPrint: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Designation' })
  designation: string;
}

export const EmployeSchema = SchemaFactory.createForClass(Employe);
