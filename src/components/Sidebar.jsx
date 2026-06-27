import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

const menuItems = [
  { label: 'Dashboard', path: '', icon: '📊' },
  { label: 'Candidates', path: 'candidates', icon: '👥' },
  { label: 'Interviews', path: 'interviews', icon: '🗓️' },
  { label: 'Reports', path: 'reports', icon: '📈' },
  { label: 'Settings', path: 'settings', icon: '⚙️' },
];

export default function Sidebar({ role }) {
  const [collapsed, setCollapsed] = useState(false);
  const basePath = `/${role}`;

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-top">
        <div className="brand-logo">
          <div className="brand-mark">RD</div>
          <div className="brand-text">
            <p>Recruiter</p>
            <span>Dashboard</span>
          </div>
        </div>
        <button
          type="button"
          className="collapse-button"
          onClick={() => setCollapsed((prev) => !prev)}
        >
          {collapsed ? '➤' : '⬅'}
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.label}
            to={basePath}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-role">
          <span className="role-badge">{role.toUpperCase()}</span>
        </div>
      </div>
    </aside>
  );
}
