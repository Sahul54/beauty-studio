
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ServiceFAQ({ title }) {
  const faqs = [
    {
      question: `How can I book ${title}?`,
      answer:
        "Click on Book This Service to continue to the booking page. You can also contact the studio to discuss your requirements.",
    },
    {
      question: "How much does the service cost?",
      answer:
        "The starting price is displayed on this page. The final price may vary depending on the options you select and your requirements.",
    },
    {
      question: "Can I discuss my requirements before booking?",
      answer:
        "Yes. Use the Enquire Now option to contact the studio and discuss your preferred look, occasion and service requirements.",
    },
    {
      question: "How long does the appointment take?",
      answer:
        "The estimated duration is shown in the service details. Actual timing may vary depending on your selected options.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto mt-16 max-w-4xl sm:mt-20">
      <div className="mb-7 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A56A80]">
          Need to Know
        </p>

        <h2 className="mt-2 font-serif text-3xl font-semibold text-[#54162F] sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#75656B]">
          Everything you need to know before booking your appointment.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-[#702C45]/10 bg-white"
            >
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() =>
                  setOpenIndex(isOpen ? -1 : index)
                }
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              >
                <span className="text-sm font-semibold text-[#54162F] sm:text-base">
                  {faq.question}
                </span>

                <ChevronDown
                  size={19}
                  className={`shrink-0 text-[#702C45] transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 sm:px-6">
                  <p className="text-sm leading-7 text-[#75656B]">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
