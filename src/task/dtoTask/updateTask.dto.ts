import { PartialType, PickType } from "@nestjs/swagger";
import { TaskEntity } from "src/entities/task.entity";

export class updateTaskDto extends PartialType(
    PickType(
        TaskEntity, [
            "text",
            "checked",
            "labelId"
        ]
)){}