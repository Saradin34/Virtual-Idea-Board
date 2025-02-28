import React, { useState } from 'react';
import { Idea } from '../types/Idea';
import { useDispatch } from 'react-redux';
import { upvoteIdea, addComment, deleteIdea } from '../store/ideasSlice';
import { Card, CardContent, Typography, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { ThumbUp, Comment, Delete } from '@mui/icons-material';
import styles from '../styles/IdeaItem.module.scss';

interface IdeaItemProps {
    idea: Idea;
}

const IdeaItem: React.FC<IdeaItemProps> = ({ idea }) => {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('');
    const [open, setOpen] = useState(false);

    const handleCommentSubmit = () => {
        if (comment.trim()) {
            dispatch(addComment({ id: idea.id, comment: comment.trim() }));
            setComment('');
            setOpen(false);
        }
    };

    const handleDeleteIdea = () => {
        dispatch(deleteIdea(idea.id));
    };

    return (
        <Card className={styles.card}>
            <CardContent>
                <Typography variant="h6" className={styles.title}>
                    {idea.title}
                </Typography>
                <Typography variant="body1" className={styles.description}>
                    {idea.description}
                </Typography>
                <div className={styles.actions}>
                    <IconButton onClick={() => dispatch(upvoteIdea(idea.id))} className={styles.upvoteButton}>
                        <ThumbUp />
                        <span>{idea.votes}</span>
                    </IconButton>
                    <IconButton onClick={() => setOpen(true)} className={styles.commentButton}>
                        <Comment />
                    </IconButton>
                    <IconButton onClick={handleDeleteIdea} className={styles.deleteButton}>
                        <Delete />
                    </IconButton>
                </div>
                {idea.comments.length > 0 && (
                    <div className={styles.commentsSection}>
                        <Typography variant="subtitle2" className={styles.commentsTitle}>
                            Комментарии:
                        </Typography>
                        <ul className={styles.commentsList}>
                            {idea.comments.map((comment, index) => (
                                <li key={index} className={styles.commentItem}>
                                    {comment}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </CardContent>

            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle>Добавить комментарий</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Комментарий"
                        fullWidth
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Отмена</Button>
                    <Button onClick={handleCommentSubmit} color="primary">
                        Отправить
                    </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
};

export default IdeaItem;