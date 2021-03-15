import React from 'react';
import { Route, Switch } from 'react-router';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import MusicListPage from '../pages/MusicListPage/MusicListPage';
import AddMusicPage from '../pages/AddMusicPage/AddMusicPage';

const Router = () => {
    return (
        <Switch>

            <Route exact path='/login'>
                <LoginPage />
            </Route>

            <Route exact path= '/Signup'>
                <SignUpPage />
            </Route>

            <Route exact path='/'>
                <MusicListPage />
            </Route>

            <Route exact path='/Adicionar-musica'>
                <AddMusicPage />
            </Route>
        </Switch>
    )
}