import { AnimatedSlider } from "./animtedSlider";
import { useTranslation } from "react-i18next";

export function NewHomeMain() {
  const { t } = useTranslation();
  return (
    <div className="my-home-main flex flex-col">
      <div className="hero relative h-[70vh] w-full">
        <div className="absolute w-screen overflow-x-hidden h-[700px] z-1 md:opacity-5 opacity-10 hero-bg"></div>
        <div className="swim-animation ">
          <video src="/assets/rkt.webm" autoPlay muted className="h-32 w-32" />
        </div>

        <div className="hero-content  z-10  text-center">
          <div className="max-w-md">
            <h1 className="md:text-5xl text-3xl font-extrabold">
              {t("heroSectionTitle")}
            </h1>

            <p className="py-6 w-full">{t("heroP")}</p>
            <a href="#services" className="btn btn-primary ">
              {t("dig")}{" "}
            </a>
          </div>
        </div>
      </div>
      <AnimatedSlider />
    </div>
  );
}
