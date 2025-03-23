import { NavLink } from "react-router";
import { title } from "../data/const";
import { ActionButton } from "./utils";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router";

export function MyHeader() {
  const { i18n } = useTranslation();
  const [isOpen, setOpen] = useState(false);

  const [currentLang] = useState(() => i18n.language.split("-")[0]);

  const projectsLink =
    useLocation().pathname === "/" ? "#projects" : "projects";
  const { t } = useTranslation();
  const dropRef = useRef();

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const changeMyLanguage = (e, lang) => {
    e.stopPropagation();
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  useEffect(() => {
    function closeDrop(event) {
      if (dropRef.current && event.target.id !== "k") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", closeDrop);

    return () => {
      document.removeEventListener("mousedown", closeDrop);
    };
  }, [dropRef]);

  return (
    <header className="navbar mr-0 z-10">
      <NavLink to={"/"} className="flex btn  btn-ghost text-xl">
        <img src="/logo-white.svg" className="h-10 w-10" alt="" />
        {title}
      </NavLink>
      <div className="flex-1"></div>
      <div className="navbar-end hidden md:flex"></div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-2 capitalize">
          <li>
            <NavLink to="/">{t("home")}</NavLink>
          </li>
          <li>
            <NavLink to="/about">{t("about")}</NavLink>
          </li>
          <li>
            <a href={projectsLink}>{t("projects")}</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className=" flex flex-col relative">
          <div
            onClick={() => setOpen(!isOpen)}
            className=" cursor-pointer h-7 w-6 rounded mx-1 border-2 border-base-content/20 text-center"
          >
            {currentLang === "en" ? "en" : "عر"}
          </div>
          {isOpen && (
            <motion.ul
              variants={variants}
              animate={isOpen ? "open" : "closed"}
              className="absolute top-10 left-0 py-2 px-5 rounded bg-neutral"
            >
              <li className="cursor-pointer">
                <button
                  id="k"
                  disabled={currentLang === "en"}
                  style={{
                    color: currentLang === "ar" ? "#FFB822" : "GrayText",
                  }}
                  onClick={(e) => changeMyLanguage(e, "en")}
                >
                  English
                </button>
              </li>
              <li className=" cursor-pointer">
                <button
                  id="k"
                  disabled={currentLang === "ar"}
                  style={{
                    color: currentLang === "en" ? "#FFB822" : "GrayText",
                  }}
                  onClick={(e) => changeMyLanguage(e, "ar")}
                >
                  عربي
                </button>{" "}
              </li>
            </motion.ul>
          )}
        </div>
        <div className="hidden md:flex">
          <ActionButton word={t("book a call")} link={"/connect"} />
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost mx-0 md:hidden"
          >
            <svg
              fill="#ffffff"
              width="256px"
              height="256px"
              viewBox="0 0 32.00 32.00"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              className=" h-8 w-8 "
            >
              <g id="SVGRepo_bgCarrier"></g>
              <g id="SVGRepo_tracerCarrier"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>menu</title>{" "}
                <path d="M8 24h16v-4h-16v4zM8 18.016h16v-4h-16v4zM8 12h16v-4h-16v4z"></path>{" "}
              </g>
            </svg>
          </div>
          <ul
            ref={dropRef}
            className="menu menu-lg z-50 justify-center items-center dropdown-content capitalize  bg-neutral rounded-box  mt-3 p-2 w-52 shadow"
          >
            <li>
              <NavLink to="/">{t("home")}</NavLink>
            </li>
            <li>
              <NavLink to="/about">{t("about")}</NavLink>
            </li>
            <li>
              <a href={projectsLink}>{t("projects")}</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
