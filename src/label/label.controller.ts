import { Body, Controller, Post } from '@nestjs/common';
import { LabelService } from './label.service';
import { LabelDTO } from './label.dto';

@Controller('label')
export class LabelController {
    constructor(private readonly labelService: LabelService) {}

    @Post()
    async create(@Body() data: LabelDTO) {
        return this.labelService.create(data);
    }
}
