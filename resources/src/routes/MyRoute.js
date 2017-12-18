import React from 'react';
import {Route, BrowserRouter,IndexRoute} from 'react-router-dom'

import LoginForm from '../LoginContainer'
import Text from '../text'
import User from '../page/user'
import App from '../App'

class MyRoute extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>

                    <Route path="/" component={App}/>
                    <Route path="/login" component={LoginForm}/>
                    <Route path="/text" component={Text}/>
                    <Route path="/user" component={User}/>
                </div>
            </BrowserRouter>
        )
    }
}
export default MyRoute;