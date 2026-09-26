import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import ModelsMatrix from "@/components/sections/ModelsMatrix";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050507] text-white flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Navbar */}
      <Navbar logoText="EchoGPT.ai" />

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <HeroSection
          brandName="EchoGpt.ai"
          headlineLine1="EchoGPT Next"
          headlineLine2="Digital Era"
          directorName="Talk with David"
          directorRole="DIRECTOR OF ECHOGPT"
        />

        {/* Features Grid Section */}
        <FeaturesGrid />

        {/* AI Models Matrix Section */}
        <ModelsMatrix />
      </main>
    </div>
  );
}
