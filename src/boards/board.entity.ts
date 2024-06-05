import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BoardStatusModel } from "./board-status-enum";
import { CreateBoardDto } from "./dto/create-board.dto";
import { NotFoundException } from "@nestjs/common";
import { User } from "src/auth/auth.entity";

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

  @ManyToOne((type) => User, (user) => user.boards, { eager: false })
  user: User;

  static async getAllBoard(user: User): Promise<Board[]> {
    const query = this.createQueryBuilder("board");
    query.where("board.userId = :userId", { userId: user.id });

    return await query.getMany();
  }

  static async getBoardById(id: number): Promise<Board> {
    return this.findOne({
      where: { id },
    });
  }

  static async createBoard(
    createBoardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    const board = this.create({
      ...createBoardDto,
      status: BoardStatusModel.PUBLIC,
      user,
    });
    await this.save(board);
    return board;
  }

  static async deleteBoard(id: number, user: User): Promise<void> {
    const result = await this.delete({ id, user });
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
