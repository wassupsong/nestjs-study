"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeORMConfig = void 0;
exports.TypeORMConfig = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "board-app",
    entities: [__dirname + "/../**/*.entity.{js,ts}"],
    synchronize: true,
};
//# sourceMappingURL=typeorm.config.js.map