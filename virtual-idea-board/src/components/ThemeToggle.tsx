import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeToggle: React.FC = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    const toggleTheme = () => {
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
    };

    return (
        <IconButton onClick={toggleTheme} color="inherit">
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    );
};

export default ThemeToggle;