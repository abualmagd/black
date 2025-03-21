/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";
import { Layout } from "../components/layout";
import { myProjects } from "../data/const";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Layout>
      <ProjectList />
    </Layout>
  );
}

export function ProjectList() {
  return (
    <ul
      id="my-projectList"
      className=" flex flex-col gap-20 w-full overflow-x-hidden  my-20 "
    >
      {myProjects.map((p, i) => {
        return (
          <li key={i} className="md:w-5/6 w-[90vw]">
            <ProjectBigCard project={p} />
          </li>
        );
      })}
    </ul>
  );
}

export function ProjectBigCard({ project }) {
  const { t } = useTranslation();

  return (
    <div className="projy-card w-full relative  h-[480px]  rounded shadow-2xl ">
      <figure className="h-full w-full z-0 rounded">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full rounded"
        />
      </figure>
      <div className="content flex flex-col justify-end items-start absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-60 ">
        <div className="data mb-20 md:mx-20 mx-2 flex flex-col gap-6 w-1/2 md:px-10 ">
          <h1 className=" text-4xl font-extrabold">{t(project.name)}</h1>
          <p className=" text-lg line-clamp-3">{t(project.description)}</p>
          <div className="card-actions justify-end">
            <a
              href={project.link}
              target="_blank"
              className="btn btn-primary bg-slate-100"
            >
              {t("live preview")}
            </a>
          </div>
        </div>
      </div>
      <DetailsLayer details={project.details} />
    </div>
  );
}

export function DetailsLayer({ details }) {
  const variant = {
    offscreen: { width: "0" },
    onscreen: { width: "40%" },
  };

  const { t } = useTranslation();
  return (
    <motion.div
      initial={variant.offscreen}
      whileInView={variant.onscreen}
      className="details-layer absolute top-0 z-20 w-1/2 bg-base-300 h-full flex flex-col md:flex-row justify-evenly items-center"
      style={{
        left: t("dir") === "rtl" ? "0px" : "",
        right: t("dir") === "ltr" ? "0px" : "",
      }}
    >
      <ul className=" ">
        <li className=" text-lg font-bold my-3">{t("Technology")}</li>
        {details.tech.map((tech, i) => {
          return (
            <li key={i} className=" my-1 ml-2">
              {t(tech)}
            </li>
          );
        })}
      </ul>
      <div>
        <h3 className=" text-lg font-bold my-5">{t("Hosting")}</h3>
        <div>{t(details.hosting)}</div>
      </div>
    </motion.div>
  );
}
