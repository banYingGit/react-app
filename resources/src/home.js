import React, {Component} from 'react';
import {Carousel, Grid} from 'antd-mobile'
import './css/home.css';

import Header from './component/header'
import PageTabBar from './component/tabBar'

import banner1 from '../src/image/1.jpg'
import banner2 from '../src/image/2.jpg'
import banner3 from '../src/image/3.jpg'
import banner4 from '../src/image/4.jpg'
import grid1 from '../src/image/grid1.png'
import grid2 from '../src/image/grid2.png'
import grid3 from '../src/image/grid3.png'

class Home extends Component {
    state = {
        data: [banner1, banner2, banner3, banner4],
        header: {
            title: '博思菲特互联科技',
            isGoBack: false
        },
        gridIcon: [{
            icon: grid1,
            title: '全站建设'
        }, {
            icon: grid2,
            title: '移动端开发'
        },
            {
                icon: grid3,
                title: 'pc端开发'
            },
            {
                icon: grid3,
                title: '游戏开发'
            }]

    };


    render() {
        var data = Array.from(this.state.gridIcon).map((_val, i) => ({
            icon: _val.icon,
            text: _val.title,
        }));
        return (
            <div className="App">
                <Header header={this.state.header}/>
                <div className="banner">
                    <Carousel autoplay={true} infinite selectedIndex={1}>
                        {this.state.data.map((item) => {

                            return <a key=''>
                                <img src={item} alt="" style={{width: '100%', verticalAlign: 'top'}}
                                     onLoad={() => {
                                         window.dispatchEvent(new Event('resize'));
                                     }}/>
                            </a>
                        })}
                    </Carousel>
                </div>
                <div className="grid-icon">
                    <Grid data={data} columnNum={4}/>
                </div>
                <PageTabBar selectedTab={'home'}/>
            </div>
        );
    }
}

export default Home;
