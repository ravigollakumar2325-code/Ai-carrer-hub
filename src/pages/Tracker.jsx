import { applications } from '../data';
 
export default function Tracker() {
  const badge = (s) => {
    const map = { Offer: 'success', Interview: 'warning', Applied: 'primary', Rejected: 'danger' };
    return `bg-${map[s]} bg-opacity-25 text-${map[s]}`;
  };
 
  return (
    <div className="card">
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
          <div>
            <h5 className="fw-bold mb-0">Application Tracker</h5>
            <small className="text-muted">All your job applications in one place</small>
          </div>
          <span className="badge bg-primary rounded-pill">{applications.length} applications</span>
        </div>
        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead>
              <tr className="text-muted small">
                <th>Company</th>
                <th>Role</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((a) => (
                <tr key={a.id}>
                  <td className="fw-semibold">{a.company}</td>
                  <td>{a.role}</td>
                  <td><span className={`badge rounded-pill ${badge(a.status)}`}>{a.status}</span></td>
                  <td className="small text-muted">{a.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}