import { BoardsService } from "./boards.service";
import { BoardStatusModel } from "./board-status-enum";
import { CreateBoardDto } from "./dto/create-board.dto";
import { Board } from "./board.entity";
import { User } from "src/auth/auth.entity";
export declare class BoardsController {
    private boardsService;
    private logger;
    constructor(boardsService: BoardsService);
    getAllBoard(user: User): Promise<Board[]>;
    getBoardById(id: number): Promise<Board>;
    createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board>;
    deleteBoard(id: number, user: User): Promise<void>;
    updateBoardStatus(id: number, status: BoardStatusModel): Promise<Board>;
}
