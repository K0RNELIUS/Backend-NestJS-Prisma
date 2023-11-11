import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { createTaskDto } from './dtoTask/createTask.dto';
import { updateTaskDto } from './dtoTask/updateTask.dto';

@Injectable()
export class TaskService {
    constructor(private prisma : PrismaService) {}

    // CRUD Task

    // CREATE 
    async create(dtoCreateTask: createTaskDto) {
        return await this.prisma.tASK.create({
            data: dtoCreateTask 
        });
    }

    // READ ALL 
    async findTasks() {
        return await this.prisma.tASK.findMany();
    }

    // READ ONE 
    async findTask(id: number) {
        return await this.prisma.tASK.findUnique({
            where: {
                id,
            }
        });
    }

    // READ checked or not Tasks
    async findStatusTasks(checked: boolean) {
        return this.prisma.tASK.findMany({
            where: {
                checked,
            },
        });
    }

    // READ Tasks from label
    async findLabelTasks(idLabel: number) {
        return this.prisma.tASK.findMany({
            where: {
                labelId: idLabel,
            },
        });
    }

    // UPDATE
    async updateTask(id: number, dtoUpdateTask: updateTaskDto) {
        return await this.prisma.tASK.update({
            where: {
                id,
            },
            data: dtoUpdateTask
        });
    }

    // DELETE 
    async deleteTask(id: number) {
        return await this.prisma.tASK.delete({
            where: {
                id,
            }
        });
    }

    // DELETE checked or not Tasks
    async deleteStatusTasks(checked: boolean) {
        return await this.prisma.tASK.deleteMany({
            where: {
                checked,
            },
        });
    }



} 