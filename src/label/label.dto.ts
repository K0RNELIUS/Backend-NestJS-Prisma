import { TaskDTO } from "src/task/task.dto";

export type LabelDTO = {
    id?: number; // This property should be optional or removed if it's not needed during creation
    text: string;
    tasks: {
        create: TaskDTO[]; // Prisma expects a nested 'create' property for related models
    };
};
