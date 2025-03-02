import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Task } from '../types/Task';
import { AppThunk } from './store.ts';
import { addTask, getTasks, updateTask, deleteTask } from '../services/firebase';

interface TasksState {
    tasks: Task[];
}

const initialState: TasksState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        setTasks: (state, action: PayloadAction<Task[]>) => {
            state.tasks = action.payload;
        },
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },
        toggleTaskCompletion: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find((t) => t.id === action.payload);
            if (task) task.completed = !task.completed;
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },


    },
});

export const { setTasks, addTask, toggleTaskCompletion, deleteTask } = tasksSlice.actions;

// Thunk для загрузки задач
export const fetchTasks = (userId: string): AppThunk => async (dispatch) => {
    const tasks = await getTasks(userId);
    dispatch(setTasks(tasks));
};

// Thunk для добавления задачи
export const createTask = (task: Task): AppThunk => async (dispatch) => {
    const newTask = await addTask(task);
    dispatch(addTask(newTask));
};

// Thunk для обновления задачи
export const completeTask = (taskId: string, completed: boolean): AppThunk => async (dispatch) => {
    await updateTask(taskId, { completed });
    dispatch(toggleTaskCompletion(taskId));
};

// Thunk для удаления задачи
export const removeTask = (taskId: string): AppThunk => async (dispatch) => {
    await deleteTask(taskId);
    dispatch(deleteTask(taskId));
};

export default tasksSlice.reducer;