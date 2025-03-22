import { useTranslation } from "react-i18next";
import { myNumber, whatsMessage } from "../data/const";
import { ConnectActionButton } from "./utils";

export function LetWork() {
  const whatsappLink = `https://wa.me/${myNumber}?text=${encodeURIComponent(
    whatsMessage
  )}`;

  const { t } = useTranslation();

  return (
    <div className=" flex md:flex-row gap-3 overflow-x-hidden bg-base-300 items-center p-4 rounded-md flex-col w-full md:h-32 mb-10 md:mb-0 pl-3 ">
      <div className=" flex-1 text-3xl text-center md:text-start font-bold">
        {t("Have a project")}
      </div>
      <div className="flex md:flex-row flex-col items-center gap-2">
        <p className="w-60 text-sm text-center md:text-end text-neutral-400">
          {t("Let's work together to bring your vision to life!")}
        </p>
        <ConnectActionButton word={t("Connect me")} link={whatsappLink} />
      </div>
    </div>
  );
}
