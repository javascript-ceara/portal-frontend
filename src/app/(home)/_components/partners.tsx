import { Section } from "@/components/section";

export function Partners() {
  return (
    <Section>
      <Section.Container>
        <Section.Header>
          <Section.Title>Parceiros</Section.Title>
        </Section.Header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from(Array(4).keys()).map((e) => {
            return (
              <div
                key={e}
                className="flex min-h-[200px] items-center justify-center rounded-2xl border border-border text-lg"
              >
                Logo here
              </div>
            );
          })}
        </div>
      </Section.Container>
    </Section>
  );
}
