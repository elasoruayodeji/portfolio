import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 lg:px-16 pt-20 pb-16 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-accent/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-8"
        >
          {/* Label */}
          <motion.p
            variants={fadeUp}
            className="font-[family-name:var(--font-body)] text-sm md:text-base text-text-secondary uppercase tracking-widest"
          >
            Independent Web Developer & Digital Creative
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-[family-name:var(--font-display)] font-bold text-text-primary leading-[0.95]"
            style={{ fontSize: "clamp(2.75rem, 6vw, 7.5rem)" }}
          >
            I build.
            <br />
            I design.
            <br />
            <span className="text-accent">I experiment.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={fadeUp}
            className="font-[family-name:var(--font-body)] text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed"
          >
            Creating modern digital experiences through thoughtful design,
            frontend engineering, and creative technology.
          </motion.p>

          {/* Supporting line */}
          <motion.p
            variants={fadeUp}
            className="font-[family-name:var(--font-body)] text-base text-text-secondary/70 max-w-xl leading-relaxed"
          >
            I build responsive websites, digital products, and interactive
            experiences that combine functionality, visual storytelling, and
            attention to detail.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button
              onClick={() => scrollTo("#work")}
              className="group flex items-center gap-2 px-7 py-3.5 bg-accent text-bg font-[family-name:var(--font-body)] font-medium rounded-full hover:bg-accent/90 transition-all duration-200"
            >
              Explore My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="flex items-center gap-2 px-7 py-3.5 border border-border text-text-primary font-[family-name:var(--font-body)] font-medium rounded-full hover:border-text-secondary transition-all duration-200"
            >
              Let's Talk
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-text-secondary/50"
      >
        <span className="text-xs uppercase tracking-widest font-[family-name:var(--font-body)]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
