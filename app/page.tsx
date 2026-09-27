import HeroSection from "@/components/sections/HeroSection";
import ProductPreview from "@/components/sections/ProductPreview";
import FeaturesGrid from "@/components/sections/FeaturesGrid";
import ModelsMatrix from "@/components/sections/ModelsMatrix";
import ValueComparison from "@/components/sections/ValueComparison";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050507] text-white flex flex-col font-sans selection:bg-orange-500 selection:text-white">

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

        {/* 3D Tilted Dashboard Product Preview */}
        <ProductPreview />

        {/* Features Grid Section */}
        <FeaturesGrid />

        {/* AI Models Matrix Section */}
        <ModelsMatrix />

        {/* Why Choose EchoGPT / Value Comparison Section */}
        <ValueComparison />

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
