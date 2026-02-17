"use client";

import { motion } from "framer-motion";
import { BookOpen, Briefcase, GraduationCap } from "lucide-react";
import { experience } from "@/lib/data";

const iconMap = {
  education: GraduationCap,
  learning: BookOpen,
  work: Briefcase,
};

export function Experience() {
  return (
    <section id="experience" className="bg-muted/30 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-center text-sm font-medium tracking-widest text-muted-foreground uppercase">
            Experience
          </h2>
          <h3 className="mb-10 text-center text-3xl font-bold sm:text-4xl">
            My Journey
          </h3>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border sm:left-1/2 sm:-translate-x-px" />

          <div className="flex flex-col gap-8">
            {experience.map((exp, i) => {
              const Icon = iconMap[exp.type];
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative pl-12 sm:pl-0"
                >
                  {/* Icon dot */}
                  <div className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border bg-background sm:left-1/2 sm:-translate-x-1/2">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>

                  {/* Card */}
                  <div
                    className={`sm:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? "sm:mr-auto sm:text-right" : "sm:ml-auto"
                    }`}
                  >
                    <div className="rounded-xl border bg-card p-5">
                      <span className="mb-1 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                        {exp.period}
                      </span>
                      <h4 className="mt-2 font-semibold">{exp.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {exp.organization}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
