# Recruiter Dashboard

A responsive React + Vite dashboard for internal recruitment workflows. This project uses React 19 with React Router DOM and plain CSS for a polished recruiter experience.

## Features

- Mock authentication with role-based login
- Persistent user session using `localStorage`
- Protected routes for HR, Captain, Intern, Candidate, and Viewer roles
- Responsive sidebar, navbar, and dashboard layout
- Modern HR UI with cards, tables, and status panels

## Installation

```bash
npm install
npm run dev
```

Open the provided local URL in your browser.

## Demo Credentials

- hr@example.com / 123456
- captain@example.com / 123456
- intern@example.com / 123456
- candidate@example.com / 123456
- viewer@example.com / 123456

## Project Structure

- `src/`
  - `components/` reusable UI components
  - `context/` authentication provider
  - `data/` mock user dataset
  - `pages/` login and dashboard screens
  - `styles/` plain CSS styling

## Notes

The app is ready for demonstration and runs without a backend. Authentication is mocked in the browser.
