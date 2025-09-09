// Personal Information
export const personalInfo = {
    name: "Tuấn Thịnh",
    title: "Senior Backend Developer",
    subtitle: "Building Scalable & Robust Server Solutions",
    description: "Passionate backend developer with 5+ years of experience in designing and implementing high-performance, scalable server-side applications. Specialized in microservices architecture, cloud technologies, and database optimization.",
    email: "tuanthinh@example.com",
    phone: "+84 (xxx) xxx-xxxx",
    location: "Ho Chi Minh City, Vietnam",
    github: "https://github.com/tuanthinh",
    linkedin: "https://linkedin.com/in/tuanthinh",
    resume: "/resume.pdf"
};

// Experience Data
export const experiences = [
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

// Projects Data
export const projects = [
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
        github: "https://github.com/tuanthinh/ecommerce-microservices",
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
        github: "https://github.com/tuanthinh/realtime-chat",
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
        github: "https://github.com/tuanthinh/cicd-pipeline",
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
        github: "https://github.com/tuanthinh/api-gateway",
        category: "api"
    }
];

// Skills Data
export const skills = [
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

// Testimonials Data
export const testimonials = [
    {
        id: "test-1",
        name: "Sarah Johnson",
        position: "CTO at TechCorp Solutions",
        content: "Tuấn Thịnh's expertise in backend architecture is exceptional. He successfully led our microservices migration, resulting in significant performance improvements and cost savings.",
        avatar: "/avatars/sarah.jpg"
    },
    {
        id: "test-2",
        name: "Michael Chen",
        position: "Lead Developer at StartupHub",
        content: "Working with Tuấn Thịnh was a pleasure. His attention to detail and problem-solving skills helped us deliver a robust payment system that handles millions in transactions.",
        avatar: "/avatars/michael.jpg"
    },
    {
        id: "test-3",
        name: "Emily Rodriguez",
        position: "Product Manager at WebSolutions",
        content: "Tuấn Thịnh's ability to translate complex technical requirements into scalable solutions is remarkable. He is a true professional who delivers quality work consistently.",
        avatar: "/avatars/emily.jpg"
    }
];

// UI Text Content
export const uiContent = {
    navigation: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ],
    about: {
        title: "Crafting Digital Excellence",
        subtitle: "I&apos;m passionate about building robust, scalable backend systems that power amazing user experiences.",
        description1: "With over 5 years of experience in backend development, I specialize in creating high-performance, scalable server-side applications that handle millions of requests with ease.",
        description2: "My expertise spans across multiple programming languages and frameworks, with a particular focus on Node.js, Python, and cloud technologies. I believe in writing clean, maintainable code that stands the test of time.",
        description3: "When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or mentoring fellow developers. I&apos;m always eager to take on new challenges and push the boundaries of what&apos;s possible.",
        highlights: [
            {
                icon: "Code",
                title: "5+ Years Experience",
                description: "Building scalable backend systems"
            },
            {
                icon: "Database",
                title: "Database Expert",
                description: "SQL & NoSQL optimization specialist"
            },
            {
                icon: "Cloud",
                title: "Cloud Architecture",
                description: "AWS, Azure, and GCP certified"
            },
            {
                icon: "Zap",
                title: "Performance Focus",
                description: "High-throughput, low-latency systems"
            },
            {
                icon: "Users",
                title: "Team Leadership",
                description: "Leading development teams to success"
            },
            {
                icon: "Award",
                title: "Quality Driven",
                description: "Clean code and best practices advocate"
            }
        ]
    },
    hero: {
        greeting: "Hello, I&apos;m",
        title: "Senior Backend Developer",
        viewWork: "View My Work",
        getInTouch: "Get In Touch",
        scrollText: "Scroll to explore"
    },
    contact: {
        title: "Let&apos;s Build Something Amazing Together",
        subtitle: "I&apos;m always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I&apos;ll get back to you!",
        availability: "Available for new opportunities",
        availabilityDesc: "Currently open to full-time positions and consulting projects"
    }
};
