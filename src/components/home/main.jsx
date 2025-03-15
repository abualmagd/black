import { heroSectionTitle } from "../../data/const";
import { PrimaryActionButton } from "../utils";
import { AnimatedSlider } from "./animtedSlider";

export function HomeMain() {
  return (
    <main className=" w-full flex flex-row flex-wrap">
      <div className="right-section image-section md:w-1/2 w-full mt-4 md:-mb-5">
        <img src="./src/assets/labsr.png" alt="profile photo " />
      </div>

      <div className="left-section md:w-1/2 w-full   flex flex-col md:items-start items-center  justify-center">
        <div className="hero-content flex flex-col md:text-start text-center w-80">
          <h2 className="text-3xl font-bold ">{heroSectionTitle}</h2>
          <p className=" line-clamp-3 text-sm mt-1">
            Lorem ipsum, dolor sit 59959elit. Eos quia, aliquam corrupti atque
            vitae similique recusandae repellendus officiis quaerat in iste
            alias aperiam ea ullam eligendi debitis! Ratione, vel illo.
          </p>
        </div>

        <div className="ml-4 mt-2">
          <PrimaryActionButton word={"view my work"} link={"/"} />
        </div>
      </div>
      <AnimatedSlider />
    </main>
  );
}
