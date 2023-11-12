import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
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
    @Patch(":id")
    async updateLabelText(@Param("id") id: string, @Body() dtoUpdateLabel: updateLabelDto) {
        try {
            return await this.labelService.updateLabelText(+id, dtoUpdateLabel);
        } catch(error) {
            return error;
        }  
    }

    // DELETE
    @Delete(":id")
    async deleteLabel(@Param("id") id: string) {
        try {
            return await this.labelService.deleteLabel(+id);
        } catch(error) {
            return error; 
        }
    }


    
}
