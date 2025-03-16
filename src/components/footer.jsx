import { Link } from "react-router";
import { myMail, myNumber, mySkills, whatsMessage } from "../data/const";

export function Footer() {
  return (
    <footer className=" flex flex-col md:h-72  w-full pb-8 bg-base-200 p-5 ">
      <h6 className="  capitalize text-center text-xl font-semibold mb-2">
        {" "}
        Skills and Technology I know
      </h6>
      <ul className="flex flex-wrap justify-center mx-auto">
        {mySkills.map((c, i) => {
          return (
            <li className="mx-2" key={i}>
              {c}
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
  const whatsappLink = `https://wa.me/${myNumber}?text=${encodeURIComponent(
    whatsMessage
  )}`;
  return (
    <div>
      <p className="w-72 mr-6  text-sm text-neutral-400">
        Feel free to ask any quistion, happy to help.
      </p>
      <a
        href={whatsappLink}
        target="_blank"
        className=" font-bold cursor-pointer my-3"
      >
        Lets chat
      </a>
      <p className="w-60 text-sm text-neutral-400">
        Consultation is free; ask whatever you want.
      </p>
    </div>
  );
}

function Links() {
  return (
    <ul className="menu menu-vertical px-1">
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <a href="/#projects">projects</a>
      </li>
    </ul>
  );
}

function LastPart() {
  return (
    <div className="flex flex-col">
      <div className="email-footer">
        <span className=" text-primary"> {myMail.split("@")[0]}</span>
        @gmail.com
      </div>
      <a href={`mailto:${myMail}`} className=" text-sm text-neutral-400">
        Shoot me a message.
      </a>
    </div>
  );
}
