


export function AboutCustomers(){

    return <section className="flex md:flex-row flex-col md:h-80 mb-20 justify-evenly w-full bg-base-300 py-10">
        <div className="right-sec-about flex flex-col justify-between md:items-start items-center ">
        <p className="text-sm textarea-info m-4 ml-0 w-80 line-clamp-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Obcaecati, possimus ea perferendis in cupiditate quo nostrum accusantium culpa natus quod, 
            unde consequuntur dolor saepe voluptas voluptatem libero, aperiam rem incidunt.
        </p> 
        <div className="left-section-tail flex ">
        <div className="flex flex-col">
            <strong className="text-center text-xl">500</strong>
            <p>
                customers
            </p>
        </div>
        <div className="divider divider-horizontal bg-transparent"></div>
        <div className="flex flex-col">
            <strong className=" text-primary text-center text-xl">95%</strong>
            <p>
                completion
            </p>
        </div>
        <div className="divider divider-horizontal bg-transparent"></div>
        <div className="flex flex-col">
            <strong className="text-center text-xl">4.7</strong>
            <p>
                reviews
            </p>
        </div>
        </div>
        </div>
        <div className="flex left-about-sec relative md:w-1/3 w-full mt-16">
        <div className="md:w-1/4 w-1/3"></div>
        <img src="./src/assets/polly.png" alt="hello"  className=" h-2/3"/>
        <div className="uppercase absolute top-6 md:-left-8 left-10 text-2xl font-bold">
        Get The Fast website ever
        <br/>
        with best seo. 
        </div>
        </div>
    </section>
}