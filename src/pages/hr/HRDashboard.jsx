import React from 'react';
import Layout from '../../components/Layout';
import DashboardCard from '../../components/DashboardCard';
import '../../styles/Dashboard.css';

const activity = [
  { time: '09:00', action: 'Candidate screening completed', user: 'Ava Parker' },
  { time: '10:30', action: 'Interview scheduled', user: 'Liam Brooks' },
  { time: '11:15', action: 'Resume review added', user: 'Noah Kim' },
  { time: '14:00', action: 'Feedback requested', user: 'Mia Rivera' },
];

export default function HRDashboard() {
  return (
    <Layout>
      <section className="dashboard-section" role="application">
        <div className="dashboard-head">
          <div>
            <h2>HR Overview</h2>
            <p>View hiring progress, interview activity, and team readiness.</p>
          </div>
        </div>

        <div className="dashboard-grid">
          <DashboardCard
            title="Total Candidates"
            value="428"
            description="Active applications"
          />
          <DashboardCard
            title="Scheduled Interviews"
            value="18"
            description="This week"
          />
          <DashboardCard
            title="Completed Interviews"
            value="112"
            description="Last 30 days"
          />
          <DashboardCard
            title="Pending Reviews"
            value="27"
            description="Needs follow-up"
          />
        </div>

        <div className="dashboard-grid dashboard-columns">
          <div className="dashboard-panel">
            <div className="panel-title">Recent Activity</div>
            <div className="activity-table">
              <div className="table-head">
                <span>Time</span>
                <span>Action</span>
                <span>User</span>
              </div>
              {activity.map((entry) => (
                <div key={entry.time + entry.user} className="table-row">
                  <span>{entry.time}</span>
                  <span>{entry.action}</span>
                  <span>{entry.user}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-panel">
            <div className="panel-title">Quick Insights</div>
            <div className="insight-item">
              <h4>Candidate funnels</h4>
              <p>Stage conversion rate is steady at 62%.</p>
            </div>
            <div className="insight-item">
              <h4>Interview readiness</h4>
              <p>9 interviews need interviewer confirmation.</p>
            </div>
            <div className="insight-item">
              <h4>Team satisfaction</h4>
              <p>Feedback sessions scheduled for next Thursday.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
