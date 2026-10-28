
import {
  Palette,
  BadgeCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Personalised Service",
    description:
      "Every look is designed around your unique style, outfit and occasion. We focus on your preferences to create a beauty experience that feels truly yours.",
    icon: Palette,
  },
  {
    id: 2,
    title: "Attention to Detail",
    description:
      "From carefully selected products to precise application, we focus on the little details that make every makeup look, mehndi design and nail style special.",
    icon: BadgeCheck,
  },
  {
    id: 3,
    title: "Beautiful Results",
    description:
      "Whether it is your wedding, a party or a special celebration, our goal is to help you feel confident, elegant and beautiful.",
    icon: Sparkles,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-[#F8F3F0] py-20 sm:py-24 lg:py-28"
    >
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#702C45]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#702C45] sm:text-xs">
              The Atelier Distinction
            </span>
            <span className="h-px w-7 bg-[#702C45]" />
          </div>

          <h2 className="font-serif text-3xl font-medium tracking-tight text-[#292326] sm:text-4xl lg:text-5xl">
            Why Choose Us
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#6F6268] sm:text-base">
            Your special moments deserve thoughtful details,
            personalised attention and artistry that reflects you.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.id}
                className="group rounded-3xl border border-[#702C45]/5 bg-white p-7 shadow-[0_4px_20px_rgba(84,22,47,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(84,22,47,0.09)] sm:p-9 lg:p-10"
              >
                {/* Icon */}
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4E5E8] text-[#702C45] transition-colors duration-300 group-hover:bg-[#702C45] group-hover:text-white">
                  <Icon size={27} strokeWidth={1.7} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl font-semibold text-[#292326] transition-colors group-hover:text-[#702C45] sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#6F6268] sm:text-[15px]">
                  {feature.description}
                </p>

                {/* Decorative bottom line */}
                <div className="mt-8 h-1 w-10 rounded-full bg-[#E8CBD5] transition-all duration-300 group-hover:w-16 group-hover:bg-[#702C45]" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
