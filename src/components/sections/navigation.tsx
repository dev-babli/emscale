"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const productLinks: { title: string; href: string }[] = [
  {
    title: "LLMOps & FMOps Optimisation",
    href: "services/llmops-fmops-optimization",
  },
  { title: "RAG Pipeline", href: "services/rag-pipeline" },
  {
    title: "Performance, Cost & Security",
    href: "services/performance-cost-security",
  },
  { title: "LLM Routing", href: "/services/llm-routing" },
  { title: "Recommendation Engine", href: "services/recommendation-engine" },
  {
    title: "Nocode Workflow Management",
    href: "services/nocode-workflow-management",
  },
  { title: "Unified Gateway Value", href: "services/unified-gateway" },
  { title: "Prompt Management", href: "services/prompt-management" },
  { title: "Cache Management", href: "services/cache-management" },
  {
    title: "Enterprise Security & Guardrails",
    href: "services/enterprise-security-guardrails",
  },
  {
    title: "Real-Time Performance & Usage Analytics",
    href: "services/real-time-performance-tracking",
  },
];

const companyLinks: { title: string; href: string }[] = [
  { title: "Events", href: "/events" },
  {
    title: "News Room",
    href: "/pr/fission-labs-signs-strategic-collaboration-agreement-with-aws-to-deliver-production-ready-generative-ai-solutions-for-businesses",
  },
  { title: "Careers", href: "/careers" },
  { title: "Contact us", href: "/contact-us" },
];

const resourcesLinks: { title: string; href: string }[] = [
  { title: "blogs", href: "/blogs" },
  { title: "Glossary", href: "/glossary" },
  { title: "FAQs", href: "/faqs" },
];

const ListItem = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <Link
        ref={ref}
        className={cn(
          "block select-none rounded-[_6px] p-3 text-sm font-normal leading-none no-underline outline-none transition-colors text-secondary-text hover:bg-muted focus:bg-muted",
          className
        )}
        {...props}
      >
        {title}
      </Link>
    </NavigationMenuLink>
  );
});
ListItem.displayName = "ListItem";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-[99] transition-colors duration-300",
        isScrolled
          ? "bg-[rgba(26,26,26,0.8)] backdrop-blur-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-[108px] max-w-[1215px] items-center justify-between px-6 2xl:px-0">
        <Link
          href="/"
          aria-label="home"
          className="relative z-10 shrink-0 hover:brightness-110 transition duration-300"
        >
          <Image
            src="/images/emscale_logo.png"
            alt="EMSCALE Logo"
            width={160}
            height={50}
            className="h-auto w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="nav-link bg-transparent text-base font-normal text-primary-text hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  Product
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-x-2 gap-y-1 p-4">
                    {productLinks.slice(0, 6).map((link) => (
                      <ListItem
                        key={link.title}
                        href={link.href}
                        title={link.title}
                      />
                    ))}
                    {productLinks.slice(6).map((link) => (
                      <ListItem
                        key={link.title}
                        href={link.href}
                        title={link.title}
                      />
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="nav-link bg-transparent text-base font-normal text-primary-text hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[240px] gap-y-1 p-4">
                    {companyLinks.map((link) => (
                      <ListItem
                        key={link.title}
                        href={link.href}
                        title={link.title}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="nav-link bg-transparent text-base font-normal text-primary-text hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="flex flex-col w-[200px] gap-y-1 p-4">
                    {resourcesLinks.map((link) => (
                      <ListItem
                        key={link.title}
                        href={link.href}
                        title={link.title}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="https://github.com/FissionAI/FloTorch"
            className="nav-link flex items-center gap-2 text-base font-normal text-primary-text transition-opacity hover:opacity-80"
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/images/685e561670fcabc3a8a3090b_Group%201437257484-1.png?"
              alt="Github Icon"
              width={27}
              height={27}
            />
            Github
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex h-auto items-center justify-center rounded-lg bg-gradient-to-r from-green-400 via-green-300 to-green-200 px-[23px] py-[11px] text-base font-medium text-black transition-transform duration-300 hover:scale-[1.02]"
          >
            Schedule Demo
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="relative z-10"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary-text" />
            ) : (
              <Menu className="h-6 w-6 text-primary-text" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[108px] left-0 w-full bg-background px-6 pb-6 border-t border-border">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="product" className="border-b-border/50">
              <AccordionTrigger className="text-primary-text font-normal hover:no-underline">
                Product
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2 pt-2 pl-4">
                  {productLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-secondary-text hover:text-primary-text text-sm"
                      onClick={toggleMenu}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="company" className="border-b-border/50">
              <AccordionTrigger className="text-primary-text font-normal hover:no-underline">
                Company
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2 pt-2 pl-4">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-secondary-text hover:text-primary-text text-sm"
                      onClick={toggleMenu}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="resources" className="border-b-border/50">
              <AccordionTrigger className="text-primary-text font-normal hover:no-underline">
                Resources
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col space-y-2 pt-2 pl-4">
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-secondary-text hover:text-primary-text text-sm"
                      onClick={toggleMenu}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-6 flex flex-col space-y-4">
            <Link
              href="https://github.com/FissionAI/FloTorch"
              className="nav-link flex items-center gap-2 text-primary-text"
              onClick={toggleMenu}
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/87d4ecdb-c999-4235-93f5-d21de5f44f4d-flotorch-ai/assets/images/685e561670fcabc3a8a3090b_Group%201437257484-1.png?"
                alt="Github Icon"
                width={27}
                height={27}
              />
              Github Link
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex h-auto items-center justify-center rounded-lg border border-primary bg-primary w-full px-[23px] py-[11px] text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              onClick={toggleMenu}
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
