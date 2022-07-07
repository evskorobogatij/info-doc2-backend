import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateInfomatDto } from './dto/create-infomat.dto';
import { UpdateInfomatDto } from './dto/update-infomat.dto';
import { Infomat, InfomatDocument } from './schemas/infomat.schema';

@Injectable()
export class InfomatsService {
  constructor(
    @InjectModel(Infomat.name)
    private readonly infomatModel: Model<InfomatDocument>,
  ) {}
  create(createInfomatDto: CreateInfomatDto) {
    const newInfomat = new this.infomatModel(createInfomatDto);
    return newInfomat.save();
  }

  findAll() {
    return this.infomatModel.find().exec();
  }

  findOne(id: string) {
    return this.infomatModel.findById(id).exec();
  }

  update(id: string, updateInfomatDto: UpdateInfomatDto) {
    return this.infomatModel.findByIdAndUpdate(id, updateInfomatDto).exec();
  }

  remove(id: string) {
    return this.infomatModel.findByIdAndRemove(id);
  }
}
