import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { File } from './entities/File.entity';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(File)
    private fileRepository: Repository<File>) {}

  async upload(file: any): Promise<File> { 
    const { filename, path } = file;

    const uploadFile = this.fileRepository.create({
      filename,
      path
    })

    await this.fileRepository.save(uploadFile);
    return uploadFile;
  }
}
