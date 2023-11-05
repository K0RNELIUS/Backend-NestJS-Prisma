import { Injectable } from '@nestjs/common';
import { LabelDTO } from './label.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { error } from 'console';

@Injectable()
export class LabelService {

    constructor(private prisma : PrismaService) {}

    // CRUD Label

    async create(data: LabelDTO) {
        await this.prisma.lABEL.create({
            data, 
        });
    }


}
