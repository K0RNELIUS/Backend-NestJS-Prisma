import { PartialType, PickType } from "@nestjs/swagger";
import { LabelEntity } from "src/entities/label.entity";

export class createLabelDto extends PickType(
    LabelEntity, ["text"]
){}