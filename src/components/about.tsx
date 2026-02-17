"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-center text-sm font-medium tracking-widest text-muted-foreground uppercase">
            About Me
          </h2>
          <h3 className="mb-8 text-center text-3xl font-bold sm:text-4xl">
            Who I Am
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border bg-card p-6 sm:p-8"
        >
          <p className="mb-4 leading-relaxed text-muted-foreground">
            I&apos;m <span className="font-semibold text-foreground">{personalInfo.name}</span>, an {personalInfo.title} based in {personalInfo.location}. With a Master&apos;s degree in Information Management &amp; Library Science and a deep passion for AI, I&apos;m on a mission to build intelligent systems that solve real-world problems.
          </p>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            Currently, I&apos;m immersed in the Governor Initiative&apos;s Agentic AI program, where I&apos;m learning and building with cutting-edge technologies like OpenAI Agent SDK, LangGraph, Docker, and Kubernetes. I love turning complex AI concepts into practical, user-friendly applications.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            When I&apos;m not coding, you&apos;ll find me exploring new AI research papers, contributing to open-source projects, or creating educational content to help others learn programming and AI.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
