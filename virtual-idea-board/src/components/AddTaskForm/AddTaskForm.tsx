import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../../store/tasksSlice';
import { TextField, Button } from '@mui/material';

interface AddTaskFormProps {
    userId: string;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ userId }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newTask = {
            title,
            description,
            completed: false,
            userId,
            createdAt: new Date().toISOString(),
            comments: [],
        };
        dispatch(createTask(newTask));
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <TextField
                label="Название задачи"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                margin="normal"
                required
            />
            <TextField
                label="Описание задачи"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                margin="normal"
                multiline
                rows={4}
            />
            <Button type="submit" variant="contained" color="primary">
                Добавить задачу
            </Button>
        </form>
    );
};

export default AddTaskForm;