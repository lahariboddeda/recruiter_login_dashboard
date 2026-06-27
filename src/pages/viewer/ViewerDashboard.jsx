import React from 'react';
import Layout from '../../components/Layout';
import DashboardCard from '../../components/DashboardCard';
import '../../styles/Dashboard.css';

export default function ViewerDashboard() {
  return (
    <Layout>
      <section className="dashboard-section">
        <div className="dashboard-head">
          <div>
            <h2>Viewer Analytics</h2>
            <p>Read-only recruitment metrics and candidate insights.</p>
          </div>
        </div>

        <div className="dashboard-grid">
          <DashboardCard title="Analytics" value="36 reports" description="Available summaries" />
          <DashboardCard title="Reports" value="14 updated" description="Today" />
          <DashboardCard title="Statistics" value="89%" description="Data accuracy score" />
          <DashboardCard title="Recent Candidates" value="21" description="Opened profiles" />
        </div>

        <div className="dashboard-columns dashboard-grid">
          <div className="dashboard-panel">
            <div className="panel-title">Insights</div>
            <div className="insight-item">
              <p>Viewer access is limited to read-only dashboards and analytics.</p>
            </div>
            <div className="insight-item">
              <p>Recent candidate trends are available for review only.</p>
            </div>
          </div>

          <div className="dashboard-panel">
            <div className="panel-title">Statistics</div>
            <div className="stat-block">
              <span>Open roles</span>
              <strong>13</strong>
            </div>
            <div className="stat-block">
              <span>Hiring velocity</span>
              <strong>4.8 days</strong>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
