
import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import PortfolioGallery from "@/components/portfolio/PortfolioGallery";
import PortfolioCTA from "@/components/portfolio/PortfolioCTA";

export const metadata = {
  title: "Our Portfolio | Beauty Studio",
  description:
    "Explore our makeup, bridal mehndi and nail art portfolio, including photos and Instagram Reels.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#FCF9F5]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <PortfolioHeader />
        <PortfolioGallery />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <PortfolioCTA />
      </div>
    </main>
  );
}
