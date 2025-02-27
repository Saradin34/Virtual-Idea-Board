import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIdea } from '../store/ideasSlice';
import { v4 as uuidv4 } from 'uuid';

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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Название идеи"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Описание идеи"
                required
            />
            <button type="submit">Добавить идею</button>
        </form>
    );
};

export default AddIdeaForm;