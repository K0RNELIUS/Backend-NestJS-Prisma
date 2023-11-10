import { TaskDTO } from "src/task/task.dto";

export type LabelDTO = {
    id: number; 
    text: string;
    tasks: {
        create: TaskDTO[]; 
    };
};
