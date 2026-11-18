import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaCheck } from 'react-icons/fa';
 
const jobsData = [
  { id: 101, title: 'Senior Software Engineer', company: 'Microsoft', match: 95, location: 'Hyderabad, India' },
  { id: 102, title: 'Full Stack Developer', company: 'Amazon', match: 89, location: 'Bengaluru, India' },
  { id: 103, title: 'React Developer', company: 'Flipkart', match: 86, location: 'Remote' },
  { id: 104, title: 'Backend Engineer', company: 'TCS', match: 82, location: 'Chennai, India' },
];
 
export default function Jobs() {
  // Load applied jobs from LocalStorage when the page opens
  const [appliedJobs, setAppliedJobs] = useState(() => {
    const saved = localStorage.getItem('appliedJobs');
    return saved ? JSON.parse(saved) : [];
  });
 
  // Save to LocalStorage whenever appliedJobs changes
  useEffect(() => {
    localStorage.setItem('appliedJobs', JSON.stringify(appliedJobs));
  }, [appliedJobs]);
 
  const handleApply = (id) => {
    if (!appliedJobs.includes(id)) {
      setAppliedJobs([...appliedJobs, id]);
    }
  };
 
  return (
    <div>
      <h4 className="fw-bold mb-4">Recommended Jobs</h4>
      <div className="row g-4">
        {jobsData.map((j) => {
          const isApplied = appliedJobs.includes(j.id);
          return (
            <div className="col-md-6" key={j.id}>
              <div className="card card-hover h-100 p-4">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <h6 className="fw-bold mb-1">{j.title}</h6>
                    <small className="text-muted">{j.company}</small>
                  </div>
                  <span className="badge bg-success bg-opacity-25 text-success">
                    {j.match}% Match
                  </span>
                </div>
                <div className="small text-muted mb-4">
                  <FaMapMarkerAlt /> {j.location}
                </div>
                <button 
                  className={`btn btn-sm w-100 mt-auto ${isApplied ? 'btn-success' : 'btn-primary'}`} 
                  onClick={() => handleApply(j.id)}
                  disabled={isApplied}
                >
                  {isApplied ? <><FaCheck className="me-2"/> Applied</> : 'Apply Now'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
 