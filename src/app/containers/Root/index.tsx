import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Dropdown, Button, Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { Language } from "../../components";
import { STORE_LANGUAGE } from '../../constants';
import Logo from '../Logo';
import * as style from './style.css';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

@inject(STORE_LANGUAGE)
@observer
export class Root extends React.Component<any, any> {
  renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default;
      return <DevTools />;
    }
  }
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  render() {
    const {language} = this.props;
    const menu = (
        <Menu>
          <Menu.Item 
            className={
              language.currentLanguage === "en" ? "element current" : "element"
            }
            onClick={() => language.changeLanguageTo("en")}    
          >
            English
          </Menu.Item>  

          <Menu.Item
            className={
              language.currentLanguage === "es" ? "element current" : "element"
            }
            onClick={() => language.changeLanguageTo("es")}    
          >
            Espanol
          </Menu.Item>  
        </Menu>            
      );

    return (
      <Layout id="app" style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          width={300}
        >
          <Logo />
         
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">

            <Menu.Item key="1">
              <Link to="/" className="nav-text">
                <Icon type="desktop" />
                <Language resource="MENU.DASHBOARD" />
              </Link>
            </Menu.Item>

            <SubMenu
              key="sub0"
              title={<span><Icon type="swap" /><span> <Language resource="MENU.LOAN" /> </span></span>}
            >
              <Menu.Item key="2"><Link to="/exchange" className="nav-text"><Language resource="MENU.REQUEST" /></Link></Menu.Item>
              <Menu.Item key="3"><Link to="/exchange" className="nav-text"><Language resource="MENU.LEND" /></Link></Menu.Item>
            </SubMenu>

            </Menu>

          </Sider>
          <Layout>
          <Header className={style.header}>
            <Dropdown overlay={menu}>
              <Button shape="circle" icon="global"></Button>
            </Dropdown>          
          </Header>
            <Content style={{ margin: '0 16px' }}>
              {this.props.children}
              {this.renderDevTool()}          
            </Content>
            <Footer className={style.footer}>
              <Link to="/terms">Terms</Link>
              <Link to="/policy">Privacy Policy</Link>
              <Link to="/feedback">Feedback</Link>
            </Footer>            
          </Layout>
      </Layout>
    );
  }
}
