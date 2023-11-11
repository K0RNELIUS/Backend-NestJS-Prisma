import { TASK } from "@prisma/client";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class TaskEntity implements TASK {
    @IsNumber()
    id: number

    @IsString({
        message: "O atributo text precisa ser string"
    })
    text: string

    @IsBoolean({
        message: "O atributo checked precisa ser boolean"
    })
    checked: boolean

    @IsOptional() 
    @IsNumber({}, {
        message: "O atributo labelId precisa ser number"
    })
    labelId: number
}