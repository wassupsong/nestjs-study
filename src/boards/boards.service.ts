import { Injectable, NotFoundException } from "@nestjs/common";
import { Board } from "./board.entity";
import { CreateBoardDto } from "./dto/create-board.dto";
import { BoardStatusModel } from "./board-status-enum";
import { User } from "src/auth/auth.entity";

@Injectable()
export class BoardsService {
  async getAllBoard(user: User): Promise<Board[]> {
    return await Board.getAllBoard(user);
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await Board.getBoardById(id);
    if (!found) {
      throw new NotFoundException(`Cant' find board with id ${id}`);
    }
    return found;
  }

  async createBoard(
    createBoardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    return await Board.createBoard(createBoardDto, user);
  }

  async deleteBoard(id: number, user: User): Promise<void> {
    return await Board.deleteBoard(id, user);
  }

  async updateBoardStatus(
    id: number,
    status: BoardStatusModel,
  ): Promise<Board> {
    return await Board.updateBoardStatus(id, status);
  }
}
