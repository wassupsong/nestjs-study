import { BoardModel } from './board.model';
export declare class BoardsService {
    private boards;
    getAllBoards(): BoardModel[];
    createBoard(title: string, description: string): void;
}
