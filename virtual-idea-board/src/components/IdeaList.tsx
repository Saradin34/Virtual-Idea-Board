import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import IdeaItem from './IdeaItem';

const IdeaList: React.FC = () => {
    const ideas = useSelector((state: RootState) => state.ideas.ideas);

    return (
        <div>
            {ideas.map((idea) => (
                <IdeaItem key={idea.id} idea={idea} />
            ))}
        </div>
    );
};

export default IdeaList;