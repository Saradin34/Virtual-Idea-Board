import React from 'react';
import { Idea } from '../types/Idea';
import { useDispatch } from 'react-redux';
import { upvoteIdea, addComment } from '../store/ideasSlice';

interface IdeaItemProps {
    idea: Idea;
}

const IdeaItem: React.FC<IdeaItemProps> = ({ idea }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <h3>{idea.title}</h3>
            <p>{idea.description}</p>
            <button onClick={() => dispatch(upvoteIdea(idea.id))}>Upvote ({idea.votes})</button>
            <ul>
                {idea.comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    );
};

export default IdeaItem;