import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DesignationDocument = HydratedDocument<Designation>;

@Schema()
export class Designation {
  @Prop({ required: true, trim: true, unique: true })
  name: string;

  @Prop({ required: true, trim: true })
  rate: number;
}

export const DesignationSchema = SchemaFactory.createForClass(Designation);
