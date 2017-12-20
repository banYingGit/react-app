/**
 * Created by banYing on 2017/12/20 0020.
 */
import React, {Component} from 'react';


import Header from './../component/header'
import PageTabBar from './../component/tabBar'


class Home extends Component {
    state = {
        header: {
            title: '案例展示',
            isGoBack: false
        }

    };

    componentDidMount() {
    }

    render() {

        return (
            <div className="App">
                <Header header={this.state.header}/>
                <div>
                    case
                </div>
                <PageTabBar  selectedTab={'case'}/>
            </div>
        );
    }
}

export default Home;
