import { useTranslation } from "react-i18next";

export function AboutCustomers() {
  const { t } = useTranslation();
  return (
    <section className="flex md:flex-row flex-col md:h-80 mb-20 justify-evenly w-full bg-base-300 py-10">
      <div className="right-sec-about flex flex-col justify-between md:items-start items-center ">
        <p className="text-sm textarea-info m-4 ml-0 w-80 line-clamp-5">
          {t("servsiceP")}
        </p>
        <div className="left-section-tail flex ">
          <div className="flex flex-col">
            <strong className="text-center text-xl">100</strong>
            <p>{t("customers")}</p>
          </div>
          <div className="divider divider-horizontal bg-transparent"></div>
          <div className="flex flex-col">
            <strong className=" text-primary text-center text-xl">95%</strong>
            <p>{t("completion")}</p>
          </div>
          <div className="divider divider-horizontal bg-transparent"></div>
          <div className="flex flex-col">
            <strong className="text-center text-xl">4.7</strong>
            <p>{t("reviews")}</p>
          </div>
        </div>
      </div>
      <div className="flex left-about-sec relative md:w-1/3 w-full mt-16">
        <div className="md:w-1/4 w-1/3"></div>
        <img
          src="/assets/fast.png"
          alt="hello"
          className=" md:h-4/5 h-40  md:-mt-10 filter grayscale brightness-50"
        />
        <div className="uppercase absolute  drop-shadow-md top-6 md:-left-8 left-10 text-2xl font-bold">
          {t("Get The Fast website ever")}
          <br />
          {t("With best seo.")}
        </div>
      </div>
    </section>
  );
}
