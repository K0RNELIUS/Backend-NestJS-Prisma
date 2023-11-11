import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common/decorators";
import { createTaskDto } from './dtoTask/createTask.dto';
import { updateTaskDto } from './dtoTask/updateTask.dto';
import { TaskService } from "./task.service";
@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    // CREATE Route
    @Post()
    async create(@Body() dtoCreateTask: createTaskDto) {
        return await this.taskService.create(dtoCreateTask);
    }

    // GET ALL Route
    @Get()
    async findTasks() {
        return await this.taskService.findTasks();
    }

    // GET ONE Route
    @Get(":id")
    async findTask(@Param("id") id: string) {
        return await this.taskService.findTask(+id);
    }

    // GET checked or not Tasks 
    @Get("checked")
    async findStatusTasks(@Body("checked") checked: boolean) {
        return await this.taskService.findStatusTasks(checked);
    }

    // GET Tasks from label
    @Get("label/:labelId")
    async findLabelTasks(@Param("labelId") labelId: string) {
        return await this.taskService.findLabelTasks(+labelId);
    }

    // UPDATE
    @Put(":id")
    async updateTask(@Param("id") id: string, dtoUpdateTask: updateTaskDto) {
        return await this.taskService.updateTask(+id, dtoUpdateTask);
    }

    // DELETE 
    @Delete(":id")
    async deleteTask(@Param("id") id: string) {
        return await this.taskService.deleteTask(+id);
    }

    // DELETE checked or not Tasks
    @Delete()
    async deleteStatusTasks(checked: boolean) {
        return await this.taskService.deleteStatusTasks(checked);
    }
}