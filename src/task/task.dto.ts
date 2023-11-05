import { LabelDTO } from "src/label/label.dto";

export type TaskDTO = {
    id? : number;
    text : string;
    checked : boolean;
    label? : LabelDTO;
}