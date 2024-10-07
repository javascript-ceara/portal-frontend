import { OrganizerCard } from "@/components/organizer-card";
import { Section } from "@/components/section";
import Image from "next/image";

function Organizers() {
  return (
    <Section>
      <Section.Container>
        <Section.Header>
          <Section.Title>Organizadores</Section.Title>
        </Section.Header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from(Array(7).keys()).map((e, index) => {
            return (
                <OrganizerCard key={index}>
                  <OrganizerCard.Avatar>
                    <Image src="https://www.javascript-ceara.org/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Flsdn08p957eq%2F5H4l0v8WIIY4P4ISJ6Xsb3%2F869cd3abf78a5326bf1587536540af8b%2Fbarto.jpeg&w=1080&q=75" alt="" fill />
                  </OrganizerCard.Avatar>
                  <div className="flex flex-col gap-1 items-center justify-center max-sm:items-start">
                    <OrganizerCard.Name className="max-md:text-base">Bartô</OrganizerCard.Name>
                    <OrganizerCard.Description className="!mt-0 max-md:text-sm">CEO da comunidade</OrganizerCard.Description>
                    <OrganizerCard.GitHub github="/" githubName="Barto" />
                  </div>
                </OrganizerCard>
            );
          })}
        </div>
      </Section.Container>
    </Section>
  );
}

export { Organizers };

