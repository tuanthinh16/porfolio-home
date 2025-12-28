// Personal Information
export const personalInfo = {
    name: "Do Tuan Thinh",
    title: "Fullstack Developer (Backend-Oriented)",
    subtitle: "Building Scalable & Robust Server Solutions",
    description: (() => {
        const currentYear = new Date().getFullYear();
        const experienceYears = currentYear - 2021;
        return `Fullstack Developer (<strong>Backend-Oriented</strong>) with <strong>${experienceYears} years</strong> of experience delivering <strong>backend-driven web and trading systems</strong>. Strong in <strong>API development</strong>, <strong>data processing pipelines</strong>, and <strong>real-time services</strong> using <strong>NodeJS</strong>, <strong>Python (Flask)</strong>, <strong>PHP/Laravel</strong>, <strong>NestJS</strong>, and <strong>C#</strong>. Experienced in <strong>market data crawling</strong>, <strong>kline aggregation</strong>, and integrating backend services with <strong>Vue.js</strong> and <strong>Next.js</strong> frontends. Comfortable with <strong>Linux</strong>, <strong>Docker</strong>, and manual deployment workflows. Looking for a stable middle-level fullstack position with backend focus, where I can contribute to production systems and gradually grow towards deeper system design responsibilities.`;
    })(),
    email: "dotuanthinh37.work@gmail.com",
    phone: "+84 (777) 087 862",
    location: "District 7, Ho Chi Minh City, Vietnam",
    github: "https://github.com/tuanthinh16",
    linkedin: "https://linkedin.com/in/tuanthinh16",
    resume: "/CV_Dotuanthinh_12_2025_en.pdf",
    zalo: "0866145769"
};

// Experience Data
export const experiences = [
    {
        id: "exp-1",
        title: "Backend & Frontend Developer",
        company: "Trinity Net Technology - Ho Chi Minh City, Vietnam",
        duration: "05/2025 - Present",
        description: "Developed and maintained a real-time stock trading platform handling 5000+ Chinese market stocks with 1000+ daily transactions using PHP Laravel backend, Node.js WebSocket services, and Rust matching engine. Built frontend interfaces with React.js and Vue.js, plus e-commerce platform serving 100+ daily orders.",
        technologies: ["PHP", "Laravel", "Node.js", "Rust", "React.js", "Vue.js", "Soybean Admin", "JavaScript", "Nextjs", "Kafka", "TimescaleDB", "PostgreSQL", "WebSocket", "Linux", "Git", "Docker"],
        achievements: [
            "Built and maintained a real-time stock trading platform handling 5000+ Chinese market stocks with 1000+ daily transactions using PHP Laravel backend architecture.",
            "Implemented Node.js WebSocket services for real-time market data streaming and order processing with ultra-low latency.",
            "Developed high-speed matching engine in Rust communicating via Kafka, achieving 99% accuracy and 1 microsecond processing time per order.",
            "Created React.js frontend for stock trading platform, mapping real-time socket data and handling order placement functionality.",
            "Single-handedly built CMS interface for stock platform using Vue.js and Soybean Admin framework.",
            "Developed e-commerce platform frontend with Nextjs for US toy market, handling 100+ daily orders with responsive design.",
            "Optimized matching engine system to achieve 99% accuracy and 1 microsecond processing speed per order.",
            "Implemented encryption and digital signatures for enhanced data security and protection.",
            "Gained expertise in Linux deployment and server management for production environments.",
            "Learned and implemented TimescaleDB with PostgreSQL for handling large-scale market data storage and retrieval."
        ]
    },
    {
        id: "exp-2",
        title: "C# Developer",
        company: "Vietsens - Ha Noi, Vietnam",
        duration: "09/2023 - 03/2025",
        description: "Developed backend microservices in C#/.NET for hospital platforms serving 10,000+ daily users across major hospitals (Bệnh viện Bạch Mai, Bệnh viện Đại học Y Dược, Bệnh viện Tim Hà Nội, Bệnh viện Thận Hà Nội, etc.).",
        technologies: ["C#", ".NET", "Oracle", "SQL", "DevExpress", "Git", "SVN", "Flexcel"],
        achievements: [
            "Developed backend microservices in C#/.NET for hospital platforms serving 10,000+ daily users across major hospitals (Bệnh viện Bạch Mai, Bệnh viện Đại học Y Dược, Bệnh viện Tim Hà Nội, Bệnh viện Thận Hà Nội, etc.).",
            "Integrated with HIS/LIS systems, ensuring compatibility with existing healthcare workflows and standards.",
            "Designed reporting dashboards with DevExpress & Oracle to support real-time decision making in hospital departments.",
            "Optimized performance for large-scale hospital deployments, ensuring stability during high patient load."
        ]
    },
    {
        id: "exp-3",
        title: "Backend & Frontend Developer",
        company: "Freelancer",
        duration: "2021 - Present",
        description: "Delivered freelance projects including SEO-optimized landing pages, stores, and dashboards using Next.js with SSR. Built backend services with Flask and NestJS for data processing, crawling, and API development. Implemented real-time features using WebSocket / Socket.IO with mock market data streams. Worked with PostgreSQL and MySQL, designing schemas and optimizing queries. Deployed systems on VPS using Docker, PM2, systemctl, and aaPanel, with manual Git-based deployments. Recent project: https://www.phatdatprecision.com/",
        technologies: ["Next.js", "Flask", "NestJS", "WebSocket", "Socket.IO", "PostgreSQL", "MySQL", "Docker", "PM2"],
        achievements: [
            "Delivered freelance projects including SEO-optimized landing pages, stores, and dashboards using Next.js with SSR.",
            "Built backend services with Flask and NestJS for data processing, crawling, and API development.",
            "Implemented real-time features using WebSocket / Socket.IO with mock market data streams.",
            "Worked with PostgreSQL and MySQL, designing schemas and optimizing queries.",
            "Deployed systems on VPS using Docker, PM2, systemctl, and aaPanel, with manual Git-based deployments.",
            "Recent project: https://www.phatdatprecision.com/"
        ]
    }
];

// Education Data
export const education = [
    {
        id: "edu-1",
        degree: "Bachelor of Information Technology",
        institution: "Danang Architecture University",
        duration: "08/2018 - 02/2023",
        description: "Specialized in software engineering, algorithms, and database systems."
    }
];

// Projects Data
export const projects = [
    {
        id: "proj-1",
        title: "E-Commerce Platform",
        description: "Scalable e-commerce backend with microservices architecture",
        longDescription: "A comprehensive e-commerce platform built with microservices architecture, featuring user management, product catalog, order processing, payment integration, and inventory management. Designed to handle high traffic and scale horizontally.",
        technologies: ["Nextjs", "tailwind", "Mysql", "Php"],
        features: [
            "Microservices architecture with API Gateway",
            "Real-time inventory synchronization",
            "Payment processing with Stripe integration",
            "Order tracking and notification system",
            "Admin dashboard with analytics",
            "Horizontal scaling capability"
        ],
        // github: "https://github.com/tuanthinh16/onni-shop-home",
        demo: "https://oniishop.us/",
        category: "fullstack"
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
    { id: "skill-1", name: "PHP", category: "programming" },
    { id: "skill-2", name: "C#", category: "programming" },
    { id: "skill-3", name: "Python", category: "programming" },
    { id: "skill-4", name: "Rust", category: "programming" },
    { id: "skill-5", name: "JavaScript", category: "programming" },
    { id: "skill-6", name: "ReactJS", category: "programming" },
    { id: "skill-7", name: "NextJS", category: "programming" },

    // Frameworks
    { id: "skill-8", name: "Laravel", category: "framework" },
    { id: "skill-9", name: ".NET", category: "framework" },
    { id: "skill-10", name: "Flask", category: "framework" },


    // Databases
    { id: "skill-11", name: "MySQL", category: "database" },
    { id: "skill-12", name: "Oracle", category: "database" },
    { id: "skill-13", name: "Redis", category: "database" },
    { id: "skill-24", name: "PostgreSQL", category: "database" },
    { id: "skill-25", name: "MongoDB", category: "database" },

    // Cloud & DevOps
    { id: "skill-14", name: "Docker", category: "cloud" },
    { id: "skill-15", name: "GitLab CI/CD", category: "cloud" },
    { id: "skill-16", name: "Nginx", category: "cloud" },
    { id: "skill-17", name: "Kubernetes", category: "cloud" },
    { id: "skill-18", name: "VPS", category: "cloud" },

    // Tools
    { id: "skill-19", name: "Git", category: "tools" },
    { id: "skill-20", name: "SVN", category: "tools" },
    { id: "skill-21", name: "WebSocket", category: "tools" },
    { id: "skill-22", name: "Kafka", category: "tools" },
    { id: "skill-23", name: "TailwindCSS", category: "tools" },
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
        { name: 'Freelance', href: '#freelance' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ],
    about: {
        title: "Crafting Digital Excellence",
        subtitle: "I&apos;m passionate about building robust, scalable backend systems that power amazing user experiences.",
        description1: (() => {
            const currentYear = new Date().getFullYear();
            const experienceYears = currentYear - 2021;
            return `With over <strong>${experienceYears} years</strong> of experience in <strong>backend development</strong>, I specialize in creating <strong>high-performance</strong>, <strong>scalable server-side applications</strong> using <strong>PHP</strong>, <strong>C#</strong>, <strong>Python</strong>, and more.`;
        })(),
        description2: "My expertise spans across multiple <strong>programming languages</strong> and <strong>frameworks</strong>, with a particular focus on <strong>microservices</strong>, <strong>real-time systems</strong>, and <strong>DevOps tools</strong>. I believe in writing <strong>clean</strong>, <strong>maintainable code</strong> that stands the test of time.",
        description3: "When I&apos;m not coding, you&apos;ll find me exploring <strong>new technologies</strong>, contributing to <strong>open-source projects</strong>, or mentoring fellow developers. I&apos;m always eager to take on <strong>new challenges</strong> and push the boundaries of what&apos;s possible.",
        highlights: [
            {
                icon: "Code",
                title: (() => {
                    const currentYear = new Date().getFullYear();
                    const experienceYears = currentYear - 2021;
                    return `${experienceYears}+ Years Experience`;
                })(),
                description: "Building scalable backend systems"
            },
            {
                icon: "Database",
                title: "Database Expert",
                description: "MySQL, Oracle, Redis optimization"
            },
            {
                icon: "Cloud",
                title: "DevOps & Tools",
                description: "Docker, GitLab CI/CD, Kubernetes, Nginx, Cloudflare"
            },
            {
                icon: "Zap",
                title: "Performance Focus",
                description: "High-throughput, low-latency systems"
            },
            {
                icon: "Users",
                title: "System Design",
                description: "Microservices and real-time architectures"
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
        title: "Fullstack Developer",
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
