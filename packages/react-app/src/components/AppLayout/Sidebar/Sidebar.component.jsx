import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarStyles } from './Sidebar.styles';

const sidebarLinks = [
  {
    path: '/',
    title: '🥇 Domains',
  },
  {
    path: '/your-bonds',
    title: '💎 Your Bonds',
    // icon: DashboardOutlined,
  },
  {
    path: '/initiatives/health',
    title: '❤️ Health',
    // icon: MedicineBoxOutlined,
  },
  {
    path: '/initiatives/housing',
    title: '🏠 Housing',
    // icon: HomeOutlined,
  },
  {
    path: '/initiatives/education',
    title: '📚 Education',
    // icon: BookOutlined,
  },
  {
    path: '/initiatives/climate',
    title: '🌡️ Climate',
    // icon: GlobalOutlined,
  },
  {
    path: '/initiatives/finance',
    title: '📈 Finance',
    // icon: BankOutlined,
  },
  // {
  //   path: '/bond',
  //   title: '🌱 Bond',
  //   // icon: BankOutlined,
  // },
];

export const Sidebar = () => {
  return (
    <SidebarStyles theme="light">
      <Menu mode="inline">
        <Link to="/" style={styles.logolink}>
          <img style={styles.logo} src="citizendao-black.png" />
        </Link>
        {sidebarLinks.map(({ path, title, icon: Icon }) => (
          <Menu.Item key={title} icon={Icon ? <Icon /> : null}>
            <Link to={path}>{title}</Link>
          </Menu.Item>
        ))}

        <Menu.SubMenu title="👋 Community">
          <Menu.Item key="discord">
            <a href="https://discord.gg/SVKqEmrnM4" target="_blank">
              Discord
            </a>
          </Menu.Item>
          <Menu.Item key="snapshot" target="_blank">
            <a to="https://snapshot.org/#/citizendao.eth">Snapshot</a>
          </Menu.Item>
          <Menu.Item key="discourse">
            <a href="https://forum.citizendao.com" target="_blank">
              Discourse
            </a>
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
    padding: '24px',
  },
  logo: {
    width: '100%',
  },
};
