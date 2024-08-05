


export function LeftSection(){
    return <div className=" flex flex-col  items-start h-96  justify-evenly">
        <div className="left-section-head">
            <div className="font-bold text-xl capitalize">
            services
        </div>
        <p className="text-sm textarea-info m-4 ml-0 w-72 line-clamp-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
             Obcaecati, possimus ea perferendis in cupiditate quo nostrum accusantium culpa natus quod, 
            unde consequuntur dolor saepe voluptas voluptatem libero, aperiam rem incidunt.
        </p> 
        </div>
        <div className="left-section-tail flex ">
        <div className="flex flex-col">
            <strong className="text-center text-xl">500</strong>
            <p>
                customers
            </p>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="flex flex-col">
            <strong className=" text-primary text-center text-xl">95%</strong>
            <p>
                completion
            </p>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="flex flex-col">
            <strong className="text-center text-xl">4.7</strong>
            <p>
                reviews
            </p>
        </div>
        </div>
       

    </div>
}