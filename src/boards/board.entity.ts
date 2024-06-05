import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BoardStatusModel } from "./board-status-enum";
import { CreateBoardDto } from "./dto/create-board.dto";
import { NotFoundException } from "@nestjs/common";

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatusModel;

  static async getAllBoard(): Promise<Board[]> {
    return this.find();
  }

  static async getBoardById(id: number): Promise<Board> {
    return this.findOne({
      where: { id },
    });
  }

  static async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const board = this.create({
      ...createBoardDto,
      status: BoardStatusModel.PUBLIC,
    });
    await this.save(board);
    return board;
  }

  static async deleteBoard(id: number): Promise<void> {
    const result = await this.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException(`Can't find board with id: ${id}`);
    }
  }

  static async updateBoardStatus(
    id: number,
    status: BoardStatusModel,
  ): Promise<Board> {
    const board = await this.getBoardById(id);
    board.status = status;
    return await this.save(board);
  }
}
