import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem, StyledMenu, StyledSubMenu } from './Sidebar.styles';

const sidebarLinks = [
  {
    path: '/',
    title: '🥇 Dashboard',
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
  {
    path: '/initiatives/governance',
    title: '📈 Governance',
    // icon: BankOutlined,
  },
];

export const Sidebar = () => {
  return (
    <StyledMenu mode="inline">
      {sidebarLinks.map(({ path, title, icon: Icon }) => (
        <MenuItem key={title} icon={Icon ? <Icon /> : null}>
          <Link to={path}>{title}</Link>
        </MenuItem>
      ))}

      <StyledSubMenu title="👋 Community">
        <MenuItem key="discord">
          <a href="https://discord.gg/SVKqEmrnM4" target="_blank">
            Discord
          </a>
        </MenuItem>
        <MenuItem key="snapshot" target="_blank">
          <a to="https://snapshot.org/#/citizendao.eth">Snapshot</a>
        </MenuItem>
        <MenuItem key="discourse">
          <a href="https://forum.citizendao.com" target="_blank">
            Discourse
          </a>
        </MenuItem>
      </StyledSubMenu>
    </StyledMenu>
  );
};
