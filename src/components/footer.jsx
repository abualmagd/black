import { Link } from "react-router";
import { myMail, myNumber, mySkills, whatsMessage } from "../data/const";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className=" flex flex-col md:h-72  w-full pb-8 bg-base-200 p-5 ">
      <h6 className="  capitalize text-center text-xl font-semibold mb-2">
        {" "}
        {t("Skills and Technology I know")}
      </h6>
      <ul className="flex flex-wrap justify-center mx-auto">
        {mySkills.map((c, i) => {
          return (
            <li className="mx-2 text-base-content/40" key={i}>
              {t(String(c))}
            </li>
          );
        })}
      </ul>
      <div className="footer-tail mt-10 h-full flex items-center md:flex-row flex-col w-full justify-between md:items-center">
        <FirstPart />
        <Links />
        <LastPart />
      </div>
    </footer>
  );
}

function FirstPart() {
  const { t } = useTranslation();
  const whatsappLink = `https://wa.me/${myNumber}?text=${encodeURIComponent(
    whatsMessage
  )}`;
  return (
    <div>
      <p className="w-72   text-sm text-neutral-400">
        {t("Feel free to ask any quistion, happy to help.")}
      </p>
      <a
        href={whatsappLink}
        target="_blank"
        className="text-primary font-bold cursor-pointer my-3"
      >
        {t("Let's chat")}
      </a>
      <p className="w-60 text-sm text-neutral-400">
        {t("Consultation is free; ask whatever you want.")}
      </p>
    </div>
  );
}

function Links() {
  const { t } = useTranslation();
  return (
    <ul className="menu menu-vertical px-1">
      <li>
        <Link to="/">{t("home")}</Link>
      </li>
      <li>
        <Link to="/about">{t("about")}</Link>
      </li>
      <li>
        <a href="/#projects">{t("projects")}</a>
      </li>
    </ul>
  );
}

function LastPart() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <div className="email-footer">
        <span className=" text-primary"> {myMail.split("@")[0]}</span>
        @gmail.com
      </div>
      <a href={`mailto:${myMail}`} className=" text-sm text-neutral-400">
        {t("Shoot me a message.")}
      </a>
    </div>
  );
}
