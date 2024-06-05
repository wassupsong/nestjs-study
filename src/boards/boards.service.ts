import { Injectable, NotFoundException } from "@nestjs/common";
import { Board } from "./board.entity";
import { CreateBoardDto } from "./dto/create-board.dto";
import { BoardStatusModel } from "./board-status-enum";

@Injectable()
export class BoardsService {
  async getAllBoard(): Promise<Board[]> {
    return await Board.getAllBoard();
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await Board.getBoardById(id);
    if (!found) {
      throw new NotFoundException(`Cant' find board with id ${id}`);
    }
    return found;
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return await Board.createBoard(createBoardDto);
  }

  async deleteBoard(id: number): Promise<void> {
    return await Board.deleteBoard(id);
  }

  async updateBoardStatus(
    id: number,
    status: BoardStatusModel,
  ): Promise<Board> {
    return await Board.updateBoardStatus(id, status);
  }
}
