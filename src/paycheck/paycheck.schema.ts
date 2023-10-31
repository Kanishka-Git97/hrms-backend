import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type PaycheckDocument = HydratedDocument<Paycheck>;

@Schema()
export class Paycheck {
  @Prop({ required: true, trim: true })
  workingHours: number;

  @Prop({ required: true, trim: true })
  year: string;

  @Prop({ required: true, trim: true })
  month: string;

  @Prop({ required: true, trim: true })
  rate: number;

  @Prop({ required: true, trim: true })
  amount: number;

  @Prop({ required: true, trim: true })
  deduction: number;

  @Prop({ required: true, trim: true })
  installment: number;

  @Prop({ required: true, trim: true })
  others: number;

  @Prop({ required: true, trim: true })
  stuff: number;

  @Prop({ required: true, trim: true })
  gross: number;

  @Prop({ type: Types.ObjectId, ref: 'Employe' })
  employee: string;
}

export const PaycheckSchema = SchemaFactory.createForClass(Paycheck);
