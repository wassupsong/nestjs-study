import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthCredentialsDto } from "./dto/auth-credential.dto";
import { User } from "./auth.entity";
import { AuthGuard } from "@nestjs/passport";
import { GetUser } from "./get-user.decorator";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/signup")
  signUp(
    @Body(ValidationPipe) authCredentialDto: AuthCredentialsDto,
  ): Promise<User> {
    return this.authService.signUp(authCredentialDto);
  }

  @Post("/signin")
  signIn(
    @Body(ValidationPipe) authCredentialDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialDto);
  }

  @Post("/test")
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log("user : ", user);
  }
}
