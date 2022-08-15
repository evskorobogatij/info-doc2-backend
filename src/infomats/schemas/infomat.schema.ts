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
const InfomatSchema = SchemaFactory.createForClass(Infomat);
InfomatSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

InfomatSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret, options) => {
    delete ret.__v;
    ret.id = ret._id.toString();
    delete ret._id;
  },
});

export { InfomatSchema };
