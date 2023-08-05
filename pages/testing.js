import { useState } from "react";
import Image from "next/image";

import NextIcon from "@/components/next_icon";
import PrevIcon from "@/components/prev_icon";

const AltHero = () => {
  const _SKILL_ICONS = [
    "/piano.png",
    "/artandcrafts.png",
    "/chess.png",
    "/violin.png",
    "/writing.png",
    "/suitcase.png",
    "/salary.png",
    "/education.png"
  ];

  return (
    <section className="bg-black text-white w-screen h-screen">
      <div className="fixed top-48 opacity-60 w-full h-auto">
        <div class="relative flex overflow-x-hidden">
          <div class="flex flex-row py-12 animate-marquee whitespace-nowrap">
            {_SKILL_ICONS.map((l, i) => (
              <span key={i} className="mx-4 text-4xl">
                <Image width={100} height={100} src={l} />
              </span>
            ))}
          </div>

          <div class="flex flex-row absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            {_SKILL_ICONS.map((l, i) => (
              <span key={i} className="mx-4 text-4xl">
                <Image width={100} height={100} src={l} />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="isolate w-full h-full px-4 py-10 my-auto mx-auto">
        <div className="mx-auto animation-bottom2top w-11/12 my-[15rem]">
          <h1 className="text-3xl text-center mx-auto leading-relaxed tracking-tight">
            Community which is full of talents. Making the world filled with{" "}
            <span className="underline decoration-primary underline-offset-4 decoration-4">
              talented
            </span>{" "}
            people.
          </h1>
        </div>
      </div>
      <div className="fixed top-[30rem] opacity-60 w-full h-auto">
        <div class="relative flex overflow-x-hidden">
          <div class="flex flex-row py-12 animate-marqueereverse whitespace-nowrap">
            {_SKILL_ICONS.map((l, i) => (
              <span key={i} className="mx-4 text-5xl">
                <Image width={100} height={100} src={l} />
              </span>
            ))}
          </div>

          <div class="flex flex-row absolute top-0 py-12 animate-marquee2reverse whitespace-nowrap">
            {_SKILL_ICONS.map((l, i) => (
              <span key={i} className="mx-4 text-5xl">
                <Image width={100} height={100} src={l} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AltHero;
