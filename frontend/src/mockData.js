// Mock data for the portfolio website

export const personalInfo = {
    name: "Asil",
    title: "Developer",
    tagline: "Hi, I'm Asil — a young developer passionate about technology and innovation",
    description: "I'm a high school student with a deep passion for coding, robotics, AI, and web development. I love building projects that solve real-world problems and constantly learning new technologies.",
    email: "asildogangumus@gmail.com",
    github: "xjr-dev",
    linkedin: "https://linkedin.com/in/asil",
    instagram: "https://instagram.com/asil",
    avatar: "/assets/avatar.png",
    age: "14",
    school: "High School",
    interests: ["Coding", "Robotics", "AI/ML", "Web Development", "Game Development"],
    cvUrl: "/cv/asil-resume.pdf"
};

export const skills = [
    { name: "Python", icon: "code", color: "#3776ab" },
    { name: "JavaScript", icon: "code-2", color: "#f7df1e" },
    { name: "Java", icon: "hash", color: "#239120" },
    { name: "C#", icon: "hash", color: "#239120" },
    { name: "PHP", icon: "hash", color: "#239120" },
    { name: "AI/ML", icon: "palette", color: "#e34c26" },
    { name: "Robotics", icon: "palette", color: "#e34c26" },
    { name: "React", icon: "atom", color: "#61dafb" },
    { name: "HTML/CSS", icon: "palette", color: "#e34c26" },
    { name: "Node.js", icon: "server", color: "#68a063" },
    { name: "Git", icon: "git-branch", color: "#f05032" },
    { name: "MongoDB", icon: "database", color: "#47a248" }
];

export const projects = [
    {
        id: 1,
        title: "AI Chatbot Assistant",
        description: "An intelligent chatbot powered by machine learning that helps students with homework and study materials. Features natural language processing and context-aware responses.",
        techStack: ["Python", "TensorFlow", "Flask", "React"],
        images: [
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
            "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
            "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80"
        ],
        github: "https://github.com/xjr-dev/ai-chatbot",
        demo: "https://ai-chatbot-demo.vercel.app",
        featured: true
    },
    {
        id: 2,
        title: "Smart Study Planner",
        description: "A productivity app that helps students organize their study schedule using AI-powered suggestions. Includes calendar integration, task prioritization, and progress tracking.",
        techStack: ["React", "Node.js", "MongoDB", "Express"],
        images: [
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
            "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
        ],
        github: "https://github.com/xjr-dev/study-planner",
        demo: "https://study-planner-demo.vercel.app",
        featured: true
    },
    {
        id: 3,
        title: "Robotics Control System",
        description: "A comprehensive control system for robotics projects built with Arduino and Python. Features real-time sensor data visualization and remote control capabilities.",
        techStack: ["Python", "Arduino", "C++", "WebSocket"],
        images: [
            "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80",
            "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?w=800&q=80",
            "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=800&q=80"
        ],
        github: "https://github.com/xjr-dev/robotics-control",
        demo: null,
        featured: false
    },
    {
        id: 4,
        title: "Code Learning Platform",
        description: "An interactive platform for beginners to learn programming with gamified challenges and instant feedback. Supports multiple programming languages.",
        techStack: ["JavaScript", "React", "Firebase", "Tailwind CSS"],
        images: [
            "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
        ],
        github: "https://github.com/xjr-dev/code-learning",
        demo: "https://code-learning-demo.vercel.app",
        featured: true
    }
];

export const testimonials = [
    {
        id: 1,
        name: "Mr. Johnson",
        role: "Computer Science Teacher",
        text: "Asil is one of the most dedicated and talented students I've had. His passion for programming and ability to solve complex problems is truly impressive.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Johnson"
    },
    {
        id: 2,
        name: "Sarah Chen",
        role: "Robotics Club Leader",
        text: "Working with Asil on robotics projects has been amazing. He brings creativity and technical expertise that elevates every project we work on.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    }
];

export const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/xjr-dev",
        icon: "github"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/asil-do%C4%9Fan-g%C3%BCm%C3%BC%C5%9F-316291285/",
        icon: "linkedin"
    },
    {
        name: "Instagram",
        url: "https://instagram.com/asildgm",
        icon: "instagram"
    },
    {
        name: "Email",
        url: "mailto:asildogangumus@gmail.com",
        icon: "mail"
    }
];

export const galleryImages = [
    {
        id: 1,
        title: "Coding Session",
        description: "Late night coding with my favorite setup",
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
    },
    {
        id: 2,
        title: "Robotics Workshop",
        description: "Working on my robotics project at school",
        url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
    },
    {
        id: 3,
        title: "Hackathon Win",
        description: "Winning first place at the regional hackathon",
        url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
    },
    {
        id: 4,
        title: "Team Collaboration",
        description: "Collaborating with my coding club team",
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
    },
    {
        id: 5,
        title: "Tech Conference",
        description: "Attending my first tech conference",
        url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
    },
    {
        id: 6,
        title: "Project Demo",
        description: "Presenting my AI project to judges",
        url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
    },
    {
        id: 7,
        title: "Arduino Setup",
        description: "Building my first Arduino-based robot",
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
    },
    {
        id: 8,
        title: "Study Time",
        description: "Preparing for computer science exams",
        url: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80"
    }
];

export const honorsAwards = [
    {
        id: 1,
        title: "First Place - Regional Hackathon",
        organization: "Tech Innovation Challenge",
        date: "2024",
        description: "Won first place in the regional hackathon for developing an AI-powered study assistant application. The project showcased advanced machine learning algorithms and user-friendly interface design.",
        category: "Competition",
        icon: "trophy"
    },
    {
        id: 2,
        title: "Outstanding Student Award",
        organization: "Computer Science Department",
        date: "2024",
        description: "Recognized for exceptional performance in computer science courses and contributions to the coding club. Demonstrated leadership skills and technical expertise in multiple programming languages.",
        category: "Academic",
        icon: "award"
    },
    {
        id: 3,
        title: "Best Robotics Project",
        organization: "School Science Fair",
        date: "2023",
        description: "Awarded for innovative robotics project that combined Arduino programming with AI sensors. The project demonstrated practical applications of robotics in everyday problem-solving.",
        category: "Project",
        icon: "medal"
    },
    {
        id: 4,
        title: "Coding Competition Winner",
        organization: "Junior Developer Challenge",
        date: "2023",
        description: "Secured first position in a national coding competition for high school students. Solved complex algorithmic challenges and demonstrated proficiency in Python and JavaScript.",
        category: "Competition",
        icon: "trophy"
    },
    {
        id: 5,
        title: "AI/ML Excellence Certificate",
        organization: "Online Learning Platform",
        date: "2024",
        description: "Completed advanced machine learning course with distinction. Built and deployed several AI models including neural networks for image recognition and natural language processing.",
        category: "Certification",
        icon: "certificate"
    },
    {
        id: 6,
        title: "Innovation Award",
        organization: "Tech Club",
        date: "2024",
        description: "Recognized for developing innovative web applications that solve real-world problems. Created multiple full-stack applications using modern technologies like React and Node.js.",
        category: "Recognition",
        icon: "star"
    }
];

export const experience = [
    {
        id: 1,
        title: "Junior Software and Electronics Developer",
        company: "Lacivert Bilişim",
        location: "On-Site",
        date: "2024 - Present",
        description: 'At Lacivert Bilişim, I contribute to web development, robotics, and AI projects, gaining hands-on experience in hardware–software integration, programming ESP32-based robotic systems, and developing AI-driven solutions. I focus on system optimization, responsive web interfaces, and cross-disciplinary problem-solving, while strengthening teamwork, communication, and project management skills in a fast-paced, collaborative environment.',
        responsibilities: [
            "Develop and optimize responsive web interfaces using HTML, CSS, and JavaScript",
            "Program ESP32-based robotic systems in C++ and Python integrating sensors and actuators",
            "Design and implement AI-driven solutions for automation, predictive analysis, and data processing",
            "Perform real-time debugging, system optimization, and rapid prototyping",
            "Collaborate in a fast-paced team environment contributing to project planning and execution",
            "Apply cross-disciplinary problem-solving to deliver effective, functional solutions"
            ],

        technologies: ["Python", "Web Technologies", "C++", "Electronics", "React", "AI/ML", "Robotics"],
        type: "Contract"
    },
    {
        id: 2,
        title: "FRC 4th Dimension Programming & Electronics Subteam Member",
        company: "4th Dimension",
        location: "On-Site",
        date: "2025 - Present",
        description: 'As a member of Team 6429 – 4th Dimension’s Programming & Electronics subteam, I develop and refine robot control systems using Java on the NI RoboRIO platform, gaining hands-on experience in robotic architecture, sensor integration, and real-time control algorithms. I focus on hardware–software synchronization, debugging complex systems, and optimizing code performance, while collaborating within a multidisciplinary team. This role strengthens my project management, teamwork, and strategic thinking skills, as I coordinate with teammates to meet competition deadlines and adapt solutions under high-pressure scenarios, broadening my technical and professional capabilities.',
        responsibilities: [
  "Contribute as a Programming & Electronics subteam member in developing robot control systems using Java on the NI RoboRIO platform",
  "Assist in robotic system architecture, sensor integration, and implementation of real-time control algorithms",
  "Support hardware–software synchronization and debugging of complex systems",
  "Help optimize code performance for reliable and efficient robot operation",
  "Collaborate with subteam members and multidisciplinary teams to deliver effective solutions",
  "Develop project management, teamwork, and strategic thinking skills under competition conditions"
],

        technologies: ["Robotics Programming — Java, NI RoboRIO", "Electronics & Control Systems", "Problem Solving", "Teamwork & Collaboration", "Data Analysis & Automation"],
        type: "Personal"
    },
    {
        id: 3,
        title: "Competitor",
        company: "TEKNOFEST",
        location: "On-Site",
        date: "2021 - Present",
        description: "TEKNOFEST 2025 High School Level, Barrier-Free Living Technologies – 10th Place in Turkey | FLOW\nTEKNOFEST 2025 High School Level, Flying Car Simulation Competition - Reached Final Design Report (FTR) Stage | AEROVISION\nTEKNOFEST 2025 High School Level, RoboLeague - Reached Final Design Report (FTR) Stage | Quantum Quake\nTEKNOFEST 2025 High School Level, Agricultural Technologies Competition - Reached Final Design Report (FTR) Stage | WeatherTech",

        responsibilities: [
            "Designed and built multiple robotics projects",
            "Mentored new club members",
            "Participated in robotics competitions",
            "Developed control software and hardware integration"
        ],
        technologies: ["Arduino", "C++", "Python", "Raspberry Pi", "ROS"],
        type: "Volunteer"
    },
    {
        id: 4,
        title: "Web Development Intern",
        company: "Tech Startup",
        location: "Remote",
        date: "Summer 2023",
        description: "Worked as a web development intern, contributing to frontend development and learning industry best practices. Collaborated with a team of developers on a real-world project.",
        responsibilities: [
            "Developed React components for web application",
            "Participated in code reviews and team meetings",
            "Fixed bugs and improved application performance",
            "Learned agile development methodologies"
        ],
        technologies: ["React", "JavaScript", "Git", "Agile", "TypeScript"],
        type: "Internship"
    },
    {
        id: 5,
        title: "Open Source Contributor",
        company: "Various Projects",
        location: "Remote",
        date: "2023 - Present",
        description: "Contributing to open source projects on GitHub, fixing bugs, adding features, and improving documentation. Actively participating in the developer community.",
        responsibilities: [
            "Contributed to 10+ open source projects",
            "Fixed bugs and implemented new features",
            "Improved project documentation",
            "Helped other developers in the community"
        ],
        technologies: ["Git", "GitHub", "Various Languages", "Documentation"],
        type: "Volunteer"
    }
];
