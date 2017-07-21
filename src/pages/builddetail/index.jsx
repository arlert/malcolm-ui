import Contents from './content';
import Sidebar from './sidebar';
import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


class Page extends React.Component {
    render() {
        return (<Layout>
            <Header> header </Header>
            <Layout>
                <Sider width={280} style={{ background: '#fff' }} >
                    <PageSide />
                </Sider>
                <Content style={{ padding: '0 24px', minHeight: 480 }} >
                    <PageContent />
                </Content>
            </Layout>
            <Footer> footer </Footer>
        </Layout >
        )
    }
}

export default Page;