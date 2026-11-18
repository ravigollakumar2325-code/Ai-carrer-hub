import { userProfile } from '../data';
import { FaEnvelope, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
 
export default function Profile() {
  return (
    <div className="card mx-auto border-0 shadow-sm" style={{ maxWidth: '800px', overflow: 'hidden' }}>
      <div style={{ height: '150px', background: 'linear-gradient(135deg, #10b981, #059669)' }}></div>
      
      <div className="card-body p-4 position-relative">
        <div className="bg-white text-success rounded-circle d-flex align-items-center justify-content-center fw-bold shadow position-absolute"
             style={{ width: '100px', height: '100px', fontSize: '2.5rem', top: '-50px', border: '4px solid #1e293b' }}>
          {userProfile.name.charAt(0)}
        </div>
        
        <div className="mt-5 pt-2">
          <h4 className="fw-bold mb-1">{userProfile.name}</h4>
          <p className="text-muted mb-3">{userProfile.role}</p>
          
          <div className="d-flex flex-wrap gap-4 mb-4 text-muted small">
            <span><FaEnvelope className="me-2"/> {userProfile.email}</span>
            <span><FaMapMarkerAlt className="me-2"/> {userProfile.location}</span>
            <span><FaBriefcase className="me-2"/> Available for work</span>
          </div>
 
          <button className="btn btn-outline-success btn-sm">Edit Profile</button>
        </div>
      </div>
    </div>
  );
}