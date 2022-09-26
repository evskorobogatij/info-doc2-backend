import { HttpException, HttpStatus } from '@nestjs/common';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';

export const multerOptions: MulterOptions = {
  limits: {
    fileSize: Number(process.env.MAX_FILE_SIZE) || 10 * 1024 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(
        new HttpException(
          `Файл ${file.originalname} имеет неправильный тип. Разрешена загрузка только pdf файлов. `,
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
  },
  storage: diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = process.env.UPPLOAD_PATH || './upload';
      if (!existsSync(uploadPath)) {
        mkdirSync(uploadPath);
      }
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      const ext = file.originalname.split('.').at(-1);
      const numeric = '0123456789';
      const charsLower = 'abcdefghijklmnopqrstuvwxyz';
      const source = numeric + charsLower;
      const len = source.length;
      const fileName = Array(32)
        .fill(1)
        .map(() => source[Math.floor(Math.random() * len)])
        .join('');
      cb(null, `${fileName}.${ext}`);
    },
  }),
};
