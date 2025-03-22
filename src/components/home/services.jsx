import { LeftSection } from "./services/leftSection";
import { RightSection } from "./services/rightSection";

export function ServicesSection() {
  return (
    <section
      id="services"
      className=" flex  justify-evenly overflow-x-hidden  md:flex-row flex-col w-full  items-center  bg-base-300 mb-10"
    >
      <LeftSection />
      <RightSection />
    </section>
  );
}
