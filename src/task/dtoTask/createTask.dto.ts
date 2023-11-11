import { PickType } from "@nestjs/swagger";
import { TaskEntity } from "src/entities/task.entity";

export class createTaskDto extends PickType(
    TaskEntity, ["text", "checked", "labelId"]
){}