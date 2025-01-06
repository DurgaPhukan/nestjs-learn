import { Body, Controller, ParseIntPipe, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

// pipes are functions that transforms your data

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    // Route will be =>  POST /auth/signup
    @Post('signup')
    signup(@Body() dto: AuthDto)
    // (pipes concept
    // @Body('email') email: string,
    // @Body('password', ParseIntPipe) password: string)
    {
        return this.authService.signup(dto)
    }

    @Post('signin')
    signin(@Body() dto: AuthDto) {
        return this.authService.signin(dto)
    }
}