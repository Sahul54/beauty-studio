import {
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function ServiceIncludes({ service }) {
  const includes = service.details?.includes || [];

  if (!includes.length) return null;

  return (
    <section className="py-14 sm:py-20">
      <div className="mb-8 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#702C45]">
          THE EXPERIENCE
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-[#54162F] sm:text-4xl">
          What’s Included
        </h2>

        <p className="mt-3 leading-7 text-gray-600">
          Every detail is thoughtfully considered to create your
          perfect look.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {includes.map((item, index) => (
          <div
            key={item.title}
            className="rounded-2xl border border-[#EDE2E0] bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F6E9EC] text-[#702C45]">
              {index === 0 ? (
                <Sparkles size={21} />
              ) : (
                <CheckCircle2 size={21} />
              )}
            </div>

            <h3 className="mt-5 font-semibold text-[#54162F]">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}