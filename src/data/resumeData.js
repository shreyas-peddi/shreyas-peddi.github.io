export const personal = {
  name: 'Shreyas Peddi',
  location: 'Atlanta, GA',
  email: 'peddishreyas2@gmail.com',
  phone: '+1-470-854-0071',
  github: 'https://github.com/shreyas-peddi',
  linkedin: 'https://www.linkedin.com/in/shreyas-peddi/',
  resumePdf: '/resume_v3.pdf',
  taglines: [
    'AI Engineer',
    'Software Engineer',
    'Full-Stack Developer',
    'React Developer',
    'CS Grad @ UGA',
  ],
  about: `Hey, I'm Shreyas — a CS grad from UGA building production AI systems at the intersection of large language models, software engineering, and real-world business problems. Currently leading AI transformation at Octave Holdings as an AI Engineer: I've shipped Gemini-powered tools that extract structured data from commercial leases, built RAG pipelines that let teams have natural-language conversations with their documents, and deployed internal chatbots that surface investment insights from unstructured data. Before that: shipped React apps at scale, automated CI/CD infrastructure, and published research in federated learning and medical AI. Four languages, five certifications, always chasing the hardest problem in the room. Based in Atlanta and open to what's next.`,
}

export const experience = [
  {
    id: 1,
    company: 'Octave Holdings & Investments',
    role: 'AI Engineer',
    badge: '🌟 Current Role',
    period: 'Nov 2025 – Present',
    location: 'Alpharetta, GA',
    color: '#5C7A5C',
    icon: '📊',
    highlights: [
      'Leading the company\'s AI transformation end-to-end — defining tooling strategy, selecting models, and shipping production LLM systems that directly change how the business operates.',
      'Built a Gemini-powered lease abstractor with dual capability: automated structured extraction of rent schedules, termination clauses, and renewal options from complex commercial leases, plus a RAG pipeline enabling analysts to upload documents and query them in natural language.',
      'Developed a suite of internal AI chatbots powered by Google Gemini that surface real estate and investment insights from unstructured proprietary data — cutting analyst research time from hours to minutes.',
      'Promoted from IT Intern to AI Engineer in under 3 months, recognized for the speed and production impact of shipped AI products.',
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
      'Prototyped the AI-driven lease abstraction pipeline that became the foundation of the company\'s entire production AI stack.',
      'Integrated Twilio SMS MFA across internal services, hardening authentication and eliminating unauthorized access vectors.',
      'Built a centralized call queue system that consolidated fragmented phone infrastructure, reducing telecom overhead and simplifying operations.',
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
      'Engineered automated API test suites in Postman integrated with Azure DevOps CI/CD, eliminating hundreds of hours of manual QA per release cycle.',
      'Built test analytics dashboards and SONAR quality gates in Azure DevOps, giving engineering teams real-time visibility into code coverage and release health.',
      'Designed and shipped a Logstash CI/CD pipeline with JFrog Artifactory, removing all manual deployment steps and cutting config rollout time.',
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
      'Engineered high-traffic React.js campaign pages handling 100K+ concurrent users with zero downtime — optimized for performance at scale.',
      'Designed and shipped RESTful user registration APIs integrated with CRM pipelines, powering seamless onboarding for millions of users.',
      'Built an internal page generation platform that cut content team delivery time from days to minutes — adopted across the organization.',
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
      'Developed polished frontend interfaces for multiple internal finance-tech applications used across the organization.',
      'Architected and launched a full-stack intern onboarding platform managing the end-to-end lifecycle — from application through offboarding — adopted as the company\'s standard onboarding process.',
    ],
  },
]

export const projects = [
  {
    id: 1,
    name: 'Lease Abstractor',
    tagline: 'AI that reads leases so you don\'t have to',
    description:
      'Production AI system powered by Google Gemini with two core capabilities: (1) automated structured extraction of rent schedules, termination clauses, renewal options, and CAM charges from complex commercial leases — turning hours of attorney review into seconds; (2) a RAG pipeline with conversational chat, so analysts can upload lease files and ask natural-language questions, getting cited answers directly from source documents. Used daily in production at Octave Holdings.',
    tech: ['TypeScript', 'Google Gemini API', 'Node.js', 'RAG', 'Vector Search'],
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
