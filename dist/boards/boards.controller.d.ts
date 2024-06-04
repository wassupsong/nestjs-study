import { BoardsService } from './boards.service';
import { BoardModel } from './board.model';
export declare class BoardsController {
    private boardsService;
    constructor(boardsService: BoardsService);
    getAllBoards(): BoardModel[];
}
