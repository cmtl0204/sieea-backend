import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { UserEntity } from '@auth/entities';
export declare class VerifyUserMiddleware implements NestMiddleware {
    private readonly userEntityRepository;
    private readonly jwtService;
    constructor(userEntityRepository: Repository<UserEntity>, jwtService: JwtService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
