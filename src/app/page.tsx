"use client";

import { useFooStore } from "@/store/foo";
import { Header } from "@/components/header";

export default function Home() {
  const foo = useFooStore();
  return (
    <main>
      <Header />
      <section className="py-8 lg:py-16">
        <div className="px-8 items-center lg:container lg:mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-gray-700 md:text-6xl lg:text-7xl">
            React Ceará
          </h1>
          <p className="max-w-xl lg:text-lg">
            Ativa desde de 2019, a comunidade ReactJS Ceará realiza eventos
            presenciais em Fortaleza e online com formatos variados sobre React
            e qualquer outro assunto relacionado ao mercado de trabalho.
          </p>
        </div>
      </section>
    </main>
  );
}
