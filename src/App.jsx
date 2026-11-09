import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import {
  FaThLarge, FaFileAlt, FaTools, FaBriefcase, FaClipboardList,
  FaSun, FaMoon, FaExchangeAlt, FaSignOutAlt
} from 'react-icons/fa';
import Dashboard from './pages/Dashboard';
import Builder from './pages/Builder';
import Tools from './pages/Tools';
import Jobs from './pages/Jobs';
import Tracker from './pages/Tracker';
import Login from './pages/Login';
import { userProfile } from './data';
 
const navLinks = [
  { to: '/dashboard', label: 'Dashboard', icon: <FaThLarge /> },
  { to: '/builder', label: 'Resume Builder', icon: <FaFileAlt /> },
  { to: '/tools', label: 'AI Tools', icon: <FaTools /> },
  { to: '/jobs', label: 'Job Matches', icon: <FaBriefcase /> },
  { to: '/tracker', label: 'Tracker', icon: <FaClipboardList /> },
];
 
function Layout({ children, theme, setTheme, dir, setDir }) {
  const location = useLocation();
 
  if (location.pathname === '/login') {
    return <>{children}</>;
  }
 
  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <aside className="sidebar p-3 d-none d-md-flex flex-column shadow">
        <div className="brand mb-4 px-2 text-white">
          <span className="brand-dot" />
          <span className="fw-bold fs-5">AI Career Hub</span>
        </div>
        
        <nav className="nav flex-column gap-2">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to}
              className={({ isActive }) => `side-link ${isActive ? 'active' : ''}`}>
              <span className="fs-5">{l.icon}</span> <span>{l.label}</span>
            </NavLink>
          ))}
        </nav>
        
        <div className="mt-auto pt-4 border-top border-secondary">
            <NavLink to="/login" className="side-link text-danger fw-semibold">
               <FaSignOutAlt /> <span>Logout</span>
            </NavLink>
            <div className="small text-secondary mt-3 text-center">© 2026 Career Hub</div>
        </div>
      </aside>
 
      {/* Main Content */}
      <div className="flex-grow-1 d-flex flex-column">
        <header className="topbar d-flex justify-content-between align-items-center px-4 py-3">
          <div>
            <h5 className="mb-0 fw-bold text-body">Welcome back, {userProfile.name} 👋</h5>
            <small className="text-muted fw-medium">{userProfile.role}</small>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <button className="btn btn-soft" onClick={() => setDir(dir === 'ltr' ? 'rtl' : 'ltr')}>
              <FaExchangeAlt /> {dir.toUpperCase()}
            </button>
            <button className="btn btn-soft" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              {theme === 'light' ? <FaMoon /> : <FaSun />} {theme === 'light' ? 'Dark' : 'Light'}
            </button>
          </div>
        </header>
 
        {/* Mobile Nav */}
        <div className="mobile-nav d-md-none px-3 py-2 overflow-auto shadow-sm">
          <div className="d-flex gap-2">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to}
                className={({ isActive }) => `mobile-pill ${isActive ? 'active' : ''}`}>
                {l.icon} <span>{l.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
 
        <main className="p-3 p-md-4 flex-grow-1">
          {children}
        </main>
      </div>
    </div>
  );
}
 
export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [dir, setDir] = useState(localStorage.getItem('dir') || 'ltr');
 
  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem('theme', theme);
    localStorage.setItem('dir', dir);
  }, [theme, dir]);
 
  return (
    <BrowserRouter>
      <Layout theme={theme} setTheme={setTheme} dir={dir} setDir={setDir}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/tracker" element={<Tracker />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}