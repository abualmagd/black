import { useTranslation } from "react-i18next";
import { aboutSectionTitle, whatsappLnk } from "../../data/const";
import { PrimaryActionButton } from "../utils";

export function AboutMain() {
  const { t } = useTranslation();
  return (
    <main className=" w-full flex flex-row flex-wrap mb-14">
      <div className="  right-section flex md:items-end justify-end image-section md:w-1/2 w-full mt-4 md:-mb-5">
        <img src="/assets/holu.png" className="h-96" alt="profile photo " />
      </div>

      <div className="left-section md:w-1/2 w-full   flex flex-col md:items-start items-center  justify-center">
        <div className="hero-content flex flex-col md:text-start text-center w-80">
          <h2 className="text-3xl font-bold capitalize">
            {t(aboutSectionTitle)}
          </h2>
          <p className=" line-clamp-3 text-sm mt-1">{t("aboutMep2")}</p>
        </div>

        <div className="ml-4 mt-2">
          <PrimaryActionButton word={t("Hire Me")} link={whatsappLnk} />
        </div>
      </div>
    </main>
  );
}
