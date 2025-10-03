import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import EnterpriseSolutions from "@/components/sections/enterprise-solutions";
import IndustryEcosystems from "@/components/sections/industry-ecosystems";
import AdditionalFeatures from "@/components/sections/additional-features";
import CloudPlatformSelection from "@/components/sections/cloud-platform-selection";
import Footer from "@/components/sections/footer";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { Card1, Card2 } from "@/components/sections/servicescard";
import SuccessStories from "@/components/sections/SuccessStories";
import process from "process";
import ProcessSection from "@/components/sections/process";
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <EnterpriseSolutions />
      <IndustryEcosystems />
      <AdditionalFeatures />
      <WhyChooseUs />
      <section className="w-full">
        {/* Full-width Header with background */}
        <div
          className="w-full bg-cover bg-center py-20 text-center relative"
          style={{ backgroundImage: "url('/images/header.jpg')" }}
        >
          {/* Optional dark overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              SERVICES
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-white mt-4">
              Smarter Services, Built with AI
            </h3>
            <p className="text-base md:text-lg text-white mt-2">
              Everything you need to automate operations, boost productivity
            </p>
          </div>
        </div>

        {/* Cards Row with single background image (inside container) */}
        {/* Cards Row (full width, no left/right space) */}
        <div className="w-full py-0">
          <div
            className="flex gap-6 items-stretch bg-cover bg-center p-6 rounded-3xl -mt-8"
            style={{ backgroundImage: "url('/images/service card.jpg')" }}
          >
            <Card1 className="flex-1 bg-transparent" />
            <Card2 className="flex-1 bg-transparent" />
          </div>
        </div>
      </section>
      <SuccessStories />
      <ProcessSection />
      <CloudPlatformSelection />
      <Footer />
    </main>
  );
}
