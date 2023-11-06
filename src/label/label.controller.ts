import { Body, Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { LabelService } from './label.service';
import { LabelDTO } from './label.dto';

@Controller('label')
export class LabelController {
    constructor(private readonly labelService: LabelService) {}

    // CREATE Route
    @Post()
    async create(@Body() data: LabelDTO) {
        return this.labelService.create(data);
    }

    // GET ALL Route
    @Get()
    async findLabels() {
        return this.labelService.findLabels();
    }

    // GET ONE route 
    @Get(":id") 
    async findLabel(@Param("id") id: string) {
        return this.labelService.findLabel(Number(id));
    }

    // UPDATE
    @Put(":id")
    async updateLabelText(@Param("id") id: string, text: string) {
        return this.labelService.updateLabelText(Number(id), text);
    }

    // DELETE
    @Delete(":id")
    async deleteLabel(@Param("id") id: string) {
        return this.labelService.deleteLabel(Number(id));
    }
}
