"use client"; 
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Feature {
  iconSrc: string;
  title: string;
  description: string;
  href: string;
}

const features: Feature[] = [
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/icons/682bdd5b40bda89e1194718d_Group%201437257156-1.png?",
    title: "LLM Routing",
    description: "Call any LLM via a single endpoint with reliability and efficiency.",
    href: "/services/llm-routing"
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/icons/682bdd5b6e567298d31ae119_Group%201437257129-2.png?",
    title: "LLMOps & FMOps Optimization",
    description: "Maximize AI model efficiency and performance.",
    href: "services/llmops-fmops-optimization"
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/icons/682bdd5b3d4d51b15881277c_Group%201437257133-3.png?",
    title: "Enterprise Security & Guardrails",
    description: "Complete observability, traceability and monitory",
    href: "/enterprise-security-guardrails"
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/icons/682bdd5bc438427177f6c4ef_Group%201437257136-4.png?",
    title: "RAG Pipeline",
    description: "Build secure, reliable data pipelines for AI applications.",
    href: "/rag-pipeline"
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/icons/682bdd5b658bedd6590b13f9_Group%201437257137-5.png?",
    title: "Prompt Management",
    description: "Fine-tune AI interactions for optimal results.",
    href: "/prompt-management"
  },
  {
    iconSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/icons/682bdd5baf298c1fca1d28cb_Group%201437257140-6.png?",
    title: "Recommendations Engine",
    description: "Deliver intelligent, personalized AI-driven suggestions.",
    href: "/recommendation-engine"
  }
];

const EnterpriseSolutions = () => {
 return (
  <section
    className="relative pt-[100px] pb-[240px] overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/Images/enterpriseimg.avif')" }}
  >
    <div className="mx-auto max-w-6xl px-6">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-block">
          <div className="rounded-full border border-primary bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#F1C40F]">
            Revolutionize operations with AI
          </div>
        </div>
        <h2 className="text-4xl font-semibold text-primary-text leading-tight md:text-[36px]">
          Enterprise-Grade AI Gateway Solutions you can rely on
        </h2>
        <p className="mt-4 text-base text-secondary-text">
          EMSCALE empowers organizations to manage, optimize, and scale AI workflows efficiently, turning innovation into measurable impact.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Link
            href={feature.href}
            key={feature.title}
            className="group relative block overflow-hidden rounded-xl border border-border bg-card-background shadow-[0px_8px_24px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-in-out hover:scale-[1.02]"
          >
            <div className="relative z-10 flex h-full flex-col justify-start p-8">
              <div className="flex flex-col gap-6">
                <div className="h-12 w-12">
                  <Image
                    src={feature.iconSrc}
                    alt={`${feature.title} icon`}
                    width={48}
                    height={48}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-primary-text leading-snug">{feature.title}</h3>
                  <p className="mt-2 text-base text-secondary-text">{feature.description}</p>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 z-0">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/images/67f791d8791e915bed6de9a2_GRAIN%20normal-2.png?"
                alt="Grain texture"
                layout="fill"
                objectFit="cover"
                className="opacity-50"
              />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/images/681092f4a0f21d056ef3364e_Frame%2078%202-3.png?"
                  alt="Hover background"
                  layout="fill"
                  objectFit="cover"
                />
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/svgs/681093a3c82bb106b1a16d40_icon-4.svg?"
                  alt="Arrow icon"
                  width={24}
                  height={24}
                  className="absolute bottom-8 right-8"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

}

export default EnterpriseSolutions;