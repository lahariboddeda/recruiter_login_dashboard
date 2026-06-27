import React from 'react';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

export default function Navbar() {
  const { currentUser, logout } = useAuth();

  return (
    <header className="top-navbar">
      <div className="navbar-left">
        <div className="page-title">Recruiter Control Center</div>
        <div className="navbar-welcome">A modern role-based recruitment dashboard.</div>
      </div>

      <div className="navbar-right">
        <button type="button" className="icon-button" aria-label="Notifications">
          🔔
        </button>
        <div className="profile-panel">
          <div className="avatar">{currentUser?.name.slice(0, 1)}</div>
          <div className="profile-details">
            <span className="profile-name">{currentUser?.name}</span>
            <span className="role-chip">{currentUser?.role.toUpperCase()}</span>
          </div>
        </div>
        <button type="button" className="logout-button" onClick={logout}>
          Logout
        </button>
      </div>
    </header>
  );
}
