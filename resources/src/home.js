import React, {Component} from 'react';
import {Carousel, Grid, List} from 'antd-mobile'
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

import service1 from '../src/image/timg1.jpg'
import service2 from '../src/image/timg2.jpg'
import service3 from '../src/image/timg3.jpg'
import service4 from '../src/image/timg4.jpg'
import service5 from '../src/image/timg5.jpg'

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
            }],
        service: [
            {src: service1, title: "VUE构建网站", detail: 'vue是一套构建用户界面的渐进式框架。只关注视图层，采用自底向上增量开发的设计。'},
            {
                src: service2,
                title: "Angularjs 4.0 + Ionic 3.0",
                detail: ' AngularJS最适于客户端的单页面应用，不是功能库，是用来开发动态网页的框架，专注于扩张HTML的功能，提供动态数据绑定。'
            },
            {src: service3, title: "React 构建网站", detail: 'React是一个用于构建用户界面的JAVASCRIPT库，用于构建UI，性能较高，代码逻辑简单。'},
            {src: service4, title: "H5游戏开发", detail: 'H5开发游戏兼容各类终端设备，通过游戏品牌植入，线上商城转化，促销销售转化。'},
            {src: service5, title: "微信公众号/企业号/小程序开发", detail: '挖掘移动互联市场、获取精准客户的关键手段，通过互动功能，可有效促进客户粘度。'}
        ]

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
                <div className="m-b-60">
                    <div className="panel">
                        <div className="title">服务宗旨</div>
                        <div className="content"><p>
                            为客户提供“专业、先进、稳定”的前端服务，实现与客户共赢的可持续发展关系！以高品质的服务，稳健的技术，向用户提供丰富可靠的前端产品服务。我们持续关注大前端技术发展趋势，积极探索新用户的需求，不断的为用户提供有竞争力的解决方案。</p>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="title">服务内容</div>
                        <ul className="service">
                            {this.state.service.map((item) => {
                                return <li>
                                    <img className="pic" src={item.src} alt=""/>
                                    <p className="service-title">{item.title}</p>
                                    <p className="service-detail">{item.detail}</p>
                                </li>
                            })}


                        </ul>
                    </div>
                </div>
                <PageTabBar selectedTab={'home'}/>
            </div>
        );
    }
}

export default Home;
