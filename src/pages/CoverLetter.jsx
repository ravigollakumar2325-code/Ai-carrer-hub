import { useState } from 'react';
import { aiResponses } from '../data';
 
export default function CoverLetter() {
  const [text, setText] = useState('');
  
  return (
    <div className="card p-4 mx-auto" style={{ maxWidth: '800px' }}>
      <h5 className="fw-bold mb-4">AI Cover Letter</h5>
      <textarea className="form-control mb-3 bg-transparent" rows="8" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Click generate..."></textarea>
      <button className="btn btn-primary w-auto align-self-start" onClick={() => setText(aiResponses.cover)}>Generate Cover Letter</button>
    </div>
  );
}