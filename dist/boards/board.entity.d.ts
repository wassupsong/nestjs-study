import { BaseEntity } from "typeorm";
import { BoardStatusModel } from "./board-status-enum";
import { CreateBoardDto } from "./dto/create-board.dto";
import { User } from "src/auth/auth.entity";
export declare class Board extends BaseEntity {
    id: number;
    title: string;
    description: string;
    status: BoardStatusModel;
    user: User;
    static getAllBoard(user: User): Promise<Board[]>;
    static getBoardById(id: number): Promise<Board>;
    static createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board>;
    static deleteBoard(id: number, user: User): Promise<void>;
    static updateBoardStatus(id: number, status: BoardStatusModel): Promise<Board>;
}
