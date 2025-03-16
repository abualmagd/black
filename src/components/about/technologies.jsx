//or skills
export function Technologies() {
  return (
    <div className="skills mb-20 w-full">
      <h3 className=" text-2xl font-bold mb-5 ml-5 text-primary capitalize">
        Skills and Technologies we offer
      </h3>
      <div className="flex md:flex-row flex-col w-full md:h-72 justify-between   items-center">
        <div className="left-image-tech md:w-1/2 m-4 ">
          <img
            src="./src/assets/skls.webp"
            alt="skills technology"
            className=" h-60"
          />
        </div>

        <div className=" grid grid-cols-2 gap-3  md:w-1/3 w-4/5 mx-auto   justify-center items-center h-60">
          <div>Nextjs</div>
          <div>Reactjs</div>
          <div>Laravel</div>
          <div>Supabase</div>
          <div>Firebase</div>
          <div>NodeJs</div>
          <div>Postegresql</div>
          <div>Firebase</div>
        </div>
      </div>
    </div>
  );
}
