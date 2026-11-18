import { initialApplications } from '../data';
 
export default function Tracker() {
  return (
    <div className="card p-4">
      <h5 className="fw-bold mb-4">Application Tracker</h5>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead><tr><th>Company</th><th>Role</th><th>Status</th></tr></thead>
          <tbody>
            {initialApplications.map(a => (
              <tr key={a.id}>
                <td className="fw-bold">{a.company}</td><td>{a.role}</td>
                <td><span className="badge bg-primary bg-opacity-25 text-primary">{a.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
 