import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css'
import { Pagination } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class SiderDemo extends React.Component {
  render() {
    return (
    <Layout>
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
      
        <div className="logo" />

        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

          <Menu.Item key="1">
            <Link className="nav-text" to="/Home">
              <Icon type="user" />
              <span className="nav-text">
                Home
              </span>
            </Link>
          </Menu.Item>

          <Menu.Item key="2">
            <Link to="/About">
              <Icon type="video-camera" />
              <span className="nav-text">
                About
              </span>
            </Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link to="/MyEditor">
              <Icon type="upload" />
              <span className="nav-text">MyEditor</span>
            </Link>
          </Menu.Item>

          <Menu.Item key="4">
            <Icon type="bar-chart" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial', height: '100vh'}}>
          <div style={{ padding: 24, background: '#fff', textAlign: 'center', height: '100vh' }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>

    </Layout>
    );
  }
}