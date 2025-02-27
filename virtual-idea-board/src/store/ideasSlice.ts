import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Idea } from '../types/Idea';

interface IdeasState {
    ideas: Idea[];
}

const initialState: IdeasState = {
    ideas: [],
};

const ideasSlice = createSlice({
    name: 'ideas',
    initialState,
    reducers: {
        addIdea: (state, action: PayloadAction<Idea>) => {
            state.ideas.push(action.payload);
        },
        upvoteIdea: (state, action: PayloadAction<string>) => {
            const idea = state.ideas.find((i) => i.id === action.payload);
            if (idea) idea.votes += 1;
        },
        addComment: (state, action: PayloadAction<{ id: string; comment: string }>) => {
            const idea = state.ideas.find((i) => i.id === action.payload.id);
            if (idea) idea.comments.push(action.payload.comment);
        },
    },
});

export const { addIdea, upvoteIdea, addComment } = ideasSlice.actions;
export default ideasSlice.reducer;