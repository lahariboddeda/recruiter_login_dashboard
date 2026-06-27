import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import HRDashboard from './pages/hr/HRDashboard';
import CaptainDashboard from './pages/captain/CaptainDashboard';
import InternDashboard from './pages/intern/InternDashboard';
import CandidateDashboard from './pages/candidate/CandidateDashboard';
import ViewerDashboard from './pages/viewer/ViewerDashboard';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/hr"
            element={
              <ProtectedRoute allowedRoles={[ 'hr' ]}>
                <HRDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/captain"
            element={
              <ProtectedRoute allowedRoles={[ 'captain' ]}>
                <CaptainDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/intern"
            element={
              <ProtectedRoute allowedRoles={[ 'intern' ]}>
                <InternDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/candidate"
            element={
              <ProtectedRoute allowedRoles={[ 'candidate' ]}>
                <CandidateDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/viewer"
            element={
              <ProtectedRoute allowedRoles={[ 'viewer' ]}>
                <ViewerDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
