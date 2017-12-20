/**
 * Created by banYing on 2017/12/19 0019.
 */
import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom'


import Home from './home'
import User from './user/user'
import Case from './case/case'


class MyRoute extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>

                    <Route path="/user" component={User}/>
                    <Route path="/case" component={Case}/>
                    <Route path="/" component={Home}/>

                </Switch>
            </BrowserRouter>
        )
    }
}
export default MyRoute;