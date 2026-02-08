export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  github: string;
  live?: string;
  date: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    title: "GitOps Platform",
    category: "DevOps / Cloud",
    description:
      "A GitOps-based CI/CD platform for automated Kubernetes deployments.",
    longDescription:
      "Project Overview\n\nGitOpsNavigator is a GitOps-based CI/CD platform built to manage Kubernetes deployments in a reliable and automated way. It uses Git as the single source of truth, allowing teams to deploy, update, and roll back applications consistently across environments.\n\nThe platform integrates ArgoCD for continuous delivery, Helm and Kustomize for configuration management, and GitHub Actions for CI pipelines. It also supports safe deployment strategies like canary and blue-green releases, along with real-time monitoring using Prometheus and Grafana to track application health and performance.\n\nKey Features\n\n• Declarative GitOps-based CI/CD workflow using Git as the single source of truth\n• Automated Kubernetes deployments with ArgoCD\n• Advanced deployment strategies including canary and blue-green releases using Argo Rollouts\n• Helm and Kustomize support for flexible and environment-specific configuration management\n• GitHub Actions for automated build, test, and deployment pipelines\n• Fully containerized microservices architecture using Docker\n• Kubernetes-native deployment with scalable and resilient infrastructure\n• Real-time monitoring and metrics collection using Prometheus\n• Interactive dashboards and system observability with Grafana\n• Automated rollback support based on health metrics and deployment status\n• Production-ready DevOps architecture demonstrating best practices",
    image: "/images/gitops-technologies.png",
    gallery: ["/images/gitops-technologies.png"],
    tags: [
      "GitOps",
      "Kubernetes",
      "ArgoCD",
      "Helm",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "Argo Rollouts",
      "CI/CD",
    ],
    github: "https://github.com/SiddhantMunjamkar/GitOpsNavigator",
    // live: "#",
    date: "January 2025",
  },

  {
    id: "2",
    title: "Exchange System",
    category: "Backend / Real-Time Systems",
    description:
      "A high-performance exchange system with real-time market data streaming.",
    longDescription:
      "Project Overview\n\nExchange-platform is a real-time cryptocurrency exchange system built with a modular microservices architecture using Node.js, Redis, WebSockets, and Docker. It is designed for handling fast order matching, streaming market data, and scalable trade execution, making it suitable for high-frequency trading and real-time exchange platforms.\n\nThe backend includes REST APIs for order placement, a matching engine for trade logic, and a WebSocket service for broadcasting live market updates. Orders are queued and processed through Redis Pub/Sub for efficiency and reliability. The system also includes a database processor that persists trade history and metrics into a time-series database, ensuring accurate historical tracking. The architecture is containerized for easy deployment and scaling using Docker.\n\nKey Features\n\n• Real-time order book and trade data streaming via WebSockets\n• REST API for placing and managing orders\n• Event-driven matching engine with low-latency performance\n• Redis Pub/Sub based queueing for efficient inter-service communication\n• Docker-based containerized deployment for scalability and consistency\n• Database processor for storing trade history and analytics\n• Modular microservices design suitable for production-grade exchanges",
    image: "/images/exchange-system.png",
    gallery: ["/images/exchange-system.png"],
    tags: [
      "Node.js",
      "TypeScript",
      "Redis",
      "WebSockets",
      "Docker",
      "Microservices",
      "Real-Time Data",
      "Exchange",
      "Matching Engine",
      "API Development",
    ],
    github: "https://github.com/SiddhantMunjamkar/Exchange-platform",
    // live: "#",
    date: "January 2025",
  },

  {
    id: "3",
    title: "Paytm Transaction App",
    category: "FinTech / Backend",
    description:
      "A secure wallet-based transaction system with containerized deployment.",
    image: "/images/paytm-transaction.png",
    longDescription:
      "Project Overview\n\nPaytm Transaction App is a secure digital wallet and payment platform built to enable fast, reliable money transfers between users. The system provides core wallet functionality including sending and receiving money, viewing transaction history, and managing user balances, all with a focus on reliability and data consistency.\n\nThe application is built using a modern TypeScript and Node.js backend, with Prisma and PostgreSQL for structured data storage. It is fully containerized using Docker and deployed on Kubernetes for scalable and resilient infrastructure. The platform integrates secure authentication and robust transaction handling to ensure safe operations, while providing an intuitive API layer for frontend or client integration.\n\nKey Features\n\n• Secure wallet transfers between users with balance tracking\n• Comprehensive transaction history and status visibility\n• TypeScript and Node.js backend for strong typing and maintainability\n• Prisma ORM with PostgreSQL for reliable database management\n• Docker containerization for consistent environments\n• Kubernetes deployment for scalability and fault tolerance\n• RESTful API endpoints for easy frontend integration\n• Data validation and consistent transactional logic\n• Production-ready architecture with observability and performance in mind",
    gallery: ["/images/paytm-transaction.png"],
    tags: [
      "TypeScript",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "REST API",
      "Digital Wallet",
      "Transactions",
      "Secure Payments",
    ],
    github: "https://github.com/SiddhantMunjamkar/Paytm_transaction_app",
    // live: "#",
    date: "February 2025",
  },

  {
    id: "4",
    title: "AI Automation Suite with n8n",
    category: "AI / Automation",
    description:
      "An AI-powered workflow automation system built using n8n and OpenAI.",
    longDescription:
      "Project Overview\n\nAutomation-Project is a task automation system designed to simplify and streamline repetitive workflows. It enables users to define and execute automated tasks with minimal manual intervention, improving consistency and productivity. The project leverages scripting and integration with external APIs to trigger workflows, handle data operations, and interact with services programmatically.\n\nThe system is built using Node.js and relevant automation libraries, allowing it to run scheduled jobs, conditional task sequences, and event-driven triggers. With a focus on modularity and extensibility, developers can easily add new automation scripts or integrate additional APIs as needed. The project’s architecture supports configuration-based task definitions, enabling flexible automation rules without extensive coding.\n\nKey Features\n\n• Automated execution of repetitive tasks to reduce manual effort\n• Node.js-based architecture for cross-platform compatibility and performance\n• Configurable automation scripts for handling diverse workflows\n• Integration with external services and APIs to trigger actions\n• Event-driven triggers to start tasks based on conditions or schedules\n• Modular design for extending workflows and custom automation logic\n• Logging and status tracking of automation runs\n• Simple configuration format for defining tasks and sequences\n• Easy integration into existing systems and project environments\n• Scalable structure capable of managing multiple automation jobs concurrently",
    image: "/images/ai-automation-suite.png",
    gallery: ["/images/ai-automation-suite.png"],
    tags: [
      "Node.js",
      "Automation",
      "Scripting",
      "Tasks",
      "API Integration",
      "Config-Driven",
      "Workflow",
      "Event-Driven",
      "Scheduler",
      "Productivity",
    ],
    github: "https://github.com/SiddhantMunjamkar/Automation-Project",
    // live: "#",
    date: "July 2025",
  },

  {
    id: "5",
    title: "Scalable Backend API with Rate Limiting & Auth",
    category: "Backend / System Design",
    description:
      "A production-ready backend API with authentication and rate limiting.",
    longDescription:
      "Project Overview\n\nRate Limiting Auth Frontend & Backend is a full-stack authentication system that demonstrates secure user login, signup, and session management with rate limiting to protect against abuse. The project includes both frontend and backend components: a React UI for user interaction and an Express/Node.js backend for handling authentication, authorization, and request control.\n\nThe backend implements rate limiting to restrict excessive API requests, preventing brute force attacks and reducing server load. It also supports secure password handling and protected routes. The frontend is built with modern React practices, offering clean forms for login and signup with validation and feedback. Together, this system shows an end-to-end authenticated experience with performance safeguards and scalable architecture.\n\nKey Features\n\n• User authentication with secure login and signup flows\n• Rate limiting implemented on the backend to prevent API abuse\n• React frontend with form validation and user feedback\n• REST API endpoints for authentication and protected routes\n• Express/Node.js backend with middleware support\n• Secure password hashing and session handling\n• Modular structure separating frontend and backend concerns\n• Simple and scalable full-stack application architecture\n• Protects sensitive endpoints from excessive traffic\n• Can be extended with JWT, OAuth, or advanced auth strategies",
    image: "/images/hld_of_ratelimiter.png",
    gallery: ["/images/hld_of_ratelimiter.png"],
    tags: [
      "Node.js",
      "Express",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "JWT",
      "Google OAuth 2.0",
      "Rate Limiting",
      "Next.js",
    ],
    github:
      "https://github.com/SiddhantMunjamkar/Rate_limiting_auth_frontend_backend",
    // live: "#",
    date: "December 2025",
  },

  {
    id: "6",
    title: "Event-Driven Notification System",
    category: "Distributed Systems",
    description:
      "A fault-tolerant event-driven system for Email and SMS notifications.",
    longDescription:
      "Project Overview\n\nEvent-Driven Notification System is a scalable notification service designed to deliver real-time alerts and messages across different communication channels. Using an event-driven architecture, the system captures events from various producers and sends notifications based on defined rules and triggers. It decouples producers and consumers, making it efficient for high-throughput notification workflows.\n\nThe backend is built using Node.js with Express, and it incorporates message queueing with Redis Pub/Sub for reliable event distribution. Notifications can be delivered via different channels such as email, SMS, or push services, and the system supports configuration-based routing and retry logic. This approach allows developers to easily extend notification types or integrate with new services. The architecture is modular and containerized using Docker, making it suitable for deployment in both development and production environments.\n\nKey Features\n\n• Event-driven architecture for scalable notifications\n• Real-time message distribution with Redis Pub/Sub\n• REST API endpoints for event submission and management\n• Extensible notification channels (email, SMS, push)\n• Configurable routing and retry handling\n• Node.js and Express backend for fast API handling\n• Docker containerization for consistent deployment\n• Loose coupling between producers and consumers\n• Flexible rules engine to manage notification workflows\n• Designed for high-throughput and reliable execution",
    image: "/images/notification_design_1.png",
    gallery: ["/images/notification_design_1.png"],
    tags: [
      "Kafka",
      "Event-Driven Architecture",
      "Redis",
      "PostgreSQL",
      "Node.js",
      "Docker",
      "Distributed Systems",
    ],
    github:
      "https://github.com/SiddhantMunjamkar/Event-Driven-Notification-System",
    // live: "#",
    date: "July 2025",
  },

  {
    id: "7",
    title: "High-Performance Real-Time Analytics Dashboard",
    category: "Frontend / Performance Engineering",
    description:
      "A real-time analytics dashboard optimized for high-frequency data streams.",
    longDescription:
      "Project Overview\n\nLive Dashboard is a real-time data visualization platform built to help teams monitor, analyze, and react to live system and business metrics instantly. It transforms continuous data streams into clear, interactive dashboards, enabling faster decision-making without the need for manual refreshes or delays.\n\nDesigned with performance and scalability in mind, the dashboard delivers a smooth and responsive user experience while handling frequent data updates efficiently. Live data is pushed directly to the interface using real-time communication technologies, ensuring users always see the most up-to-date information. The system can integrate with multiple data sources, making it suitable for analytics platforms, operational monitoring, and real-time event tracking across different domains.\n\nKey Features\n\n• Real-time data updates for instant visibility into system and business metrics\n• Interactive charts and visualizations for clear data interpretation\n• Live data push using WebSocket / Socket.IO for seamless updates\n• High-performance and responsive user interface\n• Support for multiple data sources and scalable data ingestion\n• Modular architecture that can grow with increasing data volume\n• Smooth client–server communication for low-latency updates\n• Designed for analytics dashboards, monitoring tools, and live tracking systems\n• Clean, professional dashboard layout focused on clarity and usability\n• Production-ready architecture suitable for real-world applications",
    image: "/images/image_live_dashboard.png",
    gallery: ["/images/image_live_dashboard.png"],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Canvas",
      "Web Workers",
      "Performance Engineering",
      "Backpressure",
      "Real-Time Systems",
    ],
    github: "https://github.com/SiddhantMunjamkar/Live_dashboard",
    live: "https://live-dashboard-gamma.vercel.app/",
    date: "August 2025",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((project) => project.id === id);
}

export function getAllProjects(): Project[] {
  return projectsData;
}
