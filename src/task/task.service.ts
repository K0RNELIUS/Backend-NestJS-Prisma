import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { TaskDTO } from "./task.dto";

@Injectable()
export class TaskService {
    constructor(private prisma : PrismaService) {}

    // CRUD Task

    // CREATE 
    async create(data: TaskDTO) {
        const task = await this.prisma.tASK.create({
            data,
        });
        return task;
    }

    // READ ALL 
    async findTasks() {
        return await this.prisma.tASK.findMany();
    }

    // READ ONE 
    async findTask(id: number) {
        const taskExists = await this.prisma.tASK.findUnique({
            where: {
                id,
            }
        });
        if (!taskExists) {
            throw Error("Task does not exist");
        }
        return taskExists;
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
        const labelExists = await this.prisma.lABEL.findUnique({
            where: {
                id: idLabel,
            },
        });
        if (!labelExists) {
            throw new Error("Label does not exist");
        }
        return this.prisma.tASK.findMany({
            where: {
                labelId: idLabel,
            },
        });
    }

    // UPDATE
    async updateTask(id: number, data: TaskDTO) {
        const taskExists = await this.prisma.tASK.findUnique({
            where: {
                id,
            }
        });
        if (!taskExists) {
            throw Error("Task does not exist");
        }
        return await this.prisma.tASK.update({
            where: {
                id,
            },
            data,
        });
    }

    // DELETE 
    async deleteTask(id: number) {
        const taskExists = await this.prisma.tASK.findUnique({
            where: {
                id,
            }
        });
        if (!taskExists) {
            throw Error("Task does not exist")
        }
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