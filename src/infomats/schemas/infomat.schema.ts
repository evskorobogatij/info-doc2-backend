import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ autoCreate: true, timestamps: true })
export class Infomat {
  @Prop({ unique: true })
  code: number;

  @Prop()
  name: string;
}

export type InfomatDocument = Infomat & Document;
export const InfomatSchema = SchemaFactory.createForClass(Infomat);
