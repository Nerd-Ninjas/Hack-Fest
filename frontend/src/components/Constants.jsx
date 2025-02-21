import learn from '../assets/icons/learning.png'
import project from '../assets/icons/project.png'
import Ai from '../assets/icons/ai.png'
import gamified from '../assets/icons/gamified.png'
import { FaBrain, FaUsers, FaProjectDiagram } from "react-icons/fa";
import { MdAssessment, MdOutlineVideoLibrary } from "react-icons/md";
import { FaTachometerAlt, FaUser, FaChartBar, FaBookOpen, FaChalkboardTeacher } from "react-icons/fa";

export const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Courses', href: '/courses' },
    { label: 'Ninja Bot', href: '/ninja-bot' },
]

export const benefits_points = [
    { name: "Personalized Learning Path", icon: learn, con: "AI adapts courses to individual skill levels." },
    { name: "Project-Based Learning ", icon: project, con: " Hands-on projects enhance real-world problem-solving utilities." },
    { name: " Real-Time AI-Based Assessment", icon: Ai, con: " Instant feedback to track and improve performance." },
    { name: " Gamified Learning ", icon: gamified, con: "Interactive elements make education engaging and fun." }

]

export const steps_points = [
    { step: "Sign Up & Select Your Learning Goals", icon: <FaUsers /> },
    { step: "Take AI-Driven Skill Assessment", icon: <MdAssessment /> },
    { step: "Get a Personalized Learning Path & Course Recommendations", icon: <FaBrain /> },
    { step: "Engage in Gamified, Interactive Learning (Videos, VR, AI Bot)", icon: <MdOutlineVideoLibrary /> },
    { step: "Get Real-Time AI Feedback & Assessments", icon: <MdAssessment /> },
    { step: "Collaborate on Projects & Join the Learning Community", icon: <FaProjectDiagram /> }
];


export const menuItems = [
    { title: "Dashboard", icon: <FaTachometerAlt />, href: "/dashboard" },
    { title: "Profile", icon: <FaUser />, href: "/profile" },
    { title: "Report", icon: <FaChartBar />, href: "/report" },
    { title: "Learning Path", icon: <FaBookOpen />, href: "/learning-path" },
    { title: "Course", icon: <FaChalkboardTeacher />, href: "/course" },
];

export const interestsData = {
    "technology_engineering": [
        { value: "programming_languages", text: "Programming Languages", utilities: ["Python", "JavaScript", "Java", "C++", "C#", "Ruby", "Dart"] },
        { value: "cloud_platforms", text: "Cloud Platforms", utilities: ["AWS", "Azure", "Google Cloud"] },
        { value: "frontend_frameworks", text: "Frontend Frameworks", utilities: ["React", "Angular", "Vue.js"] },
        { value: "backend_frameworks", text: "Backend Frameworks", utilities: ["Node.js", "Django", "Flask"] },
        { value: "databases", text: "Databases", utilities: ["SQL", "NoSQL", "MongoDB", "PostgreSQL", "MySQL"] },
        { value: "version_control", text: "Version Control", utilities: ["Git", "GitHub", "GitLab"] },
        { value: "devops", text: "DevOps", utilities: ["Docker", "Kubernetes", "Jenkins"] },
        { value: "network_security", text: "Network & Security", utilities: ["TCP/IP", "DNS", "DHCP", "VPN", "Firewalls", "IDS/IPS"] }
    ],
    "ai": [
        { value: "machine_learning_algorithms", text: "Machine Learning Algorithms", utilities: ["Supervised Learning", "Unsupervised Learning", "Reinforcement Learning"] },
        { value: "libraries_frameworks", text: "Libraries & Frameworks", utilities: ["TensorFlow", "Keras", "PyTorch", "Scikit-Learn"] },
        { value: "data_processing", text: "Data Processing", utilities: ["Pandas", "NumPy"] },
        { value: "deep_learning", text: "Deep Learning", utilities: ["Neural Networks", "CNNs", "RNNs"] },
        { value: "natural_language_processing", text: "Natural Language Processing", utilities: ["NLTK", "SpaCy", "BERT"] }
    ],
    "data_science": [
        { value: "data_analysis_tools", text: "Data Analysis Tools", utilities: ["Excel", "SQL", "R", "Python (Pandas, NumPy)"] },
        { value: "data_visualization", text: "Data Visualization", utilities: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly"] },
        { value: "statistical_analysis", text: "Statistical Analysis", utilities: ["Descriptive Statistics", "Inferential Statistics"] },
        { value: "big_data_tools", text: "Big Data Tools", utilities: ["Hadoop", "Spark"] }
    ],
    "cybersecurity": [
        { value: "network_security", text: "Network Security", utilities: ["Firewalls", "Intrusion Detection Systems (IDS)", "Intrusion Prevention Systems (IPS)"] },
        { value: "cryptography", text: "Cryptography", utilities: ["Encryption", "Decryption", "Key Management"] },
        { value: "vulnerability_assessment", text: "Vulnerability Assessment", utilities: ["Penetration Testing", "Vulnerability Scanning"] },
        { value: "compliance_standards", text: "Compliance & Standards", utilities: ["GDPR", "HIPAA", "ISO 27001"] },
        { value: "incident_response", text: "Incident Response", utilities: ["Forensics", "Incident Management"] }
    ],
    "blockchain": [
        { value: "blockchain_platforms", text: "Blockchain Platforms", utilities: ["Ethereum", "Hyperledger", "Binance Smart Chain"] },
        { value: "smart_contracts", text: "Smart Contracts", utilities: ["Solidity", "Web3.js"] },
        { value: "cryptocurrencies", text: "Cryptocurrencies", utilities: ["Bitcoin", "Ethereum", "Altcoins"] },
        { value: "consensus_algorithms", text: "Consensus Algorithms", utilities: ["Proof of Work", "Proof of Stake"] },
        { value: "decentralized_applications", text: "Decentralized Applications (dApps)", utilities: ["Development", "Deployment"] }
    ],
    "game_development": [
        { value: "game_engines", text: "Game Engines", utilities: ["Unity", "Unreal Engine"] },
        { value: "game_design", text: "Game Design", utilities: ["Mechanics", "Level Design", "Game Balance"] },
        { value: "graphics", text: "Graphics", utilities: ["2D/3D Art", "Animation", "Shader Programming"] },
        { value: "programming", text: "Programming", utilities: ["C#", "C++", "Python (for scripting)"] },
        { value: "game_testing", text: "Game Testing", utilities: ["Playtesting", "Bug Reporting"] }
    ],
    "mobile_app_development": [
        { value: "platforms", text: "Platforms", utilities: ["iOS", "Android"] },
        { value: "programming_languages", text: "Programming Languages", utilities: ["Swift", "Kotlin", "Java", "Dart"] },
        { value: "frameworks", text: "Frameworks", utilities: ["React Native", "Flutter", "Xamarin"] },
        { value: "ui_ux_design", text: "UI/UX Design", utilities: ["Mobile App Design Principles", "Prototyping"] },
        { value: "apis", text: "APIs", utilities: ["RESTful APIs", "GraphQL"] }
    ],
    "web_development": [
        { value: "frontend", text: "Frontend", utilities: ["HTML", "CSS", "JavaScript", "Frontend Frameworks (React, Angular, Vue.js)"] },
        { value: "backend", text: "Backend", utilities: ["Node.js", "Django", "Flask", "Ruby on Rails"] },
        { value: "databases", text: "Databases", utilities: ["SQL", "NoSQL", "MongoDB"] },
        { value: "web_design", text: "Web Design", utilities: ["Responsive Design", "User Experience (UX)"] },
        { value: "deployment", text: "Deployment", utilities: ["Web Hosting", "CI/CD"] }
    ],
    "cloud_computing": [
        { value: "cloud_providers", text: "Cloud Providers", utilities: ["AWS", "Azure", "Google Cloud"] },
        { value: "services", text: "Services", utilities: ["Compute (EC2, Azure VMs)", "Storage (S3, Blob Storage)"] },
        { value: "serverless", text: "Serverless", utilities: ["AWS Lambda", "Azure Functions"] },
        { value: "containerization", text: "Containerization", utilities: ["Docker", "Kubernetes"] },
        { value: "cloud_security", text: "Cloud Security", utilities: ["IAM", "Encryption"] }
    ]
};