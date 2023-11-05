import { Injectable } from '@nestjs/common';
import { LabelDTO } from './label.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { error } from 'console';

@Injectable()
export class LabelService {
    constructor(private prisma : PrismaService) {}

    // CRUD Label

    // CREATE
    async create(data: LabelDTO) {
        const label = await this.prisma.lABEL.create({
            data, 
        });

        return label;
    }

    // READ ONE
    async


}
