import { useState } from 'react';
import { FaCheckCircle, FaEnvelope, FaQuestion } from 'react-icons/fa';
import { aiResponses, interviewQuestions } from '../data';
 
export default function Tools() {
  const [tab, setTab] = useState('ats');
  const [letter, setLetter] = useState('');
  const [loading, setLoading] = useState(false);
  const [hoverPart, setHoverPart] = useState(null); // 'score' or 'remaining'
 
  const genLetter = () => {
    setLoading(true);
    setTimeout(() => {
      setLetter(aiResponses.cover);
      setLoading(false);
    }, 1200);
  };
 
  const tabs = [
    { id: 'ats', label: 'ATS Score', icon: <FaCheckCircle /> },
    { id: 'cover', label: 'Cover Letter', icon: <FaEnvelope /> },
    { id: 'interview', label: 'Interview Prep', icon: <FaQuestion /> },
  ];
 
  const score = 82;
 
  return (
    <>
      <div className="d-flex gap-2 mb-3 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`btn btn-sm ${tab === t.id ? 'btn-primary' : 'btn-soft'}`}
            onClick={() => setTab(t.id)}
          >
            {t.icon} <span className="ms-1">{t.label}</span>
          </button>
        ))}
      </div>
 
      {tab === 'ats' && (
        <div className="card">
          <div className="card-body p-4 text-center">
            <h6 className="fw-bold mb-4">Your ATS Compatibility Score</h6>
            
            {/* Interactive ATS Ring */}
            <div
              className="ats-ring mb-3 position-relative cursor-pointer"
              style={{ background: `conic-gradient(var(--brand) 0deg ${score * 3.6}deg, #e2e8f0 ${score * 3.6}deg 360deg)` }}
            >
              <div className="ats-inner gradient-text">{score}%</div>
              
              {/* Hover zones */}
              <div
                className="position-absolute w-100 h-100 top-0 start-0"
                style={{ clipPath: 'polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%)' }} // Rough approx for left/bottom side (White part)
                onMouseEnter={() => setHoverPart('remaining')}
                onMouseLeave={() => setHoverPart(null)}
              ></div>
              <div
                className="position-absolute w-100 h-100 top-0 start-0"
                style={{ clipPath: 'polygon(50% 50%, 0 0, 50% 0)' }} // Top right part (Blue part)
                onMouseEnter={() => setHoverPart('score')}
                onMouseLeave={() => setHoverPart(null)}
              ></div>
            </div>
 
            {hoverPart === 'score' ? (
              <p className="text-primary fw-bold mb-1">Great! Your Score: {score}%</p>
            ) : hoverPart === 'remaining' ? (
              <p className="text-secondary fw-bold mb-1">Missing: {100 - score}%</p>
            ) : (
              <p className="text-muted small mb-1">Hover over the chart to see details.</p>
            )}
            
            <p className="small mb-0 mt-2"><strong>Missing keywords:</strong> Docker, CI/CD, Agile</p>
          </div>
        </div>
      )}
 
      {tab === 'cover' && (
        <div className="card">
          <div className="card-body p-4">
            <h6 className="fw-bold">AI Cover Letter</h6>
            <p className="text-muted small">Personalized cover letters in seconds.</p>
            <button className="btn btn-primary btn-sm mb-3" onClick={genLetter} disabled={loading}>
              {loading ? 'Generating...' : 'Generate Cover Letter'}
            </button>
            
            {/* Professional Cover Letter Preview */}
            {letter && (
              <div className="bg-white text-dark p-4 rounded shadow-sm border" style={{ fontFamily: 'Georgia, serif' }}>
                <div className="text-end small text-muted mb-4">Ravinadh • Software Developer</div>
                <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', fontSize: '14px' }}>{letter}</div>
              </div>
            )}
          </div>
        </div>
      )}
 
      {tab === 'interview' && (
        <div className="card">
          <div className="card-body p-4">
            <h6 className="fw-bold mb-3">Common Interview Questions</h6>
            <div className="accordion" id="qAcc">
              {interviewQuestions.map((item, i) => (
                <div className="accordion-item" key={i}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#q${i}`}
                    >
                      {item.q}
                    </button>
                  </h2>
                  <div id={`q${i}`} className="accordion-collapse collapse" data-bs-parent="#qAcc">
                    <div className="accordion-body small text-muted">
                      <strong>Suggested Answer:</strong> {item.a}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}