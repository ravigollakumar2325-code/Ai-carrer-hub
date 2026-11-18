import { useState } from 'react';
import { aiResponses } from '../data';
import { FaDownload } from 'react-icons/fa';
 
export default function ResumeBuilder() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
 
  const generate = () => {
    setLoading(true);
    setTimeout(() => { setText(aiResponses.resume); setLoading(false); }, 1000);
  };
 
  return (
    <div className="card p-4 mx-auto" style={{ maxWidth: '800px' }}>
      <h5 className="fw-bold mb-4">AI Resume Builder</h5>
      <textarea className="form-control mb-3 bg-transparent" rows="6" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Click generate to write your summary..."></textarea>
      
      <div className="d-flex gap-2">
        <button className="btn btn-primary w-auto" onClick={generate} disabled={loading}>
          {loading ? 'Generating...' : 'Generate with AI'}
        </button>
        <button className="btn btn-outline-success w-auto" onClick={() => window.print()}>
          <FaDownload className="me-2" /> Download PDF
        </button>
      </div>
    </div>
  );
}
 