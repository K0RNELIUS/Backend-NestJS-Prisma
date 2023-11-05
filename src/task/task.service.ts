import { Injectable } from '@nestjs/common';
import { PrismaService  } from 'src/prisma/prisma.service';
import { TASK, Prisma } from '@prisma/client';

@Injectable()
export class TaskService {
    constructor(private prisma: PrismaService) {};

    async createTask(data: Prisma.TASKCreateInput): Promise<TASK> {
        return this.prisma.tASK.create({
            data,
        });
    }

    async task(
        taskWhereUniqueInput: Prisma.TASKWhereUniqueInput,
    ): Promise<TASK | null> {
        return this.prisma.tASK.findUnique({
            where: taskWhereUniqueInput,
        });
    }

    async updateTaskChecked(params: {
        where: Prisma.TASKWhereUniqueInput;
        data: Prisma.TASKUpdateInput;
    }); Promise<Task> {
        const { where, data } = params;
        return this.prisma.tASK.update({
            data, 
            where,
        });
    }

    async deleteTask(where: Prisma.TASKWhereUniqueInput): Promise<TASK> {
        return this.prisma.tASK.delete({
            where,
        });
    }
}
