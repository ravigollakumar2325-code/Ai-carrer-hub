import { Link } from 'react-router-dom';
import { stats, applications } from '../data';
 
export default function Dashboard() {
  return (
    <>
      <div className="row g-4 mb-4">
        {stats.map((s) => (
          <div className="col-6 col-lg-3" key={s.label}>
            <div className="card card-hover h-100">
              <div className="card-body p-4">
                {/* Using Bootstrap's native subtle background classes */}
                <div className={`stat-icon bg-${s.color}-subtle text-${s.color} mb-3`}>
                  <s.icon />
                </div>
                <div className="text-muted small fw-semibold">{s.label}</div>
                <h4 className={`fw-bold mb-0 text-${s.color}`}>{s.value}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
 
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card h-100">
            <div className="card-body p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h6 className="fw-bold mb-0">Recent Applications</h6>
                <Link to="/tracker" className="small text-decoration-none fw-semibold">View all →</Link>
              </div>
              <div className="table-responsive">
                <table className="table align-middle">
                  <tbody>
                    {applications.map((a) => (
                      <tr key={a.id}>
                        <td>
                          <div className="fw-bold text-body">{a.company}</div>
                          <small className="text-muted">{a.role}</small>
                        </td>
                        <td className="text-end">
                          <span className={`badge rounded-pill bg-opacity-25 px-3 py-2 ${
                            a.status === 'Offer' ? 'bg-success text-success'
                            : a.status === 'Interview' ? 'bg-warning text-warning'
                            : 'bg-primary text-primary'
                          }`}>{a.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
 
        <div className="col-lg-4">
          <div className="card bg-gradient-brand text-white h-100 border-0 shadow-lg">
            <div className="card-body p-4">
              <h6 className="fw-bold mb-2">Quick Actions</h6>
              <p className="small opacity-75 mb-4">Jump into what matters most.</p>
              <Link to="/builder" className="btn btn-light btn-sm w-100 mb-3 fw-bold text-primary">Build Resume</Link>
              <Link to="/tools" className="btn btn-outline-light btn-sm w-100 mb-3 fw-bold">Check ATS Score</Link>
              <Link to="/jobs" className="btn btn-outline-light btn-sm w-100 fw-bold">Explore Jobs</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}