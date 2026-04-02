export const personal = {
  name: 'Shreyas Peddi',
  location: 'Atlanta, GA',
  email: 'peddishreyas2@gmail.com',
  phone: '+1-470-854-0071',
  github: 'https://github.com/shreyas-peddi',
  linkedin: 'https://www.linkedin.com/in/shreyas-peddi/',
  resumePdf: '/resume_v3.pdf',
  taglines: [
    'Data Scientist',
    'Software Engineer',
    'ML Enthusiast',
    'Full-Stack Builder',
    'React Developer',
    'CS Grad @ UGA',
  ],
  about: `Hey, I'm Shreyas — a CS grad from UGA who lives at the intersection of data science and software engineering.
Currently working as a Data Scientist at Octave Holdings, where I build AI pipelines that turn dense real estate documents
into structured insights instantly. I've shipped React apps to 100K+ daily users, automated CI/CD pipelines, and done
deep research in federated learning and medical AI. I speak four languages, hold five tech certifications, and I'm always
chasing the next hard problem. Based in Atlanta and open to what's next.`,
}

export const experience = [
  {
    id: 1,
    company: 'Octave Holdings & Investments',
    role: 'Data Scientist',
    badge: '🌟 Current Role',
    period: 'Nov 2025 – Present',
    location: 'Alpharetta, GA',
    color: '#5C7A5C',
    icon: '📊',
    highlights: [
      'Building data science models and AI-driven pipelines to surface insights from complex real estate and investment data.',
      'Promoted from IT Intern after 3 months — recognizing impact delivered on AI automation and infrastructure projects.',
    ],
  },
  {
    id: 2,
    company: 'Octave Holdings & Investments',
    role: 'IT Intern',
    period: 'Aug 2025 – Nov 2025',
    location: 'Alpharetta, GA',
    color: '#6B8F71',
    icon: '🏢',
    highlights: [
      'Built AI-driven automation tools to generate detailed lease abstracts from extensive multi-document lease data.',
      'Implemented Twilio SMS MFA to secure internal services against unauthorized access.',
      'Developed a centralized call queue system — reduced phone number overhead and cut operational costs.',
    ],
  },
  {
    id: 3,
    company: 'NCR Atleos',
    role: 'Software Engineer Intern',
    period: 'May 2024 – Aug 2024',
    location: 'Atlanta, GA',
    color: '#C17B5C',
    icon: '⚙️',
    highlights: [
      'Automated Postman API testing integrated with Azure DevOps CI/CD — cut manual testing time by 400%.',
      'Generated detailed test reports and analytics using Azure DevOps, improving visibility into software quality via SONAR scans.',
      'Built a CI pipeline for Logstash with Azure DevOps, automating deployments to JFROG.',
    ],
  },
  {
    id: 4,
    company: "Byju's",
    role: 'Software Engineer',
    period: 'Jun 2022 – Mar 2023',
    location: 'Bengaluru, India',
    color: '#D4A843',
    icon: '🚀',
    highlights: [
      'Created dynamic, high-traffic React.js webpages for major campaigns — handling thousands of concurrent users with zero downtime.',
      'Built and implemented APIs for user registration that seamlessly integrated with CRM systems.',
      'Developed an internal tool to rapidly generate personalized web pages, speeding up the team\'s entire content workflow.',
    ],
  },
  {
    id: 5,
    company: 'HighRadius',
    role: 'Intern',
    period: 'Jun 2021 – May 2022',
    location: 'Remote',
    color: '#E8B4A0',
    icon: '💡',
    highlights: [
      'Built user-friendly front-end interfaces for multiple internal company applications.',
      'Designed and developed a full intern onboarding web app — end-to-end internship management from application to offboarding.',
    ],
  },
]

export const projects = [
  {
    id: 1,
    name: 'Lease Abstractor',
    tagline: 'AI that reads leases so you don\'t have to',
    description:
      'Built an agentic AI tool powered by Google Gemini that automatically extracts and structures critical data from dense commercial lease documents — rent schedules, termination clauses, renewal options, and more. Turns hours of manual review into seconds. Directly used in production at Octave Holdings.',
    tech: ['TypeScript', 'Google Gemini API', 'Node.js'],
    github: 'https://github.com/shreyas-peddi/Lease-abstractor',
    color: '#5C7A5C',
    icon: '🏠',
  },
  {
    id: 2,
    name: 'Airbnb Clone',
    tagline: 'Full-stack rental platform from scratch',
    description:
      'End-to-end property rental platform with a decoupled architecture — React frontend consuming a Spring Boot REST API backend. Supports property listings, search, and booking flows. A deep dive into full-stack system design across two very different runtimes (JVM + Node).',
    tech: ['React', 'Spring Boot', 'Java', 'Gradle', 'JavaScript'],
    github: 'https://github.com/shreyas-peddi/airbnb-clone',
    color: '#C17B5C',
    icon: '🏡',
  },
  {
    id: 3,
    name: 'Brain Tumor Classification',
    tagline: 'Deep learning for critical medical diagnosis',
    description:
      'Trained CNN models to classify brain tumor types from MRI imaging data. Explored multiple architectures to maximize diagnostic accuracy, pushing the limits of what automated medical imaging classification can achieve. Part of a broader research focus on applying deep learning to high-stakes healthcare problems.',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Jupyter'],
    github: 'https://github.com/shreyas-peddi/BT-classification',
    color: '#D4A843',
    icon: '🧬',
  },
  {
    id: 4,
    name: 'B2B Payment Predictor',
    tagline: 'ML model for smarter cash flow forecasting',
    description:
      'Predictive ML model that forecasts when a B2B payment will be received given the company, invoice amount, and purchase date. Helps finance teams plan cash flow instead of guessing. A practical application of regression and time-series ML to a real business pain point.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
    github: 'https://github.com/shreyas-peddi/b2b-payment-date-prediction',
    color: '#6B8F71',
    icon: '💳',
  },
  {
    id: 5,
    name: 'ProxyFL-Prune',
    tagline: 'Smarter federated learning through pruning',
    description:
      'Integrated structured and unstructured pruning into ProxyFL — a decentralized federated learning framework — to shrink model size and cut communication overhead without sacrificing accuracy. Validated on Fashion-MNIST while preserving differential privacy guarantees.',
    tech: ['Python', 'PyTorch', 'Opacus', 'NumPy'],
    github: 'https://github.com/shreyas-peddi/ProxyFLPrune',
    color: '#7A5C8F',
    icon: '🧠',
  },
  {
    id: 6,
    name: 'Glaucoma Detection CNNs',
    tagline: 'AI-powered eye disease detection',
    description:
      'Designed and trained deep learning models for automated glaucoma detection from X-ray images using multiple CNN architectures. Benchmarked ResNet50, DenseNet, and MobileNet — identifying the optimal architecture for real-world medical imaging tasks.',
    tech: ['TensorFlow', 'Keras', 'OpenCV', 'Python'],
    github: 'https://github.com/shreyas-peddi/Glaucoma-Detection-using-CNN',
    color: '#C17B5C',
    icon: '👁️',
  },
]

export const skills = {
  Languages: ['Python', 'JavaScript', 'Java', 'HTML', 'CSS'],
  Frameworks: ['React.js', 'Node.js', 'Express.js', 'Django', 'Next.js', 'Spring Boot'],
  'ML / DS': ['NumPy', 'Pandas', 'TensorFlow', 'Keras', 'Matplotlib'],
  Databases: ['MongoDB', 'MySQL'],
}

export const skillColors = {
  Languages: '#5C7A5C',
  Frameworks: '#C17B5C',
  'ML / DS': '#D4A843',
  Databases: '#E8B4A0',
}

export const education = [
  {
    school: 'University of Georgia',
    degree: 'MS in Computer Science',
    gpa: '3.7',
    period: 'Aug 2023 – Apr 2025',
    location: 'Athens, GA',
    color: '#5C7A5C',
  },
  {
    school: 'SRM University, AP',
    degree: 'BTech in Computer Science',
    gpa: '8.3 / 10',
    period: '2018 – 2022',
    location: 'Amaravati, India',
    color: '#C17B5C',
  },
]

export const certifications = [
  { name: 'Computer Vision Basics', issuer: 'Coursera', icon: '👁️', color: '#5C7A5C' },
  { name: 'Foundations: Data, Data, Everywhere', issuer: 'Google', icon: '📊', color: '#C17B5C' },
  { name: 'Interactive Coding: CSS, HTML & Web Dev', issuer: 'Online', icon: '💻', color: '#D4A843' },
  { name: 'Java Tutorial', issuer: 'Online', icon: '☕', color: '#6B8F71' },
  { name: 'PHP Tutorial', issuer: 'Online', icon: '🐘', color: '#E8B4A0' },
]

export const languages = [
  { lang: 'English', level: 'Professional Working', flag: '🇺🇸' },
  { lang: 'Telugu', level: 'Professional Working', flag: '🇮🇳' },
  { lang: 'Hindi', level: 'Limited Working', flag: '🇮🇳' },
  { lang: 'German', level: 'Elementary', flag: '🇩🇪' },
]

export const publication = {
  title: 'Crop Recommendation System Using Support Vector Machine Considering Indian Dataset',
  authors: 'Mishra, T.K., Mishra, S.K., Sai, K.J., Peddi, S. and Surusomayajula, M.',
  year: '2022',
  venue: 'Advances in Distributed Computing and Machine Learning',
  publisher: 'Springer, Singapore',
  pages: 'pp. 501–510',
}
