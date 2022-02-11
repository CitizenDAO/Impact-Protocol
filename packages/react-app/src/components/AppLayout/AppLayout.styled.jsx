import { Layout } from 'antd';
import styled from 'styled-components';

const { Content, Header, Footer, Sider } = Layout;

export const StyledAppLayout = styled(Layout)`
  background-color: white;
  min-height: 100%;
`;

export const StyledContent = styled(Content)`
  padding: 24px;
  min-height: 100%;
`;

export const StyledHeader = styled(Header)`
  background-color: white;
  border-bottom: 1px solid #e5e5e5;
  padding-left: 24px;
`;
