import { FaFileAlt, FaPaperPlane, FaCalendarCheck, FaBriefcase } from 'react-icons/fa';
 
export const userProfile = {
  name: "Ravinadh",
  role: "Software Developer",
};
 
export const aiResponses = {
  resume: "Results-driven Software Developer with 3+ years of experience building scalable web applications. Proficient in React, Node.js, and cloud technologies. Proven track record of delivering high-quality code, optimizing performance by 40%, and collaborating effectively in Agile environments.",
  cover: "Dear Hiring Manager,\n\nI am writing to express my strong interest in the Software Developer position. With a solid foundation in full-stack development and a passion for solving complex problems, I am confident in my ability to contribute immediately to your engineering team.\n\nIn my previous role, I designed and implemented RESTful APIs and responsive user interfaces, reducing load times by 30%. I thrive in collaborative environments and am always eager to learn new technologies.\n\nThank you for considering my application. I look forward to the possibility of discussing how my skills align with your needs.\n\nSincerely,\nRavinadh",
};
 
export const stats = [
  { label: 'Resume Score', value: '85%', color: 'primary', icon: FaFileAlt },
  { label: 'Applications', value: '14', color: 'success', icon: FaPaperPlane },
  { label: 'Interviews', value: '5', color: 'warning', icon: FaCalendarCheck },
  { label: 'Job Matches', value: '22', color: 'info', icon: FaBriefcase },
];
 
export const applications = [
  { id: 1, company: 'Google', role: 'Software Engineer', status: 'Interview', date: 'Nov 2' },
  { id: 2, company: 'Stripe', role: 'Frontend Developer', status: 'Applied', date: 'Nov 1' },
  { id: 3, company: 'Vercel', role: 'Full Stack Dev', status: 'Offer', date: 'Oct 28' },
];
 
export const jobs = [
  { id: 101, title: 'Senior Software Engineer', company: 'Microsoft', match: 95, location: 'Remote' },
  { id: 102, title: 'Full Stack Developer', company: 'Amazon', match: 89, location: 'Seattle' },
  { id: 103, title: 'React Developer', company: 'Meta', match: 86, location: 'Remote' },
  { id: 104, title: 'Backend Engineer', company: 'Netflix', match: 82, location: 'Los Gatos' },
];
 
export const interviewQuestions = [
  {
    q: 'Tell me about yourself and your background.',
    a: 'I am a Software Developer with 3+ years of experience specializing in React and Node.js. I started my career building web apps and have recently focused on optimizing backend performance and designing scalable architectures. I enjoy solving complex problems and working in collaborative teams.'
  },
  {
    q: 'Why are you interested in this role at our company?',
    a: 'I have always admired your company’s focus on innovation and user-centric products. My skills in React and Node.js align perfectly with the technical challenges your team is solving. I am excited about the opportunity to contribute to a platform that impacts millions of users globally.'
  },
  {
    q: 'Describe a challenging project and how you handled it.',
    a: 'In my previous role, we had a critical database bottleneck causing slow load times. I took the initiative to analyze the queries, implemented indexing, and refactored the API. This resulted in a 40% reduction in response time. I learned the importance of proactive monitoring and clear communication with the team.'
  },
  {
    q: 'How do you prioritize tasks when under pressure?',
    a: 'I use the Eisenhower Matrix to categorize tasks by urgency and importance. I communicate early with stakeholders if timelines are at risk. I focus on delivering a Minimum Viable Product (MVP) first and then iterate based on feedback, ensuring critical bugs are always addressed first.'
  },
];