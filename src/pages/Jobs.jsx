import { useState } from 'react';
import { FaMapMarkerAlt, FaCheck } from 'react-icons/fa';
import { jobs } from '../data';
 
export default function Jobs() {
  const [appliedJobs, setAppliedJobs] = useState([]);
 
  const handleApply = (id) => {
    if (!appliedJobs.includes(id)) {
      setAppliedJobs([...appliedJobs, id]);
    }
  };
 
  return (
    <div className="row g-3">
      {jobs.map((j) => {
        const isApplied = appliedJobs.includes(j.id);
        return (
          <div className="col-md-6 col-xl-4" key={j.id}>
            <div className="card card-hover h-100">
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <div>
                    <h6 className="fw-bold mb-1">{j.title}</h6>
                    <small className="text-muted">{j.company}</small>
                  </div>
                  <span className="badge rounded-pill bg-success bg-opacity-25 text-success">
                    {j.match}% Match
                  </span>
                </div>
                <div className="small text-muted mb-3">
                  <FaMapMarkerAlt /> {j.location}
                </div>
                <button
                  className={`btn btn-sm mt-auto ${isApplied ? 'btn-success' : 'btn-primary'}`}
                  onClick={() => handleApply(j.id)}
                  disabled={isApplied}
                >
                  {isApplied ? <><FaCheck className="me-2"/> Applied</> : 'Apply Now'}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}