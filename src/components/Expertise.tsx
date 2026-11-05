import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Palette, ShoppingCart, Sparkles, Gauge, Cpu } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const expertise = [
  {
    icon: Code,
    title: "Web Development",
    description: "Frontend engineering with React, JavaScript, HTML5/CSS3. Responsive, accessible, component-driven architecture built for performance and maintainability.",
    tags: ["React", "JavaScript", "TypeScript", "HTML5/CSS3", "Responsive Design"],
  },
  {
    icon: Palette,
    title: "UI/UX & Digital Design",
    description: "Interface design rooted in visual hierarchy, layout precision, and interactive clarity. Every element serves the user experience.",
    tags: ["Interface Design", "Visual Hierarchy", "Layout Systems", "Interactive Design"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Business Websites",
    description: "Storefronts, landing pages, and checkout experiences designed to convert. From product presentation to payment integration.",
    tags: ["Storefronts", "Landing Pages", "Checkout UX", "Payment Integration"],
  },
  {
    icon: Sparkles,
    title: "Motion & Creative Development",
    description: "Purposeful animation and micro-interactions that enhance usability. Framer Motion, CSS transitions, and scroll-linked effects.",
    tags: ["Framer Motion", "Micro-interactions", "Scroll Animations", "Transitions"],
  },
  {
    icon: Gauge,
    title: "Technical & Digital Optimization",
    description: "Performance engineering, SEO fundamentals, accessibility compliance, and clean architecture that scales.",
    tags: ["SEO", "Performance", "Accessibility", "Architecture"],
  },
  {
    icon: Cpu,
    title: "AI & Emerging Technology",
    description: "AI-assisted development workflows, automation tooling, and ML-based product exploration at the edge of what's possible.",
    tags: ["AI-Assisted Dev", "Automation", "ML Products", "Emerging Tech"],
  },
];

function ExpertiseItem({ item, index, isActive, onClick }: {
  item: typeof expertise[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = item.icon;

  return (
    <motion.button
      onClick={onClick}
      className={`w-full text-left p-5 md:p-6 rounded-xl border transition-all duration-300 ${
        isActive
          ? "bg-surface border-accent/40"
          : "bg-transparent border-border hover:border-text-secondary/50"
      }`}
      layout
    >
      <div className="flex items-start gap-4">
        <div className={`p-2.5 rounded-lg shrink-0 transition-colors duration-300 ${
          isActive ? "bg-accent/15 text-accent" : "bg-surface text-text-secondary"
        }`}>
          <Icon size={20} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-[family-name:var(--font-heading)] font-semibold text-text-primary text-base md:text-lg">
            {item.title}
          </h3>
          <motion.div
            initial={false}
            animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.3, ease }}
            className="overflow-hidden"
          >
            <p className="text-text-secondary font-[family-name:var(--font-body)] text-sm leading-relaxed mt-2">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs rounded bg-bg border border-border text-text-secondary font-[family-name:var(--font-body)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.button>
  );
}

export default function Expertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="expertise" className="py-24 md:py-32 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-16 md:mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-accent font-[family-name:var(--font-body)] mb-3">
            Expertise
          </p>
          <h2
            className="font-[family-name:var(--font-heading)] font-semibold text-text-primary"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            What I bring to the work.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {expertise.map((item, i) => (
            <ExpertiseItem
              key={item.title}
              item={item}
              index={i}
              isActive={activeIndex === i}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
