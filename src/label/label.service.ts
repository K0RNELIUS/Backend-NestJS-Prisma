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
        const label = await this.prisma.lABEL.create({
            data: dtoCreateLabel
        });
        return label;
    }

    // READ ALL
    async findLabels() {
        return await this.prisma.lABEL.findMany();
    }

    // READ ONE
    async findLabel(id: number) {
        const labelExists = await this.prisma.lABEL.findUnique({
            where: {
                id,
            }
        });
        if (!labelExists) {
            throw new Error("Label does not exist");
        } 
        return labelExists;
    }

    // UPDATE 
    async updateLabelText(id: number, dtoUpdateLabel: updateLabelDto) {
        const labelExists = await this.prisma.lABEL.findUnique({
            where: {
                id,
            }
        });
        if (!labelExists) {
            throw new Error("Label does not exist");
        } 
        return await this.prisma.lABEL.update({
            where: {
                id,
            },
            data: dtoUpdateLabel,
        });
    }

    // DELETE
    async deleteLabel(id: number) {
        const labelExists = await this.prisma.lABEL.findUnique({
            where: {
                id,
            }
        });
        if (!labelExists) {
            throw new Error("Label does not exist");
        } 
        return this.prisma.lABEL.delete({
            where: {
                id,
            },
        });
    }

}
