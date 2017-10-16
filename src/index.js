// scr/App.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon, Badge, Row, Col, Popover, Dropdown, Avatar } from 'antd';
import './main.css';

 class App extends Component {
   state = {
      collapsed: false,
   }

   toggle = () => {
     this.setState({
       collapsed: !this.state.collapsed,
     });
   }

   render() {

      const menu = (
        <Menu>
          <Menu.Item>
            选项1
          </Menu.Item>
          <Menu.Item>
            选项2
          </Menu.Item>
          <Menu.Item>
            <a onClick={this.handleLogOut}>注销</a>
          </Menu.Item>
        </Menu>
      );

     return (
      <Layout>
         <Layout.Sider
            trigger={null}
            collapsed={this.state.collapsed}
            style={{ background: '#fff', borderRight: '1px solid #e9e9e9' }}
         >
            <Menu mode="inline" defaultSelectedKeys={['1']} style={{ borderRight: 'none' }}>
             <Menu.Item key="1">
               <Icon type="user" />
               <span>nav 1</span>
             </Menu.Item>
             <Menu.Item key="2">
               <Icon type="video-camera" />
               <span>nav 2</span>
             </Menu.Item>
             <Menu.Item key="3">
               <Icon type="upload" />
               <span>nav 3</span>
             </Menu.Item>
           </Menu>
         </Layout.Sider>
         <Layout>
         <Layout.Header style={{ background: '#fff', padding: 0 }}>

            <Row type="flex" justify="end" align="middle">
               <Col span={3} pull={15}>
               <Icon
                 className="trigger"
                 type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                 onClick={this.toggle}
               />
               </Col>
               <Col span={3}>
                  <Badge className="header-icon" count={5}>
                      <Icon type="mail" />
                  </Badge>
                  <Popover content={123} title="Title" trigger="click">
                    <Badge className="header-icon" dot>
                      <a href="#">
                        <Icon type="notification" />
                      </a>
                    </Badge>
                  </Popover>
                </Col>
                <Col span={3}>
                   <Dropdown overlay={menu}>
                   <a className="ant-dropdown-link" href="#">
                      <Avatar style={{ verticalAlign: 'middle'}}>{123}</Avatar>
                      <Icon type="down" />
                   </a>
                   </Dropdown>
                </Col>
            </Row>
          </Layout.Header>
          <Layout.Content style={{background: '#fff', minHeight: 280, padding: '12px'  }}>
            Content
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Layout.Footer>
        </Layout>

      </Layout>
     );
   }
 }


ReactDOM.render(<App />, document.getElementById('root'));
