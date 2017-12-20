/**
 * Created by banYing on 2017/12/20 0020.
 */
import React from 'react';
// import {Route, BrowserRouter,Switch} from 'react-router-dom'
import {NavBar, Icon} from 'antd-mobile'

class Header extends React.Component {
    state = {
        header: this.props.header
    };

    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={this.state.header.isGoBack ? <Icon type="left"/> : ''}
                    onLeftClick={() => console.log('onLeftClick')}
                    // rightContent={[
                    //     <Icon key="0" type="search" style={{marginRight: '16px'}}/>,
                    //     <Icon key="1" type="ellipsis"/>,
                    // ]}
                >{this.state.header.title}</NavBar>
            </div>
        )
    }
}
export default Header;