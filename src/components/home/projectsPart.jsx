export function ProjectsPart() {
  const projects = [1, 2, 3, 4, 5];
  return (
    <section className="my-10" id="projects">
      <div>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-xl font-bold tracking-tight capitalize ">
            Discover our live projects
          </h2>
          <h3 className=" mt-4 text-center text-lg text-slate-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
          </h3>

          <div className="  mt-8 grid md:grid-cols-3 gap-1 grid-cols-1  justify-center w-full  ">
            {projects.map((p, i) => {
              if (i < 3) {
                return <ProjrectCard key={i} />;
              }
              return null;
            })}
          </div>
          <div className="flex text-center w-full justify-center">
            <a
              href="/projects"
              className=" btn btn-outline btn-wide text-center mt-3 hover:scale-105 border-solid border-2 border-gray-200   "
            >
              Show more projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProjrectCard() {
  return (
    <div className="card bg-base-100 image-full m-2 max-w-96 shadow-md">
      <figure>
        <img src="src/assets/proj.jpg" alt="Web design" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-white px-4 py-2 rounded ">
          Web design!
        </h2>
        <p className=" line-clamp-2 text-white px-4 py-1 rounded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, aspernatur voluptate? Recusandae eveniet fugiat
          inventore repudiandae, est modi vel molestiae, maxime aut sint
          blanditiis soluta! Explicabo vero tempore ad adipisci?
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary bg-slate-100">live preview</button>
        </div>
      </div>
    </div>
  );
}
