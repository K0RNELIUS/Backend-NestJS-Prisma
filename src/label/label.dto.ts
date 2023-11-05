import { TaskDTO } from "src/task/task.dto";

export type LabelDTO = {
    id? : Number;
    text : String;
    tasks : TaskDTO[]; 
}