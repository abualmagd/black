/* eslint-disable react/prop-types */
import { myProjects } from "../../data/const";
import { useTranslation } from "react-i18next";

export function ProjectsPart() {
  const { t } = useTranslation();
  return (
    <section className="my-10" id="projects">
      <div>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-xl font-bold tracking-tight capitalize ">
            {t("Discover my live projects")}
          </h2>
          <h3 className=" mt-4 text-center text-lg text-slate-500">
            {t("Take a look at a small selection of my projects.")}{" "}
          </h3>

          <div className="  mt-8 grid md:grid-cols-3 gap-1 grid-cols-1  justify-center w-full  ">
            {myProjects.map((p, i) => {
              if (i < 3) {
                return <ProjrectCard project={p} key={i} />;
              }
              return null;
            })}
          </div>
          <div className="flex text-center w-full justify-center">
            <a
              href="/projects"
              className="  btn btn-outline btn-wide text-center mt-3 hover:scale-105 border-solid border-2 border-gray-200   "
            >
              {t("Show more projects")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// eslint-disable-next-line react/prop-types
export function ProjrectCard({ project }) {
  const { t } = useTranslation();
  return (
    <div className="card bg-base-100 image-full m-2 max-w-96 shadow-md">
      <figure>
        <img src={project.image} alt="Web design" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-white px-4 py-2 rounded ">
          {t(project.name)}
        </h2>
        <p className=" line-clamp-2 overflow-hidden text-white px-4 py-1 rounded">
          {t(String(project.description))}
        </p>
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
  );
}
