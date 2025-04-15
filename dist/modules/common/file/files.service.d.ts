import { Repository } from 'typeorm';
import { FileEntity } from './file.entity';
import { ServiceResponseHttpModel } from '@shared/interfaces';
import { FilterFileDto } from './dto';
export declare class FilesService {
    private repository;
    constructor(repository: Repository<FileEntity>);
    uploadFile(file: Express.Multer.File, modelId: string, typeId: string): Promise<FileEntity>;
    uploadFiles(files: Array<Express.Multer.File>, modelId: string): Promise<void>;
    findOne(id: string): Promise<FileEntity>;
    getPath(id: string): Promise<string>;
    findByModel(modelId: string, params?: FilterFileDto): Promise<ServiceResponseHttpModel>;
    private paginateAndFilter;
    remove(id: string): Promise<any>;
}
