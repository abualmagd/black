import { useTranslation } from "react-i18next";
import { whatsappLnk } from "../../../data/const";

export function RightSection() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col h-96 justify-evenly ">
      <ServiceCard
        title={t("Portifolio Building")}
        details={t("Build attractive portfolio for you or your company")}
        icon={t("go")}
      />
      <ServiceCard
        title={t("Blog Development")}
        details={t(
          "Create a high-speed blog optimized for SEO to achieve strong rankings in search engines."
        )}
        icon={t("go")}
      />
      <ServiceCard
        title={t("Education Platforms")}
        details={t(
          "Develop interactive educational platforms that enhance learning."
        )}
        icon={t("go")}
      />
      <ServiceCard
        title={t("News Application")}
        details={t(
          "Create dynamic news applications that deliver the latest updates and engage your readers."
        )}
        icon={t("go")}
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
