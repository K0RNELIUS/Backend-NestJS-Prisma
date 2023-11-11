import { LABEL } from "@prisma/client";
import { IsNumber, IsString } from "class-validator";

export class LabelEntity implements LABEL {
    @IsNumber()
    id: number

    @IsString({
        message: "O atributo text precisa ser string"
    })
    text: string
}