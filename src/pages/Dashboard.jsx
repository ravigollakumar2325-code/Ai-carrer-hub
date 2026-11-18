import { dashboardStats, initialApplications } from '../data';
 
export default function Dashboard() {
  return (
    <div>
      <div className="mb-4">
        <h4 className="fw-bold">Career Overview</h4>
        <p className="text-muted small">Here's what's happening with your job search.</p>
      </div>
 
      <div className="row g-4 mb-4">
        {dashboardStats.map((s, i) => (
          <div className="col-md-6 col-xl-3" key={i}>
            <div className="card card-hover p-4 h-100">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div className={`bg-${s.color} bg-opacity-10 p-2 rounded fs-5`}>{s.icon}</div>
                <span className={`badge bg-${s.color} bg-opacity-25 text-${s.color}`}>{s.subtext}</span>
              </div>
              <h6 className="text-muted small fw-bold mb-1">{s.label}</h6>
              <h3 className="fw-bold mb-0">{s.value}</h3>
            </div>
          </div>
        ))}
      </div>
 
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card p-4 h-100">
            <h6 className="fw-bold mb-4">Recent Applications</h6>
            <div className="table-responsive">
              <table className="table align-middle mb-0">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th>Date Applied</th>
                  </tr>
                </thead>
                <tbody>
                  {initialApplications.map(a => (
                    <tr key={a.id}>
                      <td className="fw-bold">{a.company}</td>
                      <td>{a.role}</td>
                      <td>
                        <span className={`badge bg-opacity-25 ${
                          a.status === 'Offer' ? 'bg-success text-success' : 
                          a.status === 'Interview' ? 'bg-warning text-warning' : 'bg-primary text-primary'
                        }`}>{a.status}</span>
                      </td>
                      <td className="text-muted small">{a.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
 
        {/* Indian Context Info */}
        <div className="col-lg-4">
          <div className="card p-4 h-100 d-flex flex-column" style={{ background: 'linear-gradient(135deg, #10b981, #059669)', color: 'white', border: 'none' }}>
            <h6 className="fw-bold mb-3">Trusted by Professionals at:</h6>
            <div className="d-flex flex-wrap gap-2 mb-4">
              <span className="badge bg-white text-dark p-2">TCS</span>
              <span className="badge bg-white text-dark p-2">Infosys</span>
              <span className="badge bg-white text-dark p-2">Wipro</span>
              <span className="badge bg-white text-dark p-2">Google</span>
              <span className="badge bg-white text-dark p-2">Amazon</span>
              <span className="badge bg-white text-dark p-2">Flipkart</span>
            </div>
            
            <div className="mt-auto border-top border-white border-opacity-25 pt-3">
              <p className="small mb-1 opacity-75">Made for India, Built for the World 🌏</p>
              <p className="small mb-0 fw-bold">HQ: Hitech City, Hyderabad, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 