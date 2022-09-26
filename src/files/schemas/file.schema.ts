import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { UploadedFileDoc } from 'src/uploaded-files/schema/uploaded-file.schema';

@Schema({ autoCreate: true, timestamps: true })
export class File {
  @Prop()
  title: string;

  // @Prop({ unique: true })
  // fileName: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'UploadedFileDoc' })
  file: UploadedFileDoc;
}

export type FileDocument = File & Document;
export const FileSchema = SchemaFactory.createForClass(File);

FileSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

FileSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret, options) => {
    delete ret.__v;
    ret.id = ret._id.toString();
    delete ret._id;
  },
});
