import { Col, Image, Layout, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledAppLayout, StyledContent, StyledHeader } from './AppLayout.styled';
import { Sidebar } from './Sidebar/Sidebar.component';

const { Footer, Sider } = Layout;

const Logo = () => (
  <div>
    <Link to="/">
      <Image preview={false} width={184} src="citizendao-black.png" />
    </Link>
  </div>
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
      <Footer></Footer>
    </StyledAppLayout>
  );
};
