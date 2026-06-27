import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Login.css';

const roleRoutes = {
  hr: '/hr',
  captain: '/captain',
  intern: '/intern',
  candidate: '/candidate',
  viewer: '/viewer',
};

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const response = login(email.trim(), password.trim(), remember);

      if (!response.success) {
        setError(response.message);
        setIsSubmitting(false);
        return;
      }

      setIsSubmitting(false);
      navigate(roleRoutes[response.role] || '/login', { replace: true });
    }, 900);
  };

  return (
    <div className="login-shell">
      <div className="login-panel">
        <div className="login-brand">
          <div className="brand-icon">RD</div>
          <div>
            <h1>Recruiter Dashboard</h1>
            <p>Sign in to manage roles, interviews, and talent workflows.</p>
          </div>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="hr@example.com"
            autoComplete="email"
          />

          <label htmlFor="password">Password</label>
          <div className="password-field">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="current-password"
            />
            <button
              type="button"
              className="show-password"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember Me
            </label>
            <button type="button" className="forgot-link">
              Forgot Password?
            </button>
          </div>

          {error && <div className="form-error">{error}</div>}

          <button type="submit" className="login-button" disabled={isSubmitting}>
            {isSubmitting ? 'Signing in...' : 'Log In'}
          </button>
        </form>

        <div className="login-hint">
          Use <strong>hr@example.com</strong>, <strong>captain@example.com</strong>, <strong>intern@example.com</strong>, <strong>candidate@example.com</strong>, or <strong>viewer@example.com</strong> with password <strong>123456</strong>.
        </div>
      </div>
    </div>
  );
}
