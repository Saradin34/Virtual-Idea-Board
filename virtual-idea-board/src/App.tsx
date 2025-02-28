import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import IdeaList from './components/IdeaList';
import AddIdeaForm from './components/AddIdeaForm';
import ThemeToggle from './components/ThemeToggle';
import { CssBaseline, Container, AppBar, Toolbar, Typography } from '@mui/material';
import './styles/_globals.scss';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Виртуальная доска задач
                    </Typography>
                    <ThemeToggle />
                </Toolbar>
            </AppBar>
            <Container>
                <AddIdeaForm />
                <IdeaList />
            </Container>
        </Provider>
    );
};

export default App;