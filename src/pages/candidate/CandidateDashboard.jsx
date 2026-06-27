import React from 'react';
import Layout from '../../components/Layout';
import DashboardCard from '../../components/DashboardCard';
import '../../styles/Dashboard.css';

export default function CandidateDashboard() {
  return (
    <Layout>
      <section className="dashboard-section">
        <div className="dashboard-head">
          <div>
            <h2>Candidate Portal</h2>
            <p>Track your application progress and interview schedule.</p>
          </div>
        </div>

        <div className="dashboard-grid">
          <DashboardCard title="Application Status" value="Under Review" description="Recruitment team reviewing" />
          <DashboardCard title="Interview Schedule" value="2 events" description="Confirmed sessions" />
          <DashboardCard title="Interview Result" value="Pending" description="Awaiting feedback" />
          <DashboardCard title="Documents" value="4 uploaded" description="Profile materials" />
        </div>

        <div className="dashboard-grid dashboard-columns">
          <div className="dashboard-panel">
            <div className="panel-title">Profile Overview</div>
            <div className="profile-row">
              <span>Role applied</span>
              <strong>Product Analyst</strong>
            </div>
            <div className="profile-row">
              <span>Application date</span>
              <strong>June 2, 2026</strong>
            </div>
            <div className="profile-row">
              <span>Next update</span>
              <strong>Friday</strong>
            </div>
          </div>

          <div className="dashboard-panel">
            <div className="panel-title">Interview Schedule</div>
            <div className="schedule-item">
              <strong>Technical Interview</strong>
              <span>Thursday, 3:00 PM</span>
            </div>
            <div className="schedule-item">
              <strong>Hiring Panel</strong>
              <span>Friday, 11:00 AM</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
