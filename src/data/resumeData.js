export const personal = {
  name: 'Shreyas Peddi',
  location: 'Atlanta, GA',
  email: 'peddishreyas2@gmail.com',
  phone: '+1-470-854-0071',
  github: 'https://github.com/shreyas-peddi',
  linkedin: 'https://www.linkedin.com/in/shreyas-peddi/',
  resumePdf: '/resume-page/resume_v3.pdf',
  taglines: [
    'Software Engineer',
    'ML Enthusiast',
    'React Developer',
    'CS Grad @ UGA',
    'Full-Stack Builder',
  ],
  about: `Hey, I'm Shreyas — a CS grad from UGA with a knack for building software that actually scales.
I've shipped React apps to 100K+ daily users, automated CI/CD pipelines that slashed deployment errors in half,
and dug deep into federated learning and medical AI research. Whether it's designing agentic AI workflows
for real estate data or training CNNs for glaucoma detection, I love tackling problems that sit at the
intersection of engineering and impact. Currently based in Atlanta and always up for the next challenge.`,
}

export const experience = [
  {
    id: 1,
    company: 'Octave Holdings & Investments',
    role: 'IT Intern',
    period: 'Aug 2025 – Present',
    location: 'Alpharetta, GA',
    color: '#5C7A5C',
    icon: '🏢',
    highlights: [
      'Built agentic AI workflows to extract and structure critical lease data from unstructured real estate documents — enabling faster property decisions.',
      'Implemented Twilio SMS MFA and supported IT infrastructure to keep internal services secure and rock-solid.',
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
      'Automated Postman API testing with Azure DevOps CI/CD — cut manual testing time by a whopping 400%.',
      'Built CI pipelines for Logstash with JFROG and SONAR scans, slashing deployment errors by 50%.',
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
      'Built high-traffic React.js applications that kept 100K+ daily users engaged with zero downtime.',
      'Developed Node.js + Express.js backend APIs that seamlessly tied user workflows to CRM systems.',
    ],
  },
  {
    id: 4,
    company: 'HighRadius',
    role: 'Tech Intern',
    period: 'Jun 2021 – May 2022',
    location: 'Remote',
    color: '#E8B4A0',
    icon: '💡',
    highlights: [
      'Built internal web tools that improved onboarding workflows and boosted UI performance by 30%.',
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
    period: 'Aug 2023 – May 2025',
    location: 'Athens, GA',
    color: '#5C7A5C',
  },
  {
    school: 'SRM University',
    degree: 'BTech in CS (Data Science)',
    gpa: '8.3 / 10',
    period: 'Jul 2018 – May 2022',
    location: 'Amaravathi, India',
    color: '#C17B5C',
  },
]

export const publication = {
  title: 'Crop Recommendation System Using Support Vector Machine Considering Indian Dataset',
  authors: 'Mishra, T.K., Mishra, S.K., Sai, K.J., Peddi, S. and Surusomayajula, M.',
  year: '2022',
  venue: 'Advances in Distributed Computing and Machine Learning',
  publisher: 'Springer, Singapore',
  pages: 'pp. 501–510',
}
