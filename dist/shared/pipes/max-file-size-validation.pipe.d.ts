import { PipeTransform } from '@nestjs/common';
export declare class MaxFileSizeValidationPipe implements PipeTransform {
    transform(value: any): boolean;
}
