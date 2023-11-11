import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createLabelDto } from './dtoLabel/createLabel.dto';
import { updateLabelDto } from './dtoLabel/updateLabel.dto';

@Injectable()
export class LabelService {
    constructor(private prisma : PrismaService) {}

    // CRUD Label

    // CREATE
    async create(dtoCreateLabel: createLabelDto) {
        return await this.prisma.lABEL.create({
            data: dtoCreateLabel
        });
    }

    // READ ALL
    async findLabels() {
        return await this.prisma.lABEL.findMany();
    }

    // READ ONE
    async findLabel(id: number) {
        return await this.prisma.lABEL.findUnique({
            where: {
                id,
            }
        });
    }

    // UPDATE 
    async updateLabelText(id: number, dtoUpdateLabel: updateLabelDto) {
        return await this.prisma.lABEL.update({
            where: {
                id,
            },
            data: dtoUpdateLabel,
        });
    }

    // DELETE
    async deleteLabel(id: number) {
        return this.prisma.lABEL.delete({
            where: {
                id,
            },
        });
    }

}
