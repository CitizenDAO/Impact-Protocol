import { Col, Layout, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledAppLayout, StyledContent, StyledHeader } from './AppLayout.styled';
import { Sidebar } from './Sidebar/Sidebar.component';

const { Sider } = Layout;

const Logo = () => (
  <Link to="/">
    <img width="160px" src="citizendao-black.png" />
  </Link>
);

export const AppLayout = ({ children }) => {
  return (
    <StyledAppLayout>
      <StyledHeader>
        <Row justify="start" align="middle">
          <Col>
            <Logo />
          </Col>
        </Row>
      </StyledHeader>
      <Layout>
        <Sider>
          <Sidebar />
        </Sider>
        <StyledContent>
          <div>{children}</div>
        </StyledContent>
      </Layout>
    </StyledAppLayout>
  );
};
