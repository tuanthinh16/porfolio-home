export interface Experience {
    id: string;
    title: string;
    company: string;
    duration: string;
    description: string;
    technologies: string[];
    achievements: string[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    features: string[];
    github?: string;
    demo?: string;
    image?: string;
    category: 'backend' | 'fullstack' | 'infrastructure' | 'api';
}

export interface Skill {
    id: string;
    name: string;
    level: number; // 1-100
    category: 'programming' | 'database' | 'cloud' | 'tools' | 'framework';
    icon?: string;
}

export interface PersonalInfo {
    name: string;
    title: string;
    subtitle: string;
    description: string;
    email: string;
    phone?: string;
    location: string;
    github: string;
    linkedin: string;
    resume?: string;
}

// Mock Data
export const personalInfo: PersonalInfo = {
    name: "John Smith",
    title: "Senior Backend Developer",
    subtitle: "Building Scalable & Robust Server Solutions",
    description: "Passionate backend developer with 5+ years of experience in designing and implementing high-performance, scalable server-side applications. Specialized in microservices architecture, cloud technologies, and database optimization.",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    github: "https://github.com/johnsmith",
    linkedin: "https://linkedin.com/in/johnsmith",
    resume: "/resume.pdf"
};

export const experiences: Experience[] = [
    {
        id: "exp-1",
        title: "Senior Backend Developer",
        company: "TechCorp Solutions",
        duration: "2022 - Present",
        description: "Lead backend development for enterprise-level applications serving 1M+ users daily. Architect and implement microservices using Node.js, Python, and Go.",
        technologies: ["Node.js", "Python", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS"],
        achievements: [
            "Reduced API response time by 40% through database optimization",
            "Designed microservices architecture handling 10k+ concurrent requests",
            "Led team of 4 developers in migrating monolith to microservices",
            "Implemented CI/CD pipeline reducing deployment time by 60%"
        ]
    },
    {
        id: "exp-2",
        title: "Backend Developer",
        company: "StartupHub Inc.",
        duration: "2020 - 2022",
        description: "Developed RESTful APIs and real-time systems for fintech applications. Worked with event-driven architecture and message queues.",
        technologies: ["Java", "Spring Boot", "MySQL", "RabbitMQ", "Jenkins", "Docker"],
        achievements: [
            "Built payment processing system handling $2M+ monthly transactions",
            "Implemented real-time notification system using WebSockets",
            "Optimized database queries reducing execution time by 50%",
            "Developed automated testing suite with 95% code coverage"
        ]
    },
    {
        id: "exp-3",
        title: "Junior Backend Developer",
        company: "WebSolutions Ltd.",
        duration: "2019 - 2020",
        description: "Contributed to e-commerce platform development. Focused on inventory management and order processing systems.",
        technologies: ["PHP", "Laravel", "MySQL", "Redis", "Git", "Linux"],
        achievements: [
            "Developed inventory management API serving 50+ clients",
            "Created automated backup system with 99.9% reliability",
            "Implemented caching layer reducing database load by 30%",
            "Collaborated with frontend team on API integration"
        ]
    }
];

export const projects: Project[] = [
    {
        id: "proj-1",
        title: "E-Commerce Microservices Platform",
        description: "Scalable e-commerce backend with microservices architecture",
        longDescription: "A comprehensive e-commerce platform built with microservices architecture, featuring user management, product catalog, order processing, payment integration, and inventory management. Designed to handle high traffic and scale horizontally.",
        technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "Kubernetes", "RabbitMQ"],
        features: [
            "Microservices architecture with API Gateway",
            "Real-time inventory synchronization",
            "Payment processing with Stripe integration",
            "Order tracking and notification system",
            "Admin dashboard with analytics",
            "Horizontal scaling capability"
        ],
        github: "https://github.com/johnsmith/ecommerce-microservices",
        demo: "https://demo.ecommerce-platform.com",
        category: "backend"
    },
    {
        id: "proj-2",
        title: "Real-Time Chat Application",
        description: "High-performance chat system with WebSocket support",
        longDescription: "A real-time messaging platform supporting group chats, file sharing, and multimedia messages. Built with event-driven architecture and optimized for low latency communication.",
        technologies: ["Socket.io", "Node.js", "MongoDB", "Redis", "JWT", "Cloudinary"],
        features: [
            "Real-time messaging with WebSockets",
            "Group chat functionality",
            "File and image sharing",
            "Message encryption",
            "Online status tracking",
            "Message history and search"
        ],
        github: "https://github.com/johnsmith/realtime-chat",
        demo: "https://chat.demo.com",
        category: "fullstack"
    },
    {
        id: "proj-3",
        title: "CI/CD Pipeline Automation",
        description: "Automated deployment pipeline for microservices",
        longDescription: "A complete CI/CD solution for containerized applications with automated testing, security scanning, and multi-environment deployment capabilities.",
        technologies: ["Jenkins", "Docker", "Kubernetes", "Terraform", "AWS", "SonarQube"],
        features: [
            "Automated testing and code quality checks",
            "Container vulnerability scanning",
            "Multi-environment deployment",
            "Infrastructure as Code",
            "Rollback capabilities",
            "Monitoring and alerting integration"
        ],
        github: "https://github.com/johnsmith/cicd-pipeline",
        category: "infrastructure"
    },
    {
        id: "proj-4",
        title: "API Gateway with Rate Limiting",
        description: "High-performance API gateway with advanced security features",
        longDescription: "A robust API gateway solution providing rate limiting, authentication, request routing, and monitoring capabilities for microservices ecosystem.",
        technologies: ["Go", "Redis", "Prometheus", "Grafana", "Docker", "Consul"],
        features: [
            "Advanced rate limiting algorithms",
            "JWT authentication and authorization",
            "Request/response transformation",
            "Circuit breaker pattern",
            "API analytics and monitoring",
            "Load balancing and health checks"
        ],
        github: "https://github.com/johnsmith/api-gateway",
        category: "api"
    }
];

export const skills: Skill[] = [
    // Programming Languages
    { id: "skill-1", name: "Node.js", level: 95, category: "programming" },
    { id: "skill-2", name: "Python", level: 90, category: "programming" },
    { id: "skill-3", name: "Java", level: 85, category: "programming" },
    { id: "skill-4", name: "Go", level: 80, category: "programming" },
    { id: "skill-5", name: "TypeScript", level: 88, category: "programming" },
    { id: "skill-6", name: "PHP", level: 75, category: "programming" },

    // Frameworks
    { id: "skill-7", name: "Express.js", level: 95, category: "framework" },
    { id: "skill-8", name: "FastAPI", level: 85, category: "framework" },
    { id: "skill-9", name: "Spring Boot", level: 80, category: "framework" },
    { id: "skill-10", name: "Laravel", level: 75, category: "framework" },
    { id: "skill-11", name: "NestJS", level: 82, category: "framework" },

    // Databases
    { id: "skill-12", name: "PostgreSQL", level: 90, category: "database" },
    { id: "skill-13", name: "MongoDB", level: 85, category: "database" },
    { id: "skill-14", name: "Redis", level: 88, category: "database" },
    { id: "skill-15", name: "MySQL", level: 82, category: "database" },
    { id: "skill-16", name: "Elasticsearch", level: 75, category: "database" },

    // Cloud & DevOps
    { id: "skill-17", name: "AWS", level: 85, category: "cloud" },
    { id: "skill-18", name: "Docker", level: 90, category: "cloud" },
    { id: "skill-19", name: "Kubernetes", level: 80, category: "cloud" },
    { id: "skill-20", name: "Azure", level: 70, category: "cloud" },
    { id: "skill-21", name: "GCP", level: 65, category: "cloud" },

    // Tools
    { id: "skill-22", name: "Git", level: 95, category: "tools" },
    { id: "skill-23", name: "Jenkins", level: 85, category: "tools" },
    { id: "skill-24", name: "Terraform", level: 75, category: "tools" },
    { id: "skill-25", name: "Prometheus", level: 80, category: "tools" },
    { id: "skill-26", name: "RabbitMQ", level: 82, category: "tools" }
];

export const testimonials = [
    {
        id: "test-1",
        name: "Sarah Johnson",
        position: "CTO at TechCorp Solutions",
        content: "John's expertise in backend architecture is exceptional. He successfully led our microservices migration, resulting in significant performance improvements and cost savings.",
        avatar: "/avatars/sarah.jpg"
    },
    {
        id: "test-2",
        name: "Michael Chen",
        position: "Lead Developer at StartupHub",
        content: "Working with John was a pleasure. His attention to detail and problem-solving skills helped us deliver a robust payment system that handles millions in transactions.",
        avatar: "/avatars/michael.jpg"
    },
    {
        id: "test-3",
        name: "Emily Rodriguez",
        position: "Product Manager at WebSolutions",
        content: "John's ability to translate complex technical requirements into scalable solutions is remarkable. He's a true professional who delivers quality work consistently.",
        avatar: "/avatars/emily.jpg"
    }
];
