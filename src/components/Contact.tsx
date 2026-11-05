import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MessageSquare } from "lucide-react";
import { CONFIG } from "../config";

const ease = [0.16, 1, 0.3, 1] as const;

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    if (!endpoint || endpoint.includes("YOUR_FORM_ID")) {
      setFormState("error");
      return;
    }

    setFormState("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", projectType: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const isPlaceholder = CONFIG.contact.email === "EMAIL_PLACEHOLDER";

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent font-[family-name:var(--font-body)] mb-3">
            Contact
          </p>
          <h2
            className="font-[family-name:var(--font-heading)] font-semibold text-text-primary"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Have an idea? Let's build something.
          </h2>
          <p className="text-text-secondary font-[family-name:var(--font-body)] text-lg mt-4 max-w-2xl leading-relaxed">
            Whether you're planning a website, developing a digital product, or exploring a creative project, I'd be interested in hearing about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="space-y-6">
              <div>
                <p className="text-sm text-text-secondary font-[family-name:var(--font-body)] mb-1">Email</p>
                {isPlaceholder ? (
                  <p className="text-text-primary font-[family-name:var(--font-body)]">
                    <span className="text-text-secondary italic text-sm">[Configure email in src/config.ts]</span>
                  </p>
                ) : (
                  <a href={`mailto:${CONFIG.contact.email}`} className="text-text-primary hover:text-accent transition-colors font-[family-name:var(--font-body)]">
                    {CONFIG.contact.email}
                  </a>
                )}
              </div>

              {CONFIG.contact.github !== "GITHUB_PLACEHOLDER" && (
                <div>
                  <p className="text-sm text-text-secondary font-[family-name:var(--font-body)] mb-1">GitHub</p>
                  <a href={`https://github.com/${CONFIG.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent transition-colors font-[family-name:var(--font-body)]">
                    @{CONFIG.contact.github}
                  </a>
                </div>
              )}

              {CONFIG.contact.linkedin !== "LINKEDIN_PLACEHOLDER" && (
                <div>
                  <p className="text-sm text-text-secondary font-[family-name:var(--font-body)] mb-1">LinkedIn</p>
                  <a href={CONFIG.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent transition-colors font-[family-name:var(--font-body)]">
                    Connect on LinkedIn
                  </a>
                </div>
              )}

              {CONFIG.contact.whatsapp !== "WHATSAPP_PLACEHOLDER" && (
                <div>
                  <p className="text-sm text-text-secondary font-[family-name:var(--font-body)] mb-1">WhatsApp</p>
                  <a href={`https://wa.me/${CONFIG.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent transition-colors font-[family-name:var(--font-body)]">
                    Send a message
                  </a>
                </div>
              )}
            </div>

            {/* Decorative element */}
            <div className="hidden lg:block pt-8 border-t border-border">
              <div className="flex items-center gap-3 text-text-secondary">
                <MessageSquare size={16} />
                <span className="text-sm font-[family-name:var(--font-body)]">Typically responds within 24 hours</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="lg:col-span-8"
          >
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-xl border border-accent/30 bg-surface text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-4">
                  <Send size={20} className="text-accent" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-text-primary text-xl">
                  Message sent.
                </h3>
                <p className="text-text-secondary font-[family-name:var(--font-body)] mt-2">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-6 text-sm text-accent hover:underline font-[family-name:var(--font-body)]"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-text-secondary font-[family-name:var(--font-body)] mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary font-[family-name:var(--font-body)] text-sm focus:border-accent focus:outline-none transition-colors placeholder:text-text-secondary/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-text-secondary font-[family-name:var(--font-body)] mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary font-[family-name:var(--font-body)] text-sm focus:border-accent focus:outline-none transition-colors placeholder:text-text-secondary/50"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm text-text-secondary font-[family-name:var(--font-body)] mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary font-[family-name:var(--font-body)] text-sm focus:border-accent focus:outline-none transition-colors"
                  >
                    <option value="">Select a project type</option>
                    <option value="website">Website</option>
                    <option value="web-app">Web Application</option>
                    <option value="ecommerce">E-commerce</option>
                    <option value="design">UI/UX Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-text-secondary font-[family-name:var(--font-body)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-text-primary font-[family-name:var(--font-body)] text-sm focus:border-accent focus:outline-none transition-colors resize-none placeholder:text-text-secondary/50"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {formState === "error" && (
                  <p className="text-red-400 text-sm font-[family-name:var(--font-body)]">
                    Something went wrong sending your message. Please try again or reach out directly via email.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="flex items-center gap-2 px-7 py-3.5 bg-accent text-bg font-[family-name:var(--font-body)] font-medium rounded-full hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {formState === "submitting" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
