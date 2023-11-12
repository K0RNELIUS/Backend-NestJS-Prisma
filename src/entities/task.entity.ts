import { TASK } from "@prisma/client";
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class TaskEntity implements TASK {
    @IsNumber()
    id: number

    @IsNotEmpty({
        message: "O atributo deve existir"
    })
    @IsString({
        message: "O atributo text precisa ser string"
    })
    text: string

    @IsNotEmpty({
        message: "O atributo deve existir"
    })
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