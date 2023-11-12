import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common/decorators";
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
    @Get("checked/:checked")
    async findStatusTasks(@Param("checked") checked: string) {
        let checkedBool: boolean;
        if (checked.toLowerCase() === 'true') {
            checkedBool = true;
        } else if (checked.toLowerCase() === 'false') {
            checkedBool = false;
        } else {
            return Error('Invalid type for route');
        }
        try {
            return await this.taskService.findStatusTasks(checkedBool);
        } catch(error) {
            return error;
        } 
    }

    // GET Tasks from label
    @Get("label/:labelId")
    async findLabelTasks(@Param("labelId") labelId: string) {
        return await this.taskService.findLabelTasks(+labelId);
    }

    // UPDATE
    @Patch(":id")
    async updateTask(@Param("id") id: string, @Body() dtoUpdateTask: updateTaskDto) {
        try {
            return await this.taskService.updateTask(+id, dtoUpdateTask);
        } catch(error) {
            return error;
        }
    }

    // DELETE 
    @Delete(":id")
    async deleteTask(@Param("id") id: string) {
        try {
            return await this.taskService.deleteTask(+id);
        } catch(error) {
            return error;
        }
    }

    // DELETE checked or not Tasks
    @Delete("checked/:checked")
    async deleteStatusTasks(@Param("checked") checked: string) {
        let checkedBool: boolean;
        if (checked.toLowerCase() === 'true') {
            checkedBool = true;
        } else if (checked.toLowerCase() === 'false') {
            checkedBool = false;
        } else {
            return Error('Invalid type for route');
        }
        try {
            return await this.taskService.deleteStatusTasks(checkedBool);
        } catch(error) {
            return error;
        }
    }

    

}