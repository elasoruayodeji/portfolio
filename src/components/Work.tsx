import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

const ease = [0.16, 1, 0.3, 1] as const;

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
      className="group relative"
    >
      <div className="flex flex-col gap-6">
        {/* Preview */}
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-surface border border-border group-hover:border-accent/30 transition-all duration-300">
          {/* Placeholder visual */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
            style={{
              background: `linear-gradient(135deg, ${project.preview.color}15, ${project.preview.color}05)`,
            }}
          >
            {/* Geometric composition */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div
                className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full opacity-20"
                style={{ backgroundColor: project.preview.color, filter: "blur(40px)" }}
              />
              <div
                className="absolute w-20 h-20 md:w-28 md:h-28 border rounded-lg rotate-12 opacity-30"
                style={{ borderColor: project.preview.color }}
              />
              <div
                className="absolute w-12 h-12 md:w-16 md:h-16 border rounded-full -rotate-6 opacity-20"
                style={{ borderColor: project.preview.color }}
              />
              <span
                className="relative font-[family-name:var(--font-display)] font-bold text-4xl md:text-6xl opacity-80"
                style={{ color: project.preview.color }}
              >
                {project.preview.initials}
              </span>
            </div>
          </div>

          {/* Status badge */}
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full font-[family-name:var(--font-body)] ${
                project.status === "shipped"
                  ? "bg-accent/20 text-accent"
                  : "bg-text-secondary/20 text-text-secondary"
              }`}
            >
              {project.status === "shipped" ? "Shipped" : "In Development"}
            </span>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/20 transition-colors duration-300" />
        </div>

        {/* Info */}
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                className="font-[family-name:var(--font-heading)] font-semibold text-text-primary group-hover:text-accent transition-colors duration-200"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)" }}
              >
                {project.name}
              </h3>
              <p className="text-sm text-text-secondary font-[family-name:var(--font-body)] mt-1">
                {project.category}
              </p>
            </div>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 p-2 rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent transition-all duration-200"
                aria-label={`Visit ${project.name} live site`}
              >
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>

          <p className="text-text-secondary font-[family-name:var(--font-body)] leading-relaxed text-sm md:text-base">
            {project.description}
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs rounded-md bg-surface border border-border text-text-secondary font-[family-name:var(--font-body)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Work() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-50px" });

  return (
    <section id="work" className="py-24 md:py-32 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-16 md:mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-accent font-[family-name:var(--font-body)] mb-3">
            Selected Work
          </p>
          <h2
            className="font-[family-name:var(--font-heading)] font-semibold text-text-primary"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Projects that define the practice.
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
