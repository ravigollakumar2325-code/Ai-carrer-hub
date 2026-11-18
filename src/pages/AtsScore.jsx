export default function AtsScore() {
  return (
    <div className="card p-5 text-center mx-auto" style={{ maxWidth: '600px' }}>
      <h5 className="fw-bold mb-4">ATS Compatibility Score</h5>
      <div className="mx-auto rounded-circle d-flex align-items-center justify-content-center mb-4"
           style={{width:'150px', height:'150px', border:'10px solid #10b981', fontSize:'2.5rem', fontWeight:'bold', color: '#10b981'}}>
        85%
      </div>
      <p className="text-muted">Your resume is highly optimized for ATS systems.</p>
    </div>
  );
}