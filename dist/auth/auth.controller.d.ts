import { AuthService } from "./auth.service";
import { AuthCredentialsDto } from "./dto/auth-credential.dto";
import { User } from "./auth.entity";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCredentialDto: AuthCredentialsDto): Promise<User>;
    signIn(authCredentialDto: AuthCredentialsDto): Promise<{
        accessToken: string;
    }>;
    test(user: User): void;
}
