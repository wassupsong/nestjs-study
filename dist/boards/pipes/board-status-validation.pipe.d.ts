import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { BoardStatusModel } from "../board-status-enum";
export declare class BoardStatusValidationPipe implements PipeTransform {
    readonly StatusOptions: BoardStatusModel[];
    transform(value: any, metadata: ArgumentMetadata): any;
    private isStatusValid;
}
