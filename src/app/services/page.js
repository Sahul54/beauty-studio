import ServicesPageHeader from "@/components/services/ServicesPageHeader";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesQualitySection from "@/components/services/ServicesQualitySection";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FCF9F5] pt-20">
      {/* <ServicesPageHeader /> */}
      <ServicesGrid />
      <ServicesQualitySection />
    </main>
  );
}