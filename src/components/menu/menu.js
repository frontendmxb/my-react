import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'

const { Sider } = Layout;
const { SubMenu } = Menu;

class LeftMenu extends Component {
  render () {
    return (
        <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
      >
        {/* <div className="logo" /> */}
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <span>nav 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={<span><Icon type="user" /><span>User</span></span>}
          >
            <Menu.Item key="3">
              <Link to="/">我的信息</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/about/">爱好</Link>
            </Menu.Item>
            <Menu.Item key="6">Alex</Menu.Item>
          </SubMenu>
          <Menu.Item key="4">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}
export default LeftMenu;