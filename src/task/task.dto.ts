import { LabelDTO } from "src/label/label.dto";

export type TaskDTO = {
    id? : Number;
    text : String;
    checked : Boolean;
    label? : LabelDTO;
}