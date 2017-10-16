// scr/App.js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
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
     return (
      <Layout>
         <Layout.Sider
            trigger={null}
            collapsed={this.state.collapsed}
         >
            <Menu mode="inline" defaultSelectedKeys={['1']}>
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
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Layout.Header>
          <Layout.Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
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
