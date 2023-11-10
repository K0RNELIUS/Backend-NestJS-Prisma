import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { TaskDTO } from "./task.dto";
import { TaskService } from "./task.service";

@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    // CREATE Route
    @Post()
    async create(@Body() data: TaskDTO) {
        return this.taskService.create(data);
    }

    // GET ALL Route
    @Get()
    async findTasks() {
        return this.taskService.findTasks();
    }

    // GET ONE Route
    @Get(":id")
    async findTask(@Param("id") id: string) {
        return this.taskService.findTask(Number(id));
    }

    // GET checked or not Tasks
    @Get()
    async findStatusTasks(@Body("checked") checked: boolean) {
        return this.taskService.findStatusTasks(checked);
    }

    // GET Tasks from label
    @Get(":labelId")
    async findLabelTasks(@Param("labelId") labelId: string) {
        return this.taskService.findLabelTasks(Number(labelId));
    }

    // UPDATE
    @Put(":id")
    async updateTask(@Param("id") id: string, data: TaskDTO) {
        return this.taskService.updateTask(Number(id), data);
    }

    // DELETE 
    @Delete(":id")
    async deleteTask(@Param("id") id: string) {
        return this.taskService.deleteTask(Number(id));
    }

    // DELETE checked or not Tasks
    @Delete()
    async deleteStatusTasks(checked: boolean) {
        return this.taskService.deleteStatusTasks(checked);
    }
}