import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import IdeaItem from './IdeaItem';
import { TextField, Pagination, Box, Typography } from '@mui/material';
import styles from '../styles/IdeaList.module.scss';

const IdeaList: React.FC = () => {
    const ideas = useSelector((state: RootState) => state.ideas.ideas);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;

    const filteredIdeas = ideas.filter((idea) =>
        idea.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const paginatedIdeas = filteredIdeas.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    return (
        <Box className={styles.container}>
            <TextField
                label="Поиск задачи"
                variant="outlined"
                fullWidth
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.search}
            />
            {paginatedIdeas.length > 0 ? (
                paginatedIdeas.map((idea) => <IdeaItem key={idea.id} idea={idea} />)
            ) : (
                <Typography variant="body1" className={styles.noIdeas}>
                    задача не найдена.
                </Typography>
            )}
            <Pagination
                count={Math.ceil(filteredIdeas.length / itemsPerPage)}
                page={page}
                onChange={(_, value) => setPage(value)}
                className={styles.pagination}
            />
        </Box>
    );
};

export default IdeaList;