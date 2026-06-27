# RecruitHub - Role-Based Recruitment Management Dashboard

A modern **React + Vite** web application that provides a **role-based recruitment management dashboard** with mock authentication, protected routes, and responsive user interfaces for different user roles.

---

## 🚀 Features

* Secure Login Page
* Mock Authentication
* Role-Based Access Control
* Protected Routes
* Responsive UI
* Modern Dashboard Design
* Reusable React Components
* Persistent Login using LocalStorage
* Separate Dashboards for Different Roles

---

## 👥 User Roles

* HR
* Captain
* Intern
* Candidate
* Viewer

Each user is redirected to their respective dashboard after successful login.

---

## 🛠️ Technologies Used

* React 19
* Vite
* React Router DOM
* JavaScript (ES6+)
* HTML5
* CSS3
* React Context API
* Browser LocalStorage

---

## 📂 Project Structure

```text
src/
│
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   ├── Layout.jsx
│   ├── DashboardCard.jsx
│   └── ProtectedRoute.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── data/
│   └── users.js
│
├── pages/
│   ├── Login.jsx
│   ├── hr/
│   ├── captain/
│   ├── intern/
│   ├── candidate/
│   └── viewer/
│
├── styles/
│
|__ index.html
├── App.jsx
└── main.jsx
```

---

## 🔐 Authentication

This project uses **Mock Authentication**.

User credentials are validated against predefined user data stored locally.

The authenticated user's session is stored in **Browser LocalStorage** to maintain login status after refreshing the page.

---

## 🔒 Protected Routes

Only authenticated users can access dashboard pages.

Unauthorized users are automatically redirected to the Login page.

---

## 📊 Dashboards

### HR Dashboard

* Total Candidates
* Scheduled Interviews
* Completed Interviews
* Pending Reviews

### Captain Dashboard

* Interview Schedule
* Candidate Scores
* Feedback Summary

### Intern Dashboard

* Assigned Tasks
* Learning Materials
* Progress Overview

### Candidate Dashboard

* Profile Information
* Interview Schedule
* Application Status

### Viewer Dashboard

* Read-only Dashboard
* Reports
* Statistics

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/lahariboddeda/recruiter_login_dashboard.git
```

Navigate to the project folder:

```bash
cd recruiter_login_dashboard
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the URL displayed in your terminal (typically `http://localhost:5173`).

---

## 🧪 Demo Credentials

| Role      | Email                                                 | Password |
| --------- | ----------------------------------------------------- | -------- |
| HR        | [hr@example.com](mailto:hr@example.com)               | 123456   |
| Captain   | [captain@example.com](mailto:captain@example.com)     | 123456   |
| Intern    | [intern@example.com](mailto:intern@example.com)       | 123456   |
| Candidate | [candidate@example.com](mailto:candidate@example.com) | 123456   |
| Viewer    | [viewer@example.com](mailto:viewer@example.com)       | 123456   |

---


## 🎯 Project Objectives

* Implement role-based authentication.
* Protect application routes.
* Create reusable React components.
* Build responsive dashboard layouts.
* Demonstrate frontend architecture using React and Vite.

---

## 🔮 Future Enhancements

* Backend Integration
* Database Connectivity
* JWT Authentication
* REST API Integration
* Real-time Notifications
* Interview Scheduling System
* Candidate Search & Filters
* Analytics Charts
* User Profile Management

---

## 📚 References

* React Documentation — https://react.dev/
* React Router Documentation — https://reactrouter.com/
* Vite Documentation — https://vitejs.dev/
* MDN Web Docs — https://developer.mozilla.org/

---


## 📄 License

This project was developed as part of an internship assignment for learning and demonstration purposes.
