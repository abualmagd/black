import { heroSectionTitle } from "../../data/const";

import { AnimatedSlider } from "./animtedSlider";

export function NewHomeMain() {
  return (
    <div className="my-home-main flex flex-col">
      <div className="hero relative h-[70vh] w-full">
        <div className="absolute w-screen overflow-x-hidden h-[700px] z-1 md:opacity-5 opacity-10">
          <img src="/assets/bgg.jpg" alt="" className="w-screen h-[700px]" />
        </div>
        <div className="swim-animation ">
          <video src="/assets/rkt.webm" autoPlay muted className="h-32 w-32" />
        </div>

        <div className="hero-content  z-10  text-center">
          <div className="max-w-md">
            <h1 className="md:text-5xl text-3xl font-extrabold">
              {heroSectionTitle}
            </h1>
            <p className="py-6 w-full">
              Your web, your choice. Conventional designs or cutting-edge
              innovation? The future of the web awaits your decision.
            </p>
            <a href="#services" className="btn btn-primary ">
              Dig into my services
            </a>
          </div>
        </div>
      </div>
      <AnimatedSlider />
    </div>
  );
}
