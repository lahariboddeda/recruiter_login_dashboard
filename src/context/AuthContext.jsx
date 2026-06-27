import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { users } from '../data/users';

const AuthContext = createContext(null);

const STORAGE_KEY = 'recruiter_dashboard_user';

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setCurrentUser(JSON.parse(stored));
    }
    setLoading(false);
  }, []);

  const login = (email, password, remember) => {
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!matchedUser) {
      return { success: false, message: 'Invalid email or password.' };
    }

    const userPayload = {
      email: matchedUser.email,
      role: matchedUser.role,
      name: matchedUser.role === 'hr'
        ? 'HR Manager'
        : matchedUser.role === 'captain'
        ? 'Team Captain'
        : matchedUser.role === 'intern'
        ? 'Recruitment Intern'
        : matchedUser.role === 'candidate'
        ? 'Candidate User'
        : 'Guest Viewer',
    };

    setCurrentUser(userPayload);

    if (remember) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(userPayload));
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }

    return { success: true, role: matchedUser.role };
  };

  const logout = () => {
    setCurrentUser(null);
    window.localStorage.removeItem(STORAGE_KEY);
  };

  const isAuthenticated = useMemo(() => !!currentUser, [currentUser]);

  return (
    <AuthContext.Provider
      value={{ currentUser, loading, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
