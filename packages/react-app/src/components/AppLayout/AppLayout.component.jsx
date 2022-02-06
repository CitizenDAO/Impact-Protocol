import { Layout } from 'antd';
import React from 'react';
import { AppLayoutStyles } from './AppLayout.styled';
import { Sidebar } from './Sidebar/Sidebar.component';

const { Content } = Layout;

export const AppLayout = ({ networkDisplay, children }) => {
  return (
    <AppLayoutStyles>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main__layout">
        <Layout style={{ margin: '0px auto' }}>
          {networkDisplay}
          <Content style={{ padding: 24 }}>
            <div>{children}</div>
          </Content>
        </Layout>
      </div>
    </AppLayoutStyles>
  );
};

const styles = {
  header: {
    'background-color': 'white',
  },
};
