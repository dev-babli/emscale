import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: string;
  title: string;
  image: string;
  description: string;
  href: string;
}

const features: FeatureCardProps[] = [
  {
    image: "/Images/unfied.jpg",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/icons/682bdd5bb6bfbef3da4d1a76_Group%201437257146-7.png?",
    title: "Unified Gateway Value",
    description:
      "Integrate AI models and databases with flexibility and scalability.",
    href: "/unified-gateway",
  },
  {
    image: "/Images/cache.jpg",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/icons/682bdd5b51f8663f7941c056_Group%201437257160-8.png?",
    title: "Cache Management",
    description: "Boost performance with efficient caching.",
    href: "/cache-management",
  },
  {
    image: "/Images/computer.jpg",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/icons/682bdd5c8ac1c7f85ce07f9a_Group%201437257143-9.png?",
    title: "Real-time performance & usage tracking",
    description: "Gain actionable insights instantly.",
    href: "/real-time-performance-tracking",
  },
  {
    image: "/Images/cost.jpg",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/icons/682bdd5b4b77fd792e2a7ff2_Group%201437257158-10.png?",
    title: "Optimize Costs, Enhance Performance, & Strengthen Security",
    description:
      "Real-time insights to efficiently tracking cost, boost performance, & ensure robust security for your AI operations.",
    href: "/performance-cost-security",
  },
  {
    image: "/Images/nocode.jpg",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/icons/682bdd5b6e567298d31ae186_Group%201437257148-11.png?",
    title: "Nocode Workflow Management",
    description:
      "EMSCALE enables seamless, No Code management allowing effortless switching between multiple databases and models for optimal performance.",
    href: "/nocode-workflow-management",
  },
  {
    image: "/Images/Ai.jpg",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/icons/682bdd5c8ac1c7f85ce07f9a_Group%201437257143-9.png",
    title: "AI Insights",
    description:
      "Leverage AI to gain actionable insights and predictive analytics.",
    href: "/ai-insights",
  },
];

const FeatureCard = ({
  icon,
  image,
  title,
  description,
  href,
}: FeatureCardProps) => {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-xl border border-border max-w-[220px]"
    >
      <div className="relative h-full bg-card p-3 transition-transform duration-300 ease-in-out group-hover:scale-[1.02]">
        {/* Card-specific image */}
        <div className="mb-3">
          <Image
            src={image}
            alt={`${title} image`}
            width={220}
            height={120}
            className="rounded-md object-cover"
          />
        </div>

        {/* Icon */}
        <div className="mb-3">
          <Image
            src={icon}
            alt={`${title} icon`}
            width={40}
            height={40}
            className="h-8 w-8"
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold leading-snug text-primary-text">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-tight text-secondary-text">
            {description}
          </p>
        </div>

        {/* Gray gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800/50 to-gray-200/20 opacity-0 transition-opacity duration-300 group-hover:opacity-70 rounded-xl pointer-events-none" />
      </div>
    </Link>
  );
};

export default function AdditionalFeatures() {
  return (
    <section
      className="pt-16 pb-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Images/addlfeature.jpg')" }}
    >
      <div className=" px-6">
        <div className="flex justify-end">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 ml-auto">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
