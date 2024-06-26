"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardsService = void 0;
const common_1 = require("@nestjs/common");
const board_entity_1 = require("./board.entity");
let BoardsService = class BoardsService {
    async getAllBoard(user) {
        return await board_entity_1.Board.getAllBoard(user);
    }
    async getBoardById(id) {
        const found = await board_entity_1.Board.getBoardById(id);
        if (!found) {
            throw new common_1.NotFoundException(`Cant' find board with id ${id}`);
        }
        return found;
    }
    async createBoard(createBoardDto, user) {
        return await board_entity_1.Board.createBoard(createBoardDto, user);
    }
    async deleteBoard(id, user) {
        return await board_entity_1.Board.deleteBoard(id, user);
    }
    async updateBoardStatus(id, status) {
        return await board_entity_1.Board.updateBoardStatus(id, status);
    }
};
exports.BoardsService = BoardsService;
exports.BoardsService = BoardsService = __decorate([
    (0, common_1.Injectable)()
], BoardsService);
//# sourceMappingURL=boards.service.js.map