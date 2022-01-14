import { Injectable } from "@nestjs/common";
import {  PassportStrategy } from "@nestjs/passport";
import { ExtractJwt,Strategy } from "passport-jwt";

console.log(process.env.JWT_SECRET);

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET
        })
    }
    // async validate(payload: any, done: VerifiedCallback) {
    //     const user = await this.usersService.findOneByPayload(payload);
    //     if (!user) {
    //       return done(new UnauthorizedException(), false);
    //     }
    
    //     return done(null, { id: user.id }, payload.iat);
    // }
    async validate(payload: any){
        return {
            id: payload.sub,
            name: payload.name
        }
    }
}