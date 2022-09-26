import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ autoCreate: true, timestamps: true })
export class UploadedFileDoc {
  @Prop({ unique: true, name: 'file_name' })
  filename: string;

  @Prop()
  original: string;

  @Prop()
  size: number;

  @Prop()
  mime: string;

  @Prop()
  ext: string;
}

export type UploadedFileDocDocument = UploadedFileDoc & Document;
export const UploadedFileSchema = SchemaFactory.createForClass(UploadedFileDoc);

UploadedFileSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

UploadedFileSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret, options) => {
    delete ret.__v;
    ret.id = ret._id.toString();
    delete ret._id;
  },
});
