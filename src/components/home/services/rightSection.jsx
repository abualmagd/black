import { whatsappLnk } from "../../../data/const";

export function RightSection() {
  return (
    <div className="flex flex-col h-96 justify-evenly ">
      <ServiceCard
        title={"Portifolio Building"}
        details={"Build attractive portfolio for you or your company"}
        icon={"go"}
      />
      <ServiceCard
        title={"Blog Development"}
        details={"build attractive portfolio for you or your company"}
        icon={"go"}
      />
      <ServiceCard
        title={"Education Platforms"}
        details={
          "Develop interactive educational platforms that enhance learning."
        }
        icon={"go"}
      />
      <ServiceCard
        title={"News Application"}
        details={
          "Create dynamic news applications that deliver the latest updates and engage your readers."
        }
        icon={"go"}
      />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function ServiceCard({ title, details, icon }) {
  return (
    <div className=" flex w-80  items-center">
      <div className="left-sect-data flex-1">
        <div className="card-head-service font-bold mb-1">{title}</div>
        <h4 className="details-serv w-60 text-sm text-neutral-400">
          {details}
        </h4>
      </div>
      <a
        href={whatsappLnk}
        target="_blank"
        className="icon-part-right rounded-full cursor-pointer hover:bg-primary hover:animate-bounce  glass w-10 h-10 flex justify-center items-center "
      >
        {icon}
      </a>
    </div>
  );
}
