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
    { name: "Project-Based Learning ", icon: project, con: " Hands-on projects enhance real-world problem-solving skills." },
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