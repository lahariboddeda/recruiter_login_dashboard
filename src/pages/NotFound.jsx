import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Global.css';

export default function NotFound() {
  return (
    <div className="notfound-shell">
      <div className="notfound-card">
        <h1>404</h1>
        <p>The page you are looking for was not found.</p>
        <Link to="/login" className="primary-button">
          Return to Login
        </Link>
      </div>
    </div>
  );
}
