import { Layout } from 'antd';
import styled from 'styled-components';

export const AppLayoutStyles = styled(Layout)`
  display: flex;
  align-items: stretch;
  max-height: 100vh;
  height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;

  .main__layout {
    overflow: auto;
  }
`;
