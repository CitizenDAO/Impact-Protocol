import {
  BankOutlined,
  BookOutlined,
  DashboardOutlined,
  FileTextOutlined,
  GlobalOutlined,
  HomeOutlined,
  MedicineBoxOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarStyles } from './Sidebar.styles';

const sidebarLinks = [
  {
    path: '/contracts',
    title: 'Citizen Fixed Bond',
    icon: FileTextOutlined,
  },
  {
    path: '/',
    title: 'Dashboard',
    icon: DashboardOutlined,
  },
  {
    path: '/initiatives/health',
    title: 'Health',
    icon: MedicineBoxOutlined,
  },
  {
    path: '/initiatives/housing',
    title: 'Housing',
    icon: HomeOutlined,
  },
  {
    path: '/initiatives/education',
    title: 'Education',
    icon: BookOutlined,
  },
  {
    path: '/initiatives/climate',
    title: 'Climate',
    icon: GlobalOutlined,
  },
  {
    path: '/initiatives/finance',
    title: 'Finance',
    icon: BankOutlined,
  },
  {
    path: '/bond',
    title: 'Bond',
    icon: BankOutlined,
  },
];

export const Sidebar = () => {
  return (
    <SidebarStyles>
      <Menu mode="inline" theme="dark">
        {sidebarLinks.map(({ path, title, icon: Icon }) => (
          <Menu.Item key={title} icon={<Icon />}>
            <Link to={path}>{title}</Link>
          </Menu.Item>
        ))}

        <Menu.SubMenu title="Community" icon={<TeamOutlined />}>
          <Menu.Item key="discord">
            <Link to="https://discord.gg/SVKqEmrnM4">Discord</Link>
          </Menu.Item>
          <Menu.Item key="snapshot">
            <Link to="#">Snapshot</Link>
          </Menu.Item>
          <Menu.Item key="discource">
            <Link to="https://ideas.citizendao.com">Discource</Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </SidebarStyles>
  );
};
