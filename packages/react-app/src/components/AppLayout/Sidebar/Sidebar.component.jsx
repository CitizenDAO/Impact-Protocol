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
  },
  {
    path: '/initiatives/health',
    title: '❤️ Health',
  },
  {
    path: '/initiatives/housing',
    title: '🏠 Housing',
  },
  {
    path: '/initiatives/education',
    title: '📚 Education',
  },
  {
    path: '/initiatives/climate',
    title: '🌡️ Climate',
  },
  {
    path: '/initiatives/finance',
    title: '💰 Finance',
  },
  {
    path: '/initiatives/governance',
    title: '💼 Governance',
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

      <StyledSubMenu title="👋 Community" key="community">
        <MenuItem key="discord">
          <a href="https://discord.gg/SVKqEmrnM4" target="_blank">
            Discord
          </a>
        </MenuItem>
        <MenuItem key="snapshot" target="_blank">
          <a href="https://snapshot.org/#/citizendao.eth" target="_blank">
            Snapshot
          </a>
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
