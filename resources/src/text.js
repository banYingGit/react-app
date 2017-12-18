/**
 * Created by banYing on 2017/12/18 0018.
 */
import React from 'react';
import {Link} from 'react-router-dom'
class Text extends React.Component {
    render() {
        return (
            <div className="box">
                Text----Text
                <br/>
                <Link to="/user">GO USER跳转页面</Link>
            </div>
        )
    }
}

export default Text;
