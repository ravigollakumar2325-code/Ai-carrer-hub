import { interviewQuestions } from '../data';
 
export default function InterviewPrep() {
  return (
    <div className="card p-4 mx-auto" style={{ maxWidth: '800px' }}>
      <h5 className="fw-bold mb-4">Interview Preparation</h5>
      <div className="accordion" id="interviewAccordion">
        {interviewQuestions.map((item, i) => (
          <div className="accordion-item bg-transparent" key={i}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-transparent text-body shadow-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#q${i}`}
              >
                {item.q}
              </button>
            </h2>
            <div id={`q${i}`} className="accordion-collapse collapse" data-bs-parent="#interviewAccordion">
              <div className="accordion-body text-muted small">
                <strong>Suggested Answer:</strong> {item.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}