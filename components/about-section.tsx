"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  "Next.js & React.js",
  "Node.js & TypeScript",
  "PostgreSQL & MongoDB",
  // "PostgreSQL & Prisma",
  "Docker & Kubernetes",
  "Terraform & Jenkins",
  "REST APIs & Websockets",
  "n8n & Webhooks",
  // "LangChain & AI Agents",
  // "REST APIs & Socket.io",

  "GitHub Actions & CI/CD",
  // "Go & Rust (learning)",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-stone-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <Image
                src="/images/developer-illustration.png"
                alt="Siddhant Munjamkar - Developer Illustration"
                width={500}
                height={600}
                className="w-full h-auto object-cover rounded-lg relative z-10"
              />
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-stone-900 dark:bg-stone-100 -z-10 rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-serif text-5xl md:text-6xl font-light mb-6 text-stone-900 dark:text-stone-100">
                About
              </h2>
              <div className="w-24 h-px bg-stone-400 dark:bg-stone-600 mb-8" />
            </div>

            <div className="space-y-6 text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
              <p>
                {/* I'm a systems-focused developer passionate about building intelligent, automated workflows that bridge
                software, infrastructure, and AI. With a growing background in DevOps, backend systems, and agent-based
                automation, I craft scalable solutions that are both efficient and adaptable. */}
                I’m a systems-focused Software Engineer who enjoys building
                scalable full-stack applications and reliable platform systems
                that sit at the intersection of software and infrastructure. I
                care deeply about writing clean, maintainable code and designing
                systems that are efficient, extensible, and production-ready.
              </p>
              <p>
                {/* My work centers around designing seamless developer experiences
                through tools like Kubernetes, Terraform, and AI-powered agents.
                I enjoy solving complex challenges across automation pipelines,
                infrastructure orchestration, and backend architecture — often
                integrating web platforms with dynamic, real-time systems. */}
                My work centers on developing end-to-end web platforms backed by
                robust backend architectures and cloud-native infrastructure. I
                have hands-on experience working across backend services,
                databases, and infrastructure layers, with a strong focus on
                system design, reliability, and developer experience. I enjoy
                solving complex engineering problems related to scalability,
                orchestration, and real-time system behavior.
              </p>
              <p>
                {/* When I'm not coding, you can find me exploring new automation
                ideas, experimenting with LLM-powered tools, or learning how to
                build low-level systems using Go and Rust to deepen my
                understanding of computing. */}
                Outside of day-to-day development, I spend time strengthening my
                understanding of systems programming and distributed systems,
                exploring tools and frameworks that improve how software is
                built, deployed, and operated. I’m particularly interested in
                learning how low-level concepts translate into high-level,
                scalable platforms.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-semibold mb-6 text-stone-900 dark:text-stone-100">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-stone-400 dark:bg-stone-600" />
                    <span className="text-stone-700 dark:text-stone-300 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
