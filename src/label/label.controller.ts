import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { createLabelDto } from './dtoLabel/createLabel.dto';
import { updateLabelDto } from './dtoLabel/updateLabel.dto';
import { LabelService } from './label.service';
import { error } from 'console';

@Controller('label')
export class LabelController {
    constructor(private readonly labelService: LabelService) {}

    // CREATE Route
    @Post()
    async create(@Body() dtoCreateLabel: createLabelDto) {
        return this.labelService.create(dtoCreateLabel);
    }

    // GET ALL Route
    @Get()
    async findLabels() {
        return this.labelService.findLabels();
    }

    // GET ONE route 
    @Get(":id") 
    async findLabel(@Param("id") id: string) {
        return this.labelService.findLabel(+id);
    }

    // UPDATE
    @Put(":id")
    async updateLabelText(@Param("id") id: string, @Body() dtoUpdateLabel: updateLabelDto) {
        return this.labelService.updateLabelText(+id, dtoUpdateLabel);
    }

    // DELETE
    @Delete(":id")
    async deleteLabel(@Param("id") id: string) {
        return this.labelService.deleteLabel(+id);
    }
}
