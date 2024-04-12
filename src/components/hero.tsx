import Image from "next/image";
import { InstagramIcon } from "@/components/icons/instagram";
import { DiscordIcon } from "@/components/icons/discord";
import { WhatsAppIcon } from "@/components/icons/whatsapp";

export function Hero() {
  return (
    <section className="group relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[450px] xl:h-[550px]">
      <div className="relative h-full w-full overflow-hidden">
        <Image
          fill
          alt=""
          className="object-cover"
          src="https://snzhzfjipuxeiacxldnd.supabase.co/storage/v1/object/public/banner/banner.jpg"
        />
      </div>
      <div className="absolute inset-0 flex h-full  w-full flex-col items-center justify-center space-y-4 bg-gradient-to-b from-black/90 to-black/20 p-8">
        <h1 className="max-w-sm text-center text-2xl font-bold tracking-tight text-white sm:max-w-md md:max-w-xl md:text-4xl xl:max-w-3xl xl:text-5xl">
          Junte-se a maior comunidade de React do Nordeste
        </h1>
        <div className="flex items-center justify-center space-x-4">
          <a href="/">
            <InstagramIcon className="flex h-8 w-8 text-white" />
          </a>
          <a href="/">
            <WhatsAppIcon className="h-8 w-8 text-white" />
          </a>
          <a href="/">
            <DiscordIcon className="h-8 w-8 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
