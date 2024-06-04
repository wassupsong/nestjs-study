import { Injectable, NotFoundException } from "@nestjs/common";
import { Board } from "./board.entity";

@Injectable()
export class BoardsService {
  async getBoardById(id: number): Promise<Board> {
    const found = await Board.findOne(id);
    if (!found) {
      throw new NotFoundException(`Cant' find board with id ${id}`);
    }
    return found;
  }
  // private boards: BoardModel[] = [];
  // getAllBoards() {
  //   return this.boards;
  // }
  // getBoardById(id: string): BoardModel {
  //   const found = this.boards.find((el) => el.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Can't find board with id ${id}`);
  //   }
  //   return found;
  // }
  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto;
  //   const board: BoardModel = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatusModel.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.boards.filter((el) => el.id === found.id);
  // }
  // updateBoardStatus(id: string, status: BoardStatusModel): BoardModel {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
