import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the idea, the users, and the requirements. Clarify the problem before solving it.",
  },
  {
    number: "02",
    title: "Design",
    description: "Establish visual direction, interface structure, and user experience. Every decision has intent.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Build with the right technology, focused on function, performance, and maintainability.",
  },
  {
    number: "04",
    title: "Refine",
    description: "Test, optimize, and polish across devices. Ship work that holds up under real conditions.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 md:py-32 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-16 md:mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-accent font-[family-name:var(--font-body)] mb-3">
            Process
          </p>
          <h2
            className="font-[family-name:var(--font-heading)] font-semibold text-text-primary"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            How the work gets done.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              className="relative"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-border z-0" />
              )}

              <div className="relative z-10">
                <span className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-accent/30">
                  {step.number}
                </span>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-text-primary text-xl mt-3">
                  {step.title}
                </h3>
                <p className="text-text-secondary font-[family-name:var(--font-body)] text-sm leading-relaxed mt-2">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
