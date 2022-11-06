import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import {  UserOutlined ,IdcardFilled,FileTextFilled} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
import routes from '../../routes'
import {useRoutes} from 'react-router-dom'

const { Header, Content, Sider } = Layout;

const go_person=()=>{
    window.location.href = '/person';
}

const go_identityproposal=()=>{
  window.location.href = '/identityproposal';
}
const go_home=()=>{
  window.location.href = '/home';
}

const go_initate=()=>{
  window.location.href = '/initate';
}

const go_table=()=>{
  window.location.href = '/table';
}

const items2 = [UserOutlined].map((icon, index) => {
  const key = String(index + 1);

  
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `当前用户`,
    children: [{
      key: '1',
      label: (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={go_person}>
            个人账户信息
          </a>
      ),
      icon:<IdcardFilled />
    },
    {
      key: '2',
      label: (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a onClick={go_identityproposal}>    
            我的议案
        </a>
      ),
      icon:<FileTextFilled />
    },
    ]
  };
});

export default function MenuApp() {
   //const element= useRoutes(routes)
   
   return (
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" items={[{
              key: '1',
              label: (
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <a onClick={go_home}>
                    主页
                  </a>
              ),
            },
            {
              key: '2',
              label: (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a onClick={go_initate}>
                    发起议案
                </a>
              ),
            },
            {
              key: '3',
              label: (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a onClick={go_table}>  
                    所有议案
                </a>
              ),
            }]} />
    </Header>
   
    <Layout className="site-layout-background">
      <Sider width={200} className="site-layout-background"
      collapsible='true'>
        <Menu
          mode="horizontal"
          theme='dark'
          // defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '200%',
            borderRight: 0,
          }}
          items={items2}
        />
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px,0',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          {/* <Breadcrumb.Item>Home</Breadcrumb.Item> */}
          
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: '20px 24px 24px 50px',
            margin: '10px 50px 26px 0',
            minHeight: 550,
          }}
        >
          {useRoutes(routes)}
        </Content>
      </Layout>
    </Layout>
  </Layout>
  )
}

