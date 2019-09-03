import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux'

import Login from './pages/Login'
import Main from './pages/Main'
import User from './pages/User'

export default props => (
    <Router>
        <Stack key="login">
            <Scene key="login" component={Login} title="Login" hideNavBar={true} />
            <Scene key="main" component={Main} title="Home" hideNavBar={true} />
            <Scene key="user" component={User} title="Usuario" />



        </Stack>
    </Router>
);
