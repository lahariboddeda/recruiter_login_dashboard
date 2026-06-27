import React from 'react';
import Layout from '../../components/Layout';
import DashboardCard from '../../components/DashboardCard';
import '../../styles/Dashboard.css';

const queue = [
  { name: 'Avery Wilson', stage: 'Final round', score: '91%' },
  { name: 'Jordan Lee', stage: 'Technical screen', score: '84%' },
  { name: 'Taylor Nguyen', stage: 'Follow-up', score: '78%' },
];

export default function CaptainDashboard() {
  return (
    <Layout>
      <section className="dashboard-section">
        <div className="dashboard-head">
          <div>
            <h2>Captain Dashboard</h2>
            <p>Monitor key interviews, candidate scores, and feedback summaries.</p>
          </div>
        </div>

        <div className="dashboard-grid">
          <DashboardCard title="Today's Interviews" value="6" description="Active sessions" />
          <DashboardCard title="Interview Queue" value="14" description="Pending reviews" />
          <DashboardCard title="Candidate Scores" value="88%" description="Average rating" />
          <DashboardCard title="Feedback Items" value="9" description="Awaiting response" />
        </div>

        <div className="dashboard-columns dashboard-grid">
          <div className="dashboard-panel">
            <div className="panel-title">Interview Queue</div>
            {queue.map((candidate) => (
              <div key={candidate.name} className="list-entry">
                <div>
                  <strong>{candidate.name}</strong>
                  <p>{candidate.stage}</p>
                </div>
                <span className="status-chip">{candidate.score}</span>
              </div>
            ))}
          </div>

          <div className="dashboard-panel">
            <div className="panel-title">Performance Summary</div>
            <div className="insight-item">
              <h4>Interview throughput</h4>
              <p>7 hires are currently in the evaluation stage.</p>
            </div>
            <div className="insight-item">
              <h4>Team feedback</h4>
              <p>Interviewers are aligned on 83% of candidate outcomes.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
