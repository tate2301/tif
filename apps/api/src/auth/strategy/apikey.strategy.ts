import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { HeaderAPIKeyStrategy } from "passport-headerapikey"
import { APIKeyAuthService } from "../auth.service";

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(HeaderAPIKeyStrategy, 'authorization') {
    constructor(private authService: APIKeyAuthService) {
        super({header: 'authorization', prefix: ''}, true, async (apiKey, done) => {
            if(this.authService.validateApiKey(apiKey)) {
                done(null, true)
            }

            done(new UnauthorizedException(), null)
        })
    }
}