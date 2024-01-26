import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
const items = [
    {
        label: "Home",
        key: "/"
    },
    {
        label: "About",
        key: "/about"
    },
    {
        label: "Login",
        key: "/login"
    },
    {
        label: "Signup",
        key: "/signup"
    }
]
const Navbar = () => {
    
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


    const navigate = useNavigate();
    const locationRef = window.location.pathname;



    return (
        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    onClick={
                        (data) => { navigate(data.key) }
                    }
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
            </Header>
            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                {/* <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}

                    items={[
                        {
                            title: locationRef,
                        }
                    ]}
                /> */}
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {locationRef == "/" ? "HOME" : `HOME${locationRef.toUpperCase()}`}
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
};
export default Navbar;