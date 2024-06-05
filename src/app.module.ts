import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { BoardsModule } from "./boards/boards.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeORMConfig } from "./configs/typeorm.config";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(TypeORMConfig), BoardsModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
