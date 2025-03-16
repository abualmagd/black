import { FaArrowRight } from "react-icons/fa";
import { aboutMeP1, aboutMep2, myMail } from "../../data/const";

export function AboutPart() {
  return (
    <section className=" flex  justify-between  md:flex-row flex-col w-full  items-center my-20  md:px-20 ">
      <LeftPart />
      <RightPart />
    </section>
  );
}

function LeftPart() {
  return (
    <div className="flex flex-col w-72 h-full justify-center md:mt-0 mt-10">
      <div className="title-left-part text-sm text-red-500">
        about me --------
      </div>
      <h3 className=" line-clamp-3 my-2 font-semibold">{aboutMeP1}</h3>
      <p className="text-xs line-clamp-4 text-neutral-400">{aboutMep2}</p>
    </div>
  );
}

function RightPart() {
  const openEmail = () => {
    const subject = "Hello connect for ....";
    const body = "Your query here";
    window.location.href = `mailto:${myMail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };
  return (
    <div className="flex flex-col h-full justify-center md:mt-0 mt-10 w-60">
      <h5 className=" capitalize mb-8 font-bold text-xl">
        {" "}
        Any type of query <br />
        and discussion
      </h5>
      <div className="flex flex-col">
        <div className="text-xs text-neutral-50">connect with us</div>
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
