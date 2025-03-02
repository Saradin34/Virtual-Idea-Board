import React from 'react';
import { Task } from '../../types/Task';
import TaskItem from '../TaskItem/TaskItem';
import { Typography } from '@mui/material';

interface TaskListProps {
    tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    return (
        <div>
            {tasks.length > 0 ? (
                tasks.map((task) => <TaskItem key={task.id} task={task} />)
            ) : (
                <Typography variant="body1" align="center" sx={{ marginTop: 2 }}>
                    Задач пока нет. Добавьте первую!
                </Typography>
            )}
        </div>
    );
};

export default TaskList;