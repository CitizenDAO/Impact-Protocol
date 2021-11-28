import {
  BankOutlined,
  BookOutlined,
  DashboardOutlined,
  FileTextOutlined,
  GlobalOutlined,
  HomeOutlined,
  MedicineBoxOutlined,
  TeamOutlined
} from '@ant-design/icons';
import { Divider, Menu } from 'antd';
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
    path: '/your-bonds',
    title: 'Your Bonds',
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
    <SidebarStyles theme="light">
      <Menu mode="inline">
        <Link to="/" style={styles.logolink}>
          <img style={styles.logo} src="citizendao-black.png" />
        </Link>
        <Divider />
        {sidebarLinks.map(({ path, title, icon: Icon }) => (
          <Menu.Item key={title} icon={<Icon />}>
            <Link to={path}>{title}</Link>
          </Menu.Item>
        ))}

        <Menu.SubMenu title="Community" icon={<TeamOutlined />}>
          <Menu.Item key="discord">
            <a href="https://discord.gg/SVKqEmrnM4">Discord</a>
          </Menu.Item>
          <Menu.Item key="snapshot">
            <a to="#">Snapshot</a>
          </Menu.Item>
          <Menu.Item key="discourse">
            <a href="https://ideas.citizendao.com">Discourse</a>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </SidebarStyles>
  );
};

const styles = {
  logolink: {
    display: 'inline-block',
    width: '100%',
    padding: '10px 10px',
  },
  logo: {
    width: '100%',
  },
};
