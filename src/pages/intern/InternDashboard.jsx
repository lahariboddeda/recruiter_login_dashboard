import React from 'react';
import Layout from '../../components/Layout';
import DashboardCard from '../../components/DashboardCard';
import '../../styles/Dashboard.css';

const resources = [
  'Review interview techniques',
  'Complete candidate assessment template',
  'Attend panel debrief session',
];

export default function InternDashboard() {
  return (
    <Layout>
      <section className="dashboard-section">
        <div className="dashboard-head">
          <div>
            <h2>Intern Workspace</h2>
            <p>Track tasks, learning resources, and upcoming recruitment activities.</p>
          </div>
        </div>

        <div className="dashboard-grid">
          <DashboardCard title="Assigned Tasks" value="8" description="Open tasks" />
          <DashboardCard title="Learning Materials" value="12" description="Modules available" />
          <DashboardCard title="Upcoming Interviews" value="3" description="Next 2 days" />
          <DashboardCard title="Task Progress" value="72%" description="Milestone completion" />
        </div>

        <div className="dashboard-columns dashboard-grid">
          <div className="dashboard-panel">
            <div className="panel-title">Learning Materials</div>
            <ul className="resource-list">
              {resources.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="dashboard-panel">
            <div className="panel-title">Announcements</div>
            <div className="insight-item">
              <p>New interview guidelines added to the training library.</p>
            </div>
            <div className="insight-item">
              <p>Mentor check-in scheduled for Friday afternoon.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
