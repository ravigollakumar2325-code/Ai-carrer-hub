import { useState } from 'react';
import { FaMagic, FaDownload } from 'react-icons/fa';
import { aiResponses } from '../data';
 
export default function Builder() {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
 
  const generate = () => {
    setLoading(true);
    setTimeout(() => {
      setSummary(aiResponses.resume);
      setLoading(false);
    }, 1200);
  };
 
  return (
    <div className="row g-4">
      {/* Input Form */}
      <div className="col-lg-5">
        <div className="card h-100">
          <div className="card-body p-4">
            <h5 className="fw-bold">AI Resume Builder</h5>
            <p className="text-muted small mb-4">Generate a professional summary instantly.</p>
 
            <div className="mb-3">
              <label className="form-label small fw-semibold">Full Name</label>
              <input className="form-control" defaultValue="Ravinadh" />
            </div>
            <div className="mb-3">
              <label className="form-label small fw-semibold">Target Role</label>
              <input className="form-control" defaultValue="Software Developer" />
            </div>
            <div className="mb-3">
              <label className="form-label small fw-semibold">Professional Summary</label>
              <textarea
                className="form-control mb-3"
                rows="6"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Click 'Generate with AI' below..."
              />
            </div>
 
            <div className="d-flex flex-wrap gap-2">
              <button className="btn btn-primary" onClick={generate} disabled={loading}>
                <FaMagic className="me-2" /> {loading ? 'Generating...' : 'Generate with AI'}
              </button>
            </div>
          </div>
        </div>
      </div>
 
      {/* Live Preview (Professional Look) */}
      <div className="col-lg-7">
        <div className="card h-100 bg-white text-dark border-0 shadow-sm" style={{ minHeight: '600px' }}>
          <div className="card-body p-5" style={{ fontFamily: 'Arial, sans-serif' }}>
            <div className="border-bottom pb-3 mb-3">
              <h1 className="fw-bold text-uppercase mb-1" style={{ fontSize: '28px', letterSpacing: '1px' }}>RAVINADH</h1>
              <h5 className="text-primary mb-2">Software Developer</h5>
              <div className="small text-muted">ravinadh@email.com | +91 9876543210 | linkedin.com/in/ravinadh</div>
            </div>
            
            <div className="mb-4">
              <h6 className="fw-bold text-uppercase border-bottom pb-2 mb-2" style={{ letterSpacing: '1px' }}>Professional Summary</h6>
              {summary ? (
                <p className="small" style={{ lineHeight: '1.6', textAlign: 'justify' }}>{summary}</p>
              ) : (
                <p className="small text-muted fst-italic">Your AI-generated summary will appear here...</p>
              )}
            </div>
 
            <div className="mb-4">
              <h6 className="fw-bold text-uppercase border-bottom pb-2 mb-2" style={{ letterSpacing: '1px' }}>Experience</h6>
              <div className="d-flex justify-content-between mb-1">
                <strong className="small">Software Engineer</strong>
                <span className="small text-muted">2021 - Present</span>
              </div>
              <div className="small text-muted mb-2">Tech Solutions Inc.</div>
              <ul className="small text-muted" style={{ paddingLeft: '18px' }}>
                <li>Developed responsive web apps using React and Bootstrap.</li>
                <li>Improved API response time by 30% through query optimization.</li>
              </ul>
            </div>
 
            <div className="mb-4">
              <h6 className="fw-bold text-uppercase border-bottom pb-2 mb-2" style={{ letterSpacing: '1px' }}>Education</h6>
              <div className="d-flex justify-content-between">
                <strong className="small">B.Tech in Computer Science</strong>
                <span className="small text-muted">2017 - 2021</span>
              </div>
              <div className="small text-muted">XYZ University</div>
            </div>
            
            <button className="btn btn-outline-primary btn-sm mt-3 d-print-none" onClick={() => window.print()}>
                <FaDownload className="me-2" /> Print / Save as PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}