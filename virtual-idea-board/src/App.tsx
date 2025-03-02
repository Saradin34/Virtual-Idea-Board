import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, RootState } from './store/store';
import { fetchTasks } from './store/tasksSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './services/firebase';
import TaskList from './components/TaskList/TaskList';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import Auth from './components/Auth/Auth';
import { CssBaseline, Container, AppBar, Toolbar, Typography } from '@mui/material';

const AppContent: React.FC = () => {
    const dispatch = useDispatch();
    const [user] = useAuthState(auth);
    const tasks = useSelector((state: RootState) => state.tasks.tasks);

    useEffect(() => {
        if (user) {
            dispatch(fetchTasks(user.uid));
        }
    }, [user, dispatch]);

    return (
        <>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Управление задачами
                    </Typography>
                    <Auth />
                </Toolbar>
            </AppBar>
            <Container>
                {user ? (
                    <>
                        <AddTaskForm userId={user.uid} />
                        <TaskList tasks={tasks} />
                    </>
                ) : (
                    <Typography variant="h6" align="center" sx={{ marginTop: 4 }}>
                        Войдите, чтобы начать работу.
                    </Typography>
                )}
            </Container>
        </>
    );
};

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <AppContent />
        </Provider>
    );
};

export default App;