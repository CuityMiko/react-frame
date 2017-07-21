/**
 * AppContainer
 */
import './App.css'
import React,{ Component } from 'react'
import logo from '../../assets/logo.svg'
import { Layout, Menu, Breadcrumb, Icon,Button } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;
import { Link } from 'react-router'

// 自定义组件
// 面包屑导航
import RFBreadcrumb from '../../components/RFBreadcrumb/'

export default class AppContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'App Container',
            navs:[ 
                { path:'/',name:'首页' },
                { path:'/movie',name:'电影' },
                { path:'/movie',name:'电影详情' }
             ]
        }
    }
    selmenu(e){
        console.log(e.target.innerHTML)
    }
    render(){
        return (
            <div className="app">
                <Layout>
                    <Header className="header">
                        <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                        >
                         <Menu.Item key="0"><img src={logo} className="app-logo" alt="logo" /></Menu.Item> 
                        <Menu.Item key="1">
                            <Link to='/'>首 页</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='/movie'>电 影</Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to='/about'>关 于</Link>
                        </Menu.Item>
                        </Menu>
                    </Header>
                    <Layout>
                         <Sider width={200} style={{ background: '#fff' }}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option2</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider> 
                        <Layout style={{ padding: '1px 1px 1px' }}>
                        {/* <Breadcrumb style={{ margin: '12px 12px' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb> */}
                        <RFBreadcrumb navs={this.state.navs}></RFBreadcrumb>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            {/* 中间内容 */}
                            { this.props.children }
                            {/* <p>
                                <Button type="primary" onClick={ (e)=>this.selmenu(e) }>点 击</Button>    
                            </p> */}
                        </Content>
                        </Layout>
                    </Layout>
                    <Footer style={{ textAlign: 'center',backgroundColor:'#404040',color:'#FFFFFF'}}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </div>
        )
    }
}