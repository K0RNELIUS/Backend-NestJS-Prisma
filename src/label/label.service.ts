import { Injectable } from '@nestjs/common';
import { LabelDTO } from './label.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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
    async updateLabelText(id: number, data: LabelDTO) {
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
            data
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
