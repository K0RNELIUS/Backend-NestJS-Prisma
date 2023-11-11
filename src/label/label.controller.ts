import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { createLabelDto } from './dtoLabel/createLabel.dto';
import { updateLabelDto } from './dtoLabel/updateLabel.dto';
import { LabelService } from './label.service';

@Controller('label')
export class LabelController {
    constructor(private readonly labelService: LabelService) {}

    // CREATE Route
    @Post()
    async create(@Body() dtoCreateLabel: createLabelDto) {
        return await this.labelService.create(dtoCreateLabel);
    }

    // GET ALL Route
    @Get()
    async findLabels() {
        return await this.labelService.findLabels();
    }

    // GET ONE route 
    @Get(":id") 
    async findLabel(@Param("id") id: string) {
        return await this.labelService.findLabel(+id);
    }

    // UPDATE
    @Put(":id")
    async updateLabelText(@Param("id") id: string, @Body() dtoUpdateLabel: updateLabelDto) {
        return await this.labelService.updateLabelText(+id, dtoUpdateLabel);
    }

    // DELETE
    @Delete(":id")
    async deleteLabel(@Param("id") id: string) {
        return await this.labelService.deleteLabel(+id);
    }
}
