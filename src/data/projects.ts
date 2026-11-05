export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  liveUrl: string | null;
  repoUrl: string | null;
  status: "shipped" | "in-development";
  preview: {
    type: "image" | "placeholder";
    color: string;
    initials: string;
  };
}

export const projects: Project[] = [
  {
    slug: "iceeit",
    name: "ICEEIT",
    category: "E-commerce / Fashion / Frontend Development",
    description:
      "A fully functional fashion e-commerce platform with real-time inventory, integrated payments via Paystack, and cloud-hosted media management.",
    stack: ["React", "Vite", "React Router", "Framer Motion", "Supabase", "Paystack", "Cloudinary"],
    liveUrl: "https://iceeit.vercel.app/",
    repoUrl: null,
    status: "shipped",
    preview: {
      type: "placeholder",
      color: "#FF6A3D",
      initials: "IC",
    },
  },
  {
    slug: "predicta",
    name: "PREDICTA",
    category: "Fintech / Forecasting / Data",
    description:
      "An NGX-first stock forecasting tool combining statistical analysis and machine learning to surface market patterns and trends.",
    stack: ["Python", "Machine Learning", "Data Analysis", "React"],
    liveUrl: null,
    repoUrl: null,
    status: "in-development",
    preview: {
      type: "placeholder",
      color: "#6366F1",
      initials: "PR",
    },
  },
  {
    slug: "ftc-ikoyi",
    name: "FTC Ikoyi Feedback System",
    category: "Business Solutions / Web App",
    description:
      "A digital feedback tool designed to streamline business–customer interaction, enabling structured collection and response to client input.",
    stack: ["React", "TypeScript", "Node.js"],
    liveUrl: null,
    repoUrl: null,
    status: "in-development",
    preview: {
      type: "placeholder",
      color: "#10B981",
      initials: "FT",
    },
  },
  {
    slug: "hmd-gadgets",
    name: "HMD Gadgets",
    category: "E-commerce / Business",
    description:
      "A business storefront for a gadget retailer, built to present products clearly and drive purchasing decisions.",
    stack: ["React", "CSS", "JavaScript"],
    liveUrl: null,
    repoUrl: null,
    status: "in-development",
    preview: {
      type: "placeholder",
      color: "#F59E0B",
      initials: "HM",
    },
  },
  {
    slug: "dex",
    name: "DEX",
    category: "AI / Desktop Software / Automation",
    description:
      "An AI-powered desktop assistant with voice interaction, wake-word activation, and conversational capabilities. Currently in pre-release development.",
    stack: ["Python", "Speech Recognition", "NLP", "Desktop Automation"],
    liveUrl: null,
    repoUrl: null,
    status: "in-development",
    preview: {
      type: "placeholder",
      color: "#EC4899",
      initials: "DX",
    },
  },
];
