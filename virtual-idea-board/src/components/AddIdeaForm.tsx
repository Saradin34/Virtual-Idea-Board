import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIdea } from '../store/ideasSlice';
import { v4 as uuidv4 } from 'uuid';
import { TextField, Button, Box, Typography } from '@mui/material';
import styles from '../styles/AddIdeaForm.module.scss';

const AddIdeaForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(
            addIdea({
                id: uuidv4(),
                title,
                description,
                votes: 0,
                createdAt: new Date().toISOString(),
                comments: [],
            })
        );
        setTitle('');
        setDescription('');
    };

    return (
        <Box className={styles.formContainer}>
            <Typography variant="h5" gutterBottom>
                Добавить новую задачу
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Название задачи"
                    variant="outlined"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    margin="normal"
                    className={styles.inputField}
                />
                <TextField
                    label="Описание задачи"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    margin="normal"
                    className={styles.inputField}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={styles.submitButton}
                >
                    Добавить задачу
                </Button>
            </form>
        </Box>
    );
};

export default AddIdeaForm;