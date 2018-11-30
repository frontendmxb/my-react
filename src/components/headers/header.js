import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
import './header.css'
const { Header } = Layout;

class Headers extends Component {
  render () {
    return (
      <Header className="header header-style">
        <div className="logo">mxb微博</div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    )
  }
}

export default Headers;