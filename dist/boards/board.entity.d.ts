import { BaseEntity } from "typeorm";
import { BoardStatusModel } from "./board-status-enum";
import { CreateBoardDto } from "./dto/create-board.dto";
export declare class Board extends BaseEntity {
    id: number;
    title: string;
    description: string;
    status: BoardStatusModel;
    static getAllBoard(): Promise<Board[]>;
    static getBoardById(id: number): Promise<Board>;
    static createBoard(createBoardDto: CreateBoardDto): Promise<Board>;
    static deleteBoard(id: number): Promise<void>;
    static updateBoardStatus(id: number, status: BoardStatusModel): Promise<Board>;
}
