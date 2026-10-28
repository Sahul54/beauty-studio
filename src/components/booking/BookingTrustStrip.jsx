import {
  MessageCircle,
  CalendarCheck,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: MessageCircle,
    title: "Personal Consultation",
    description:
      "Discuss your preferences and service requirements directly with our team.",
  },
  {
    icon: CalendarCheck,
    title: "Availability Check",
    description:
      "Your preferred date is reviewed before the appointment is confirmed.",
  },
  {
    icon: ShieldCheck,
    title: "Clear Communication",
    description:
      "Review service details and pricing before making a commitment.",
  },
];

export default function BookingTrustStrip() {
  return (
    <section className="mt-12 border-t border-[#E9DAD9] pt-10 sm:mt-16 sm:pt-12">
      <div className="grid gap-8 md:grid-cols-3">
        {benefits.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F1E1E5] text-[#54162F]">
                <Icon size={22} />
              </div>

              <div>
                <h3 className="font-serif text-lg font-medium text-[#54162F]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}