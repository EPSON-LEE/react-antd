import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
import './App.css'

const { Header, Sider, Content } = Layout;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{ height: '100vh' }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          
            <Menu.Item key="1">
              <Link to='/Home'>
                <Icon type="user" />
                <span>Home</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Link to='/About'>
                <Icon type="user" />
                <span>About</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="3">
              <Link to='/MyEditor'>
                <Icon type="user" />
                <span>MyEditor</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="4">
              <Link to='/Tree'>
                <Icon type="user" />
                <span>Tree</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="5">
              <Link to='/MotionTable'>
                <Icon type="user" />
                <span>MotionTable</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="6">
              <Link to='/Animation'>
                <Icon type="user" />
                <span>Animation</span>
              </Link>
            </Menu.Item>

            <Menu.Item key="7">
              <Link to='/List'>
                <Icon type="user" />
                <span>List</span>
              </Link>
            </Menu.Item>

          </Menu>
        </Sider>
        
        <Layout>
          <Header style={{ background: '#fff', paddingLeft: 20 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}