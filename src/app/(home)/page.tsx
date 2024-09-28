import { Hero } from "@/components/hero";
import { HighlightedEvent } from "./_components/highlighthed-event";
import { OurEvents } from "./_components/our-events";
import { Partners } from "./_components/partners";
export default async function Home() {
  console.log("dssdsds");
  return (
    <main>
      <Hero />
      <HighlightedEvent />
      <OurEvents />
      <Partners />
    </main>
  );
}
