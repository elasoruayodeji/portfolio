import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left column */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="lg:col-span-4"
          >
            <p className="text-sm uppercase tracking-widest text-accent font-[family-name:var(--font-body)] mb-3">
              About
            </p>
            <h2
              className="font-[family-name:var(--font-heading)] font-semibold text-text-primary"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              The person behind the work.
            </h2>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="lg:col-span-8 space-y-6"
          >
            <p className="text-text-secondary font-[family-name:var(--font-body)] text-lg leading-relaxed">
              I'm <span className="text-text-primary font-medium">AYODEX</span>, a web developer and digital creative focused on building modern websites and meaningful digital experiences.
            </p>
            <p className="text-text-secondary font-[family-name:var(--font-body)] text-lg leading-relaxed">
              My work sits at the intersection of frontend development, interface design, digital experiences, and creative technology. I enjoy transforming ideas into functional digital products, exploring new approaches to interaction design, and building experiences where design and engineering work together.
            </p>
            <p className="text-text-secondary font-[family-name:var(--font-body)] text-lg leading-relaxed">
              Through <span className="text-accent font-medium">AYODEX Labs</span>, I explore and develop digital solutions that combine creativity, technology, and practical problem-solving.
            </p>

            {/* Accent detail */}
            <div className="pt-6 border-t border-border">
              <div className="flex flex-wrap gap-8">
                <div>
                  <p className="text-text-secondary text-sm font-[family-name:var(--font-body)]">Focus</p>
                  <p className="text-text-primary font-[family-name:var(--font-body)] font-medium mt-1">Web Development & Digital Design</p>
                </div>
                <div>
                  <p className="text-text-secondary text-sm font-[family-name:var(--font-body)]">Studio</p>
                  <p className="text-text-primary font-[family-name:var(--font-body)] font-medium mt-1">AYODEX Labs</p>
                </div>
                <div>
                  <p className="text-text-secondary text-sm font-[family-name:var(--font-body)]">Approach</p>
                  <p className="text-text-primary font-[family-name:var(--font-body)] font-medium mt-1">Design + Engineering</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
