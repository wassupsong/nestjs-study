import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { BoardsService } from "./boards.service";
import { BoardStatusModel } from "./board-status-enum";
import { CreateBoardDto } from "./dto/create-board.dto";
import { BoardStatusValidationPipe } from "./pipes/board-status-validation.pipe";
import { Board } from "./board.entity";

@Controller("boards")
export class BoardsController {
  constructor(private boardsService: BoardsService) {}
  @Get("/:id")
  async getBoardById(@Param("id") id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }
  // @Get("/")
  // getAllBoards(): BoardModel[] {
  //   return this.boardsService.getAllBoards();
  // }
  // @Get("/:id")
  // getBoardById(@Param("id") id: string): BoardModel {
  //   return this.boardsService.getBoardById(id);
  // }
  // @Post("")
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDto: CreateBoardDto) {
  //   return this.boardsService.createBoard(createBoardDto);
  // }
  // @Delete("/:id")
  // deleteBoard(@Param("id") id: string): void {
  //   this.boardsService.deleteBoard(id);
  // }
  // @Patch("/:id/status")
  // updateBoardStatus(
  //   @Param("id") id: string,
  //   @Body("status", BoardStatusValidationPipe) status: BoardStatusModel,
  // ) {
  //   return this.boardsService.updateBoardStatus(id, status);
  // }
}
