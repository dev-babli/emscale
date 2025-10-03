import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

const socialLinks = [
  {
    name: "Github",
    href: "#",
    iconSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/svgs/685e607c89edd47fae91fe96_67d11fd6887866bccbe72205_Vector-7.svg?",
    IconComponent: null,
  },
  {
    name: "LinkedIn",
    href: "#",
    iconSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/svgs/67f78cc6df41cb739daba4be_linkedin-8.svg?",
    IconComponent: null,
  },
  {
    name: "X",
    href: "#",
    iconSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/svgs/67f78cc6be17174b187d13a5_x-9.svg?",
    IconComponent: null,
  },
  {
    name: "Instagram",
    href: "#",
    iconSrc: null,
    IconComponent: Instagram,
  },
  {
    name: "YouTube",
    href: "#",
    iconSrc:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/svgs/67f78cc6e01c42dd5d49d5cc_youtube-11.svg?",
    IconComponent: null,
  },
];

const productLinks = [
  { name: "LLMOps & FMOps Optimization", href: "/llmops-fmops-optimization" },
  { name: "RAG Pipeline", href: "/rag-pipeline" },
  { name: "Performance, Cost & Security", href: "/performance-cost-security" },
  { name: "LLM Routing", href: "/llm-routing" },
  { name: "Recommendation Engine", href: "/recommendation-engine" },
  { name: "Nocode Workflow Management", href: "/nocode-workflow-management" },
  { name: "Unified Gateway Value", href: "/unified-gateway" },
  { name: "Prompt Management", href: "/prompt-management" },
  { name: "Cache Management", href: "/cache-management" },
  {
    name: "Enterprise Security & Guardrails",
    href: "/enterprise-security-guardrails",
  },
  {
    name: "Real-Time Performance & Usage Analytics",
    href: "/real-time-performance-tracking",
  },
];

const companyLinks = [
  { name: "Careers", href: "/careers" },
  { name: "Events", href: "/events" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Terms & Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const resourcesLinks = [
  { name: "Blogs", href: "/blogs" },
  { name: "Glossary", href: "/glossary" },
  { name: "FAQs", href: "/faqs" },
];

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1E]">
      <div className="container mx-auto max-w-[1200px] px-6 pt-24 pb-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-5">
            <Link
              href="/"
              aria-label="home"
              className="relative z-10 hover:brightness-110 transition duration-300 block mb-4"
            >
              <Image
                src="/Images/emscale_logo.png"
                alt="EMSCALE Logo"
                width={160}
                height={50}
                className="h-auto w-auto"
                priority
              />
            </Link>
            <p className="max-w-[460px] text-[13.5px] leading-[1.6] text-secondary-text">
              At EMSCALE, we empower businesses to harness the transformative
              potential of Generative AI. Our mission is to simplify and
              accelerate the adoption of cutting-edge AI technologies, enabling
              organizations to innovate faster, make data-driven decisions, and
              deliver exceptional value to their customers.Born from the
              expertise and vision of Fission Labs, a global leader in custom
              software development and innovation, EMSCALE brings together a
              wealth of experience in building scalable, high-performance
              technology solutions. Over the last 15 years, Fission Labs has
              worked with diverse clients to deliver transformative results
              across diverse industries. EMSCALE continues this legacy by
              focusing on the forefront of AI and machine learning advancements.
            </p>
            <div className="mt-8">
              <p className="mb-4 text-sm text-secondary-text">Follow us:</p>
              <div className="flex space-x-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded bg-card transition-opacity hover:opacity-80"
                    aria-label={link.name}
                  >
                    {link.IconComponent ? (
                      <link.IconComponent className="h-4 w-4 text-white" />
                    ) : (
                      <Image
                        src={link.iconSrc!}
                        alt=""
                        width={16}
                        height={16}
                        className="h-4 w-4"
                      />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 text-sm lg:col-span-7 sm:grid-cols-4">
            <div>
              <h3 className="mb-3 text-[13.5px] font-normal uppercase text-muted-foreground">
                Product
              </h3>
              <ul className="space-y-[10px]">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="block text-white transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-[13.5px] font-normal uppercase text-muted-foreground">
                Company
              </h3>
              <ul className="space-y-[10px]">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="block text-white transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-[13.5px] font-normal uppercase text-muted-foreground">
                Resources
              </h3>
              <ul className="space-y-[10px]">
                {resourcesLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="block text-white transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-3 text-[13.5px] font-normal uppercase text-muted-foreground">
                Location
              </h3>
              <p className="text-white">
                2785 Rockbrook Dr, Ste 306A
                <br />
                Lewisville, TX 75067
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto max-w-[1200px] px-6 py-7 text-center">
          <p className="text-[12px] text-muted-foreground">
            © 2025 EMSCALE Inc. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
