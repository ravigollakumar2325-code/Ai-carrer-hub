import { Link } from 'react-router-dom';
import { useState } from 'react';
 
export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
 
  return (
    <div className="login-container d-flex vh-100">
      {/* Left side image */}
      <div
        className="login-image d-none d-lg-block w-50"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80")',
        }}
      >
        <div className="overlay p-5 d-flex flex-column justify-content-end h-100 text-white">
          <h1 className="fw-bold mb-3">Build Your Future.</h1>
          <p className="fs-5 opacity-75">AI-powered career tools to help you land your dream job faster.</p>
        </div>
      </div>
 
      {/* Right side form */}
      <div className="w-100 w-lg-50 d-flex align-items-center justify-content-center p-4">
        <div className="login-form-box w-100" style={{ maxWidth: '400px' }}>
          <div className="text-center mb-5">
            <h2 className="fw-bold gradient-text">AI Career Hub</h2>
            <p className="text-muted">{isLogin ? 'Welcome back! Please login.' : 'Create an account to get started.'}</p>
          </div>
 
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
              <label className="form-label small fw-semibold">Email address</label>
              <input type="email" className="form-control form-control-lg" placeholder="name@example.com" required />
            </div>
            <div className="mb-3">
              <label className="form-label small fw-semibold">Password</label>
              <input type="password" className="form-control form-control-lg" placeholder="••••••••" required />
            </div>
 
            {isLogin && (
              <div className="d-flex justify-content-between mb-4">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="remember" />
                  <label className="form-check-label small text-muted" htmlFor="remember">Remember me</label>
                </div>
                <a href="#" className="small text-decoration-none text-primary">Forgot password?</a>
              </div>
            )}
 
            <Link to="/" className="btn btn-primary w-100 btn-lg mb-4">
              {isLogin ? 'Sign In' : 'Create Account'}
            </Link>
 
            <p className="text-center small text-muted">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                className="btn btn-link p-0 text-primary text-decoration-none small fw-semibold"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}