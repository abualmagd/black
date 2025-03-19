import { FaArrowRight } from "react-icons/fa";
import { myMail } from "../../data/const";
import { useTranslation } from "react-i18next";

export function AboutPart() {
  return (
    <section className=" flex  justify-between  md:flex-row flex-col w-full  items-center my-20  md:px-20 ">
      <LeftPart />
      <RightPart />
    </section>
  );
}

function LeftPart() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-72 h-full justify-center md:mt-0 mt-10">
      <div className="title-left-part text-sm text-red-500">{t("aboutMe")}</div>
      <h3 className=" line-clamp-3 my-2 font-semibold">{t("aboutMeP1")}</h3>
      <p className="text-xs line-clamp-4 text-neutral-400">{t("aboutMep2")}</p>
    </div>
  );
}

function RightPart() {
  const { t } = useTranslation();
  const openEmail = () => {
    const subject = t("subject");
    const body = t("body");
    window.location.href = `mailto:${myMail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };
  return (
    <div className="flex flex-col h-full justify-center md:mt-0 mt-10 w-60">
      <h5 className=" capitalize mb-8 font-bold text-xl"> {t("query")}</h5>
      <div className="flex flex-col">
        <div className="text-xs text-neutral-50">{t("connect")}</div>
        <div className="email-sec text-red-400 flex gap-1">
          <p className="email-c">{myMail}</p>
          <FaArrowRight
            className="mt-1.5  cursor-pointer text-gray-400"
            onClick={openEmail}
          />
        </div>
      </div>
    </div>
  );
}
