import React from 'react';
import '../styles/Dashboard.css';

export default function DashboardCard({ title, value, description, accent }) {
  return (
    <article className={`dashboard-card ${accent || ''}`}>
      <div className="card-header">
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
      <div className="card-value">{value}</div>
    </article>
  );
}
