import { FilesService } from './files.service';
import { ResponseHttpModel } from '@shared/interfaces';
import { FilterFileDto } from './dto';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    uploadFile(file: Express.Multer.File, modelId: string, typeId: string): Promise<ResponseHttpModel>;
    uploadFiles(files: Array<Express.Multer.File>, modelId: string, payload: any): Promise<ResponseHttpModel>;
    download(id: string, res: any): Promise<ResponseHttpModel>;
    findByModel(modelId: string, params: FilterFileDto): Promise<ResponseHttpModel>;
    remove(id: string): Promise<ResponseHttpModel>;
    readFiles(): Promise<ResponseHttpModel>;
}
