import React, { Component } from 'react';
// import Button from 'antd/lib/button';
import { Layout, Icon } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

import Info from './pages/myself-info/myself-info'
import Enjoy from './pages/enjoy/enjoy'
import LeftMenu from './components/menu/menu'
import Headers from './components/headers/header'

const { Header, Content } = Layout;
class App extends Component {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }
  render() {
    return (
      <Router>
        <Layout>
          <Headers />
          <Layout>
            <LeftMenu collapsed={this.state.collapsed} />
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Header>
              <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                Content
                <div>
                  <ul>
                    <li><Link to="/">个人信息</Link></li>
                    <li><Link to="/about/">爱好</Link></li>
                  </ul>
                </div>
                <Route path="/" exact component={Info}/>
                <Route path="/about/" component={Enjoy}/>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    )
  }
}

export default App;
