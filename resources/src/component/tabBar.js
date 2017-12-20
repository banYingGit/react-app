/**
 * Created by banYing on 2017/12/20 0020.
 */
import React from 'react';
import {Route, BrowserRouter, withRouter} from 'react-router-dom'
import {TabBar} from 'antd-mobile'

import home1 from '../../src/image/icon1.png'
import home1s from '../../src/image/icon1s.png'
import home2 from '../../src/image/icon2.png'
import home2s from '../../src/image/icon2s.png'
import home3 from '../../src/image/icon3.png'
import home3s from '../../src/image/icon3s.png'

class PageTabBar extends React.Component {
    state = {
        hidden: false,
        selectedTab: this.props.selectedTab,
        icon: {
            home1s: home1s,
            home1: home1,
            home2: home2,
            home2s: home2s,
            home3: home3,
            home3s: home3s,
        }
    };

    render() {
        return (
            <div className="tab-bar-fixed">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#0061da"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="首页"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${this.state.icon.home1})center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${this.state.icon.home1s})center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'home'}
                        onPress={() => {

                            this.props.history.push("/");
                        }}

                    >

                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${this.state.icon.home2})center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${this.state.icon.home2s})center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="案例展示"
                        key="案例展示"
                        selected={this.state.selectedTab === 'case'}
                        onPress={() => {

                            this.props.history.push("/case");
                        }}

                    >

                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${this.state.icon.home3})center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${this.state.icon.home3s})center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="我们"
                        key="我们"
                        selected={this.state.selectedTab === 'user'}
                        onPress={() => {

                            this.props.history.push("/user");
                        }}

                    >

                    </TabBar.Item>


                </TabBar>
            </div>
        )
    }
}

export default withRouter(PageTabBar);