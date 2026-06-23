export const personal = {
  name: 'Shreyas Peddi',
  location: 'Atlanta, GA',
  email: 'peddishreyas2@gmail.com',
  phone: '+1-470-854-0071',
  github: 'https://github.com/shreyas-peddi',
  linkedin: 'https://www.linkedin.com/in/shreyas-peddi/',
  resumePdf: '/resume_v3.pdf',
  taglines: [
    'Jr. AI Engineer',
    'Software Engineer',
    'Full-Stack Developer',
    'React Developer',
    'CS Grad @ UGA',
  ],
  about: `Hey, I'm Shreyas — a CS grad from UGA building production AI systems where LLMs meet real business problems. Currently a Jr. AI Engineer at Octave Holdings: built agentic RAG pipelines using Gemini API embeddings with a pgvector store across 10,000+ commercial lease documents — cutting deal-analysis time by 60%. Deployed the lease-intelligence microservice on GCP (Cloud Run + Cloud Storage) with sub-second semantic retrieval, and designed few-shot prompt templates for 200+ structured fields that reduced hallucination rates by 40%. Before AI engineering: shipped React apps at scale at Byju's (100K+ DAU), automated CI/CD pipelines at NCR Atleos, and published research in federated learning and medical AI. Four languages, always chasing the hardest problem in the room. Based in Atlanta.`,
}

export const experience = [
  {
    id: 1,
    company: 'Octave Holdings & Investments',
    role: 'Jr. AI Engineer',
    badge: '🌟 Current Role',
    period: 'Aug 2025 – Present',
    location: 'Alpharetta, GA',
    color: '#5C7A5C',
    icon: '📊',
    highlights: [
      'Built agentic RAG pipelines using Gemini API embeddings with a pgvector store to extract and structure data from 10,000+ CRE lease documents, cutting deal-analysis time by 60%.',
      'Deployed a production lease-intelligence microservice on GCP (Cloud Run + Cloud Storage) with sub-second semantic retrieval across 500+ embedded documents.',
      'Designed few-shot prompt templates for 200+ structured fields per lease (rent, CAM caps, escalation terms), reducing hallucination rates by 40%.',
      'Implemented Twilio SMS MFA and hardened cloud infrastructure with monitoring to maintain 99.9% uptime for internal services.',
    ],
  },
  {
    id: 2,
    company: 'NCR Atleos',
    role: 'Software Engineer Intern',
    period: 'May 2024 – Aug 2024',
    location: 'Atlanta, GA',
    color: '#C17B5C',
    icon: '⚙️',
    highlights: [
      'Automated REST API functional test suites in Postman with Azure DevOps CI/CD, cutting manual QA effort by 400%; framework adopted across 3 teams.',
      'Built Logstash CI/CD pipelines with JFrog Artifactory and SonarQube quality gates, reducing deployment errors by 50% and release time by 2 days.',
    ],
  },
  {
    id: 3,
    company: "Byju's",
    role: 'Software Engineer',
    period: 'Jun 2022 – Mar 2023',
    location: 'Bengaluru, India',
    color: '#D4A843',
    icon: '🚀',
    highlights: [
      'Developed 20+ RESTful microservice APIs in Node.js/Express.js integrated with CRM systems, reducing data-sync latency by 30%.',
      'Built 30+ marketing web pages in React.js serving 100K+ DAU with zero downtime over 9 months and 25% faster page-load times.',
    ],
  },
  {
    id: 4,
    company: 'HighRadius',
    role: 'Technology Intern',
    period: 'Jun 2021 – May 2022',
    location: 'Remote',
    color: '#E8B4A0',
    icon: '💡',
    highlights: [
      'Built internal web tooling for 5+ enterprise accounts, improving UI performance by 30% and reducing manual onboarding steps by 20%.',
    ],
  },
]

export const projects = [
  {
    id: 1,
    name: 'Lease Abstractor',
    tagline: 'Agentic RAG across 10,000+ commercial leases',
    description:
      'Production AI system built with Gemini API embeddings and a pgvector store. Extracts and structures data from 10,000+ CRE lease documents — cutting deal-analysis time by 60%. Includes few-shot prompt templates for 200+ structured fields (rent schedules, CAM caps, escalation terms) and a RAG pipeline deployed as a microservice on GCP Cloud Run with sub-second semantic retrieval. Used daily in production at Octave Holdings.',
    tech: ['TypeScript', 'Google Gemini API', 'pgvector', 'GCP Cloud Run', 'RAG', 'Node.js'],
    github: 'https://github.com/shreyas-peddi/Lease-abstractor',
    color: '#5C7A5C',
    icon: '🏠',
  },
  {
    id: 2,
    name: 'ProxyFL-Prune',
    tagline: 'Smarter federated learning through pruning',
    description:
      'Integrated structured and unstructured pruning into ProxyFL — a decentralized federated learning framework — reducing model size by 40% while preserving differential privacy guarantees. Validated on Fashion-MNIST using Opacus.',
    tech: ['Python', 'PyTorch', 'Opacus', 'Hugging Face', 'NumPy'],
    github: 'https://github.com/shreyas-peddi/ProxyFLPrune',
    color: '#7A5C8F',
    icon: '🧠',
  },
  {
    id: 3,
    name: 'Glaucoma Detection CNNs',
    tagline: 'AI-powered eye disease detection',
    description:
      'Benchmarked ResNet50, DenseNet, and MobileNet for automated glaucoma detection from retinal images using transfer learning, achieving 94%+ accuracy on medical imaging datasets. Identified the optimal architecture for real-world deployment.',
    tech: ['TensorFlow', 'Keras', 'ResNet50', 'DenseNet', 'MobileNet', 'OpenCV'],
    github: 'https://github.com/shreyas-peddi/Glaucoma-Detection-using-CNN',
    color: '#C17B5C',
    icon: '👁️',
  },
  {
    id: 4,
    name: 'Brain Tumor Classification',
    tagline: 'Deep learning for critical medical diagnosis',
    description:
      'Trained CNN models to classify brain tumor types from MRI imaging data. Explored multiple architectures to maximize diagnostic accuracy — part of a broader research focus on applying deep learning to high-stakes healthcare problems.',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Jupyter'],
    github: 'https://github.com/shreyas-peddi/BT-classification',
    color: '#D4A843',
    icon: '🧬',
  },
  {
    id: 5,
    name: 'B2B Payment Predictor',
    tagline: 'ML model for smarter cash flow forecasting',
    description:
      'Predictive ML model that forecasts when a B2B payment will be received given company, invoice amount, and purchase date — helping finance teams plan cash flow instead of guessing.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Jupyter'],
    github: 'https://github.com/shreyas-peddi/b2b-payment-date-prediction',
    color: '#6B8F71',
    icon: '💳',
  },
  {
    id: 6,
    name: 'Airbnb Clone',
    tagline: 'Full-stack rental platform from scratch',
    description:
      'End-to-end property rental platform with a decoupled architecture — React frontend consuming a Spring Boot REST API backend. Supports property listings, search, and booking flows.',
    tech: ['React', 'Spring Boot', 'Java', 'Gradle', 'JavaScript'],
    github: 'https://github.com/shreyas-peddi/airbnb-clone',
    color: '#C17B5C',
    icon: '🏡',
  },
]

export const skills = {
  Languages: ['Python', 'JavaScript', 'SQL', 'HTML/CSS'],
  'Backend & APIs': ['Node.js', 'Express.js', 'Django', 'REST APIs', 'Microservices'],
  Frontend: ['React.js', 'Next.js', 'JavaScript', 'HTML/CSS'],
  'Cloud & DevOps': ['GCP', 'Cloud Run', 'Vertex AI', 'AWS', 'Docker', 'CI/CD', 'Azure DevOps', 'JFrog Artifactory', 'Git'],
  Databases: ['PostgreSQL', 'pgvector', 'MySQL', 'SQLite', 'MongoDB'],
  'Testing & QA': ['Postman', 'Unit Testing', 'Functional Testing', 'A/B Testing', 'SonarQube'],
  'AI / ML': ['LLMs', 'RAG', 'Prompt Engineering', 'Fine-tuning', 'RLHF', 'Federated Learning', 'CNNs', 'Transformers'],
  'ML Frameworks': ['LangChain', 'PyTorch', 'TensorFlow', 'Keras', 'Hugging Face', 'Gemini API', 'Pandas', 'NumPy'],
}

export const skillColors = {
  Languages: '#5C7A5C',
  'Backend & APIs': '#C17B5C',
  Frontend: '#D4A843',
  'Cloud & DevOps': '#7A5C8F',
  Databases: '#6B8F71',
  'Testing & QA': '#E8B4A0',
  'AI / ML': '#5C6B8F',
  'ML Frameworks': '#8F6B5C',
}

export const education = [
  {
    school: 'University of Georgia',
    degree: 'MS in Computer Science',
    gpa: '3.7',
    period: 'Aug 2023 – May 2025',
    location: 'Athens, GA',
    color: '#5C7A5C',
  },
  {
    school: 'SRM University, AP',
    degree: 'BTech in Computer Science, Data Science',
    gpa: '8.3 / 10',
    period: 'Jul 2018 – May 2022',
    location: 'Amaravati, India',
    color: '#C17B5C',
  },
]

export const certifications = [
  { name: 'Computer Vision Basics', issuer: 'Coursera', icon: '👁️', color: '#5C7A5C' },
  { name: 'Foundations: Data, Data, Everywhere', issuer: 'Google', icon: '📊', color: '#C17B5C' },
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
