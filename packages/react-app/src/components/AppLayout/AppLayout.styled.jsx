import { Layout } from 'antd';
import styled from 'styled-components';

const { Content, Header } = Layout;

export const StyledAppLayout = styled(Layout)`
  background-color: white;
`;

export const StyledContent = styled(Content)`
  padding: 24px;
`;

export const StyledHeader = styled(Header)`
  background-color: white;
  border-bottom: 1px solid #e5e5e5;
  padding: 0;
`;
