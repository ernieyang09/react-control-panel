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
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
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
