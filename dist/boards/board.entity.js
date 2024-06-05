"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const typeorm_1 = require("typeorm");
const board_status_enum_1 = require("./board-status-enum");
const common_1 = require("@nestjs/common");
const auth_entity_1 = require("../auth/auth.entity");
let Board = class Board extends typeorm_1.BaseEntity {
    static async getAllBoard(user) {
        const query = this.createQueryBuilder("board");
        query.where("board.userId = :userId", { userId: user.id });
        return await query.getMany();
    }
    static async getBoardById(id) {
        return this.findOne({
            where: { id },
        });
    }
    static async createBoard(createBoardDto, user) {
        const board = this.create({
            ...createBoardDto,
            status: board_status_enum_1.BoardStatusModel.PUBLIC,
            user,
        });
        await this.save(board);
        return board;
    }
    static async deleteBoard(id, user) {
        const result = await this.delete({ id, user });
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`Can't find board with id: ${id}`);
        }
    }
    static async updateBoardStatus(id, status) {
        const board = await this.getBoardById(id);
        board.status = status;
        return await this.save(board);
    }
};
exports.Board = Board;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Board.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Board.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Board.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Board.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => auth_entity_1.User, (user) => user.boards, { eager: false }),
    __metadata("design:type", auth_entity_1.User)
], Board.prototype, "user", void 0);
exports.Board = Board = __decorate([
    (0, typeorm_1.Entity)()
], Board);
//# sourceMappingURL=board.entity.js.map