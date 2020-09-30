import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import RegisterEvent from './Pages/RegisterEvent';
import RegisterUser from './Pages/RegisterUser';
import Profile from './Pages/Profile';
 
function Routes() {
    return(
        <BrowserRouter> 
            <Switch>
                <Route path='/' component={Login} exact />
                <Route path='/register-event' component={RegisterEvent} />
                <Route path='/register-user' component={RegisterUser} />
                <Route path='/profile' component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;