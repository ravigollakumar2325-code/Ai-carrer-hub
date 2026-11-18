export const userProfile = { 
  name: "Ravinadh", 
  role: "Software Developer",
  location: "Hyderabad, India",
  email: "ravinadh@example.in"
};
 
export const dashboardStats = [
  { label: 'Resume Score', value: '85%', subtext: 'Good', color: 'primary', icon: '📄' },
  { label: 'Applications', value: '24', subtext: '5 this week', color: 'info', icon: '📤' },
  { label: 'Interviews', value: '4', subtext: '2 upcoming', color: 'warning', icon: '🎯' },
  { label: 'Job Matches', value: '18', subtext: 'In Bengaluru & Remote', color: 'success', icon: '💼' },
];
 
export const initialApplications = [
  { id: 1, company: 'Google India', role: 'Software Engineer', status: 'Interview', date: 'Nov 15, 2026' },
  { id: 2, company: 'TCS', role: 'Frontend Developer', status: 'Applied', date: 'Nov 12, 2026' },
  { id: 3, company: 'Flipkart', role: 'SDE-1', status: 'Offer', date: 'Nov 10, 2026' },
];
 
export const interviewQuestions = [
  { 
    q: 'Tell me about yourself.', 
    a: 'I am a Software Developer based in India with 3+ years of experience specializing in React and Node.js. I enjoy building scalable web applications.' 
  },
  { 
    q: 'Describe a challenging project.', 
    a: 'We had a database bottleneck causing slow load times for our Indian user base. I optimized the API queries, resulting in a 40% speed increase.' 
  },
  { 
    q: 'How do you handle pressure?', 
    a: 'I break down complex tasks into smaller, manageable parts. I prioritize critical bugs first and maintain clear communication with my team.' 
  }
];
 
export const aiResponses = {
  resume: "Results-driven Software Developer with 3+ years of experience building scalable web applications. Proficient in React, Node.js, and cloud technologies. Based in Hyderabad, India, with a strong track record of delivering global standard software.",
  cover: "Dear Hiring Manager,\n\nI am writing to express my strong interest in the Software Developer position. With my background in React and Node.js, I am confident in my ability to contribute immediately to your team...\n\nSincerely,\nRavinadh\nHyderabad, India",
};
 