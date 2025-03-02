import React from 'react';
import { signInWithGoogle, logout } from '../../services/firebase.ts';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase.ts';
import { Button, Typography } from '@mui/material';

const Auth: React.FC = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            {user ? (
                <>
                    <Typography variant="h6">Привет, {user.displayName}!</Typography>
                    <Button onClick={logout} variant="contained" color="secondary">
                        Выйти
                    </Button>
                </>
            ) : (
                <Button onClick={signInWithGoogle} variant="contained" color="primary">
                    Войти через Google
                </Button>
            )}
        </div>
    );
};

export default Auth;