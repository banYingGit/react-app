/**
 * Created by banYing on 2017/12/20 0020.
 */
import React, {Component} from 'react';
import {Tabs, Badge} from 'antd-mobile';

import Header from './../component/header'
import PageTabBar from './../component/tabBar'


import ma1 from '../../src/image/case/m-a-1.jpg'
import mg1 from '../../src/image/case/m-g-1.jpg'
import mg2 from '../../src/image/case/m-g-2.jpg'
import mh1 from '../../src/image/case/m-h-1.jpg'
import mv1 from '../../src/image/case/m-v-1.jpg'
import mv2 from '../../src/image/case/m-v-2.jpg'
import mw1 from '../../src/image/case/m-w-1.jpg'
import mw2 from '../../src/image/case/m-w-2.jpg'
import ph1 from '../../src/image/case/p-h-1.jpg'
import ph2 from '../../src/image/case/p-h-2.jpg'
import ph3 from '../../src/image/case/p-h-3.jpg'
import ph4 from '../../src/image/case/p-h-4.jpg'
import gj1 from '../../src/image/case/g-j-1.jpg'
import gj2 from '../../src/image/case/g-j-2.jpg'
import gj3 from '../../src/image/case/g-j-3.jpg'
import gj4 from '../../src/image/case/g-j-4.jpg'
import gl1 from '../../src/image/case/g-l-1.jpg'
import gl2 from '../../src/image/case/g-l-2.jpg'
import gl3 from '../../src/image/case/g-l-3.jpg'

class Home extends Component {
    state = {
        header: {
            title: '案例展示',
            isGoBack: false
        },
        tabs: [
            {title: '移动端案例', sub: '1'},
            {title: 'PC端案例', sub: '2'},
            {title: 'H5游戏', sub: '3'},
        ],
        mdata: [
            {src: ma1, title: 'Angularjs 4.0   Ionic 3.0'},
            {src: mv1, title: 'Vue + Iview'},
            {src: mv2, title: 'Vue + Mint ui'},
            {src: mw1, title: '微信小程序'},
            {src: mw2, title: '微信公众号'},
            {src: mg1, title: 'JavaScript游戏'},
            {src: mg2, title: 'layaboxH5引擎游戏'},
            {src: mh1, title: 'H5页面'},
        ],
        pdata: [
            {src: ph3, title: '聊城公安战略合成作战中心'},
            {src: ph1, title: 'ELLASSAY 歌力思-服装商城'},
            {src: ph2, title: '东北财经大学 国际经济贸易学院'},
            {src: ph4, title: '三寰农业网站'}
        ],
        gdata: [
            {src: gj1, title: 'javaScript-游戏  青青草原'},
            {src: gj2, title: 'javaScript-游戏  特征感知'},
            {src: gj3, title: 'javaScript-游戏  数字推测'},
            {src: gj4, title: 'javaScript-游戏  风险决策评估'},
            {src: gl1, title: 'LAYAH5引擎游戏  素材记忆'},
            {src: gl2, title: 'LAYAH5引擎游戏  目标点击'},
            {src: gl3, title: 'LAYAH5引擎游戏  元素跟踪'},
        ]

    };

    componentDidMount() {
    }

    render() {

        return (
            <div className="App">
                <Header header={this.state.header}/>
                <div className="case m-b-60">
                    <Tabs tabs={this.state.tabs}
                          initialPage={0}
                          onChange={(tab, index) => {
                              console.log('onChange', index, tab);
                          }}
                          onTabClick={(tab, index) => {
                              console.log('onTabClick', index, tab);
                          }}
                    >
                        <div className="case-list  case-m">
                            <ul>
                                {this.state.mdata.map((item) => {

                                    return <li>
                                        <img src={item.src} alt="" className="pic"/>
                                        <p>{item.title}</p>
                                    </li>
                                })}
                            </ul>
                        </div>
                        <div className="case-list  case-p">
                            <ul>
                                {this.state.pdata.map((item) => {

                                    return <li>
                                        <img src={item.src} alt="" className="pic"/>
                                        <p>{item.title}</p>
                                    </li>
                                })}
                            </ul>
                        </div>
                        <div className="case-list case-g">
                            <ul>
                                {this.state.gdata.map((item) => {

                                    return <li>
                                        <img src={item.src} alt="" className="pic"/>
                                        <p>{item.title}</p>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </Tabs>
                </div>
                <PageTabBar selectedTab={'case'}/>
            </div>
        );
    }
}

export default Home;
