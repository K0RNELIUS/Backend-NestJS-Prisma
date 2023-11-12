import { LABEL } from "@prisma/client";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class LabelEntity implements LABEL {
    @IsNumber()
    id: number

    @IsNotEmpty({
        message: "O atributo deve existir"
    })
    @IsString({
        message: "O atributo text precisa ser string"
    })
    text: string
}