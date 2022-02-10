import { Menu } from 'antd';
import styled from 'styled-components';

const { Item, SubMenu } = Menu;

export const MenuItem = styled(Item)`
  font-size: 18px;
  &:hover {
    font-weight: 700;
  }
`;

export const StyledSubMenu = styled(SubMenu)`
  font-size: 18px;

  .ant-menu-submenu-title:hover {
    font-weight: 700;
  }
`;

export const StyledMenu = styled(Menu)`
  padding-top: 24px;
  height: 100%;
`;
