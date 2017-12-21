/**
 * Created by banYing on 2017/12/20 0020.
 */
import React, {Component} from 'react';

import Header from './../component/header'
import PageTabBar from './../component/tabBar'
import banner from '../../src/image/map.jpg'

class Home extends Component {
    state = {
        header: {
            title: '关于我们',
            isGoBack: false
        },
        bannerSrc: banner

    };

    componentDidMount() {
    }

    render() {

        return (
            <div className="App">
                <Header header={this.state.header}/>

                <div className="user-box">
                    <img src={this.state.bannerSrc} alt=""/>
                    <ul>
                        <li>公司地址：东北财经大学网络信息管理中心209室</li>
                        <li>联系电话：0411-84710133</li>
                        <li>联系人：李经理</li>
                    </ul>
                </div>

                <PageTabBar selectedTab={'user'}/>
            </div>
        );
    }
}

export default Home;
