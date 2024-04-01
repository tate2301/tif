import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { HeaderAPIKeyStrategy } from "passport-headerapikey"
import { APIKeyAuthService } from "../auth.service";
import { MerchantService } from "src/user/service/merchant.service";

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(HeaderAPIKeyStrategy, 'headerapikey') {
    constructor(private authService: APIKeyAuthService, private merchantService: MerchantService) {
        super({header: 'authorization', prefix: ''}, true, async (apiKey, done) => {
            if(this.authService.validateApiKey(apiKey)) {
                done(null, true)
            }

            done(new UnauthorizedException(), null)
        })
    }

    async validate(apiKey: string) {
        
        return {

        }
    }
}