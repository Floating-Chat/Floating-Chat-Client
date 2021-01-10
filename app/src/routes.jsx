import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Chat from './pages/chat';
import Login from './pages/login';

const Router = () => {
    return <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Login/>
            </Route>
            <Route path="/chat">
                <Chat/>
            </Route>
        </Switch>
    </BrowserRouter>
}

export default Router;
