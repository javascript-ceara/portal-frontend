import { Hero } from "@/components/hero";
import { HighlightedEvent } from "./_components/highlighthed-event";
import { Organizers } from "./_components/organizers";
import { OurEvents } from "./_components/our-events";
import { Partners } from "./_components/partners";
import { createClient } from "@/services/supabase/server";
export default async function Home() {
  const client = createClient();

  const { data: highlightedEvent } = await client
    .from("events")
    .select("*")
    .filter("is_highlighted", "eq", true)
    .order("start_date", { ascending: true })
    .limit(1)
    .single();

  const { data: presentations } = await client.rpc("get_event_presentations", {
    input_event_id: highlightedEvent?.id || 0,
  });

  const { data: ourEvents } = await client
    .from("events")
    .select("*")
    .order("start_date", { ascending: true });

  const { data: organizers } = await client
    .from("profiles")
    .select("*")
    .eq("is_an_organizer", true)
    .order("full_name", { ascending: true });

  return (
    <main>
      <Hero />
      <HighlightedEvent
        highlightedEvent={highlightedEvent}
        presentations={presentations}
      />
      <OurEvents ourEvents={ourEvents} />
      <Organizers organizers={organizers} />
      <Partners />
    </main>
  );
}
