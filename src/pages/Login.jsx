import { Link } from 'react-router-dom';
 
export default function Login() {
  return (
    <div className="login-bg vh-100 d-flex align-items-center justify-content-center">
      <div className="login-overlay position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="card p-5 position-relative border-0" style={{ width: '400px', zIndex: 1 }}>
        <div className="text-center mb-4">
          <h3 className="fw-bold text-dark">CareerPilot</h3>
          <p className="text-muted small">India's Premier AI Career Platform</p>
        </div>
        <input type="email" className="form-control mb-3" placeholder="Email address" />
        <input type="password" className="form-control mb-4" placeholder="Password" />
        <Link to="/dashboard" className="btn btn-primary w-100 mb-3 py-2">Sign In</Link>
        <div className="d-flex justify-content-between small">
          <a href="#" className="text-decoration-none text-muted">Forgot password?</a>
          <a href="#" className="text-decoration-none fw-bold">Create account</a>
        </div>
      </div>
    </div>
  );
}
 