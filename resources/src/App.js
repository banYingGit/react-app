import React, {Component} from 'react';
// import {render} from 'react-dom'
import {Link,NavLink} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
// import MyRoute from 'routes/MyRoute'
// import LoginContainer from 'containers/LoginContainer';


class App extends Component {
    render() {
        return (
            <div>
                <Link to="/login">跳转页面login</Link>
                <br/>
                <Link to="/text">跳转页面Text</Link>
            </div>
        );
    }
}
export default App;
