import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useAuth } from '../context/AuthContext';
import '../styles/Global.css';

export default function Layout({ children }) {
  const { currentUser } = useAuth();

  return (
    <div className="app-shell">
      <Sidebar role={currentUser?.role || 'viewer'} />
      <div className="main-panel">
        <Navbar />
        <main className="main-content">{children}</main>
        <footer className="page-footer">
          <p>Recruiter Dashboard · Internal recruitment system · Secure role access</p>
        </footer>
      </div>
    </div>
  );
}
