import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AdminDocument = HydratedDocument<Admin>;

@Schema()
export class Admin {
  @Prop({ required: true, trim: true, unique: true })
  fullName: string;

  @Prop({ required: true, trim: true })
  password: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);


