
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import BookingCTA from "@/components/home/BookingCTA";

export default function HomePage() {
  return (
    <main className="pt-20">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <WhyChooseUs />
      <BookingCTA />
    </main>
  );
}
