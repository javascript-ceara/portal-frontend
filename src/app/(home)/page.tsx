import { Hero } from "@/components/hero";
import { HighlightedEvent } from "./_components/highlighthed-event";
import { Organizers } from "./_components/organizers";
import { OurEvents } from "./_components/our-events";
import { Partners } from "./_components/partners";

export default async function Home() {  
  return (
    <main>
      <Hero />
      <HighlightedEvent />
      <OurEvents />
      <Organizers />
      <Partners />
    </main>
  );
}
