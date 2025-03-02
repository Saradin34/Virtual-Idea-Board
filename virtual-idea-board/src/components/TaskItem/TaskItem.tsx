import React from 'react';
import { Task } from '../../types/Task';
import { useDispatch } from 'react-redux';
import { completeTask, removeTask } from '../../store/tasksSlice';
import { Card, CardContent, Typography, Checkbox, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

interface TaskItemProps {
    task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    const dispatch = useDispatch();

    const handleToggleCompletion = () => {
        dispatch(completeTask(task.id!, !task.completed));
    };

    const handleDelete = () => {
        dispatch(removeTask(task.id!));
    };

    return (
        <Card sx={{ marginBottom: 2 }}>
            <CardContent>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox checked={task.completed} onChange={handleToggleCompletion} />
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1, textDecoration: task.completed ? 'line-through' : 'none' }}
                    >
                        {task.title}
                    </Typography>
                    <IconButton onClick={handleDelete} color="error">
                        <Delete />
                    </IconButton>
                </div>
                <Typography variant="body1" sx={{ marginLeft: 4 }}>
                    {task.description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default TaskItem;