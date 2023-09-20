import { Module } from '@nestjs/common';
import {AuthService} from "./services/auth/auth.service";
import {AuthController} from "./controllers/auth/auth.controller";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {UsersModule} from "../users/users.module";
import {AuthGuard} from "./guards/auth/auth.guard";
import {APP_GUARD} from "@nestjs/core";
import {SkipAuth} from "./decorators/skip-auth";

@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: {
                expiresIn: '60s'
            }
        })
    ],
    providers: [
        AuthService,
        JwtService,
        {
            provide: APP_GUARD,
            useClass: AuthGuard
        },
    ],
    controllers: [AuthController],
    exports: [AuthService, SkipAuth],
})
export class AuthModule {}
