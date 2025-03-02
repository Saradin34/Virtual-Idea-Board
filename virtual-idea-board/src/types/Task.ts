export interface Task {
    id?: string; // Опционально, так как Firebase добавит ID автоматически
    title: string;
    description: string;
    completed: boolean;
    userId: string; // ID пользователя, создавшего задачу
    createdAt: string;
    comments: string[];
}