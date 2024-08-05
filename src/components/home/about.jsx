

export  function AboutPart(){

    return <section className=" flex  justify-between  md:flex-row flex-col w-full  items-center my-20  md:px-20 "> 
        <LeftPart />
        <RightPart />
    </section>
}


function LeftPart(){

    return <div className="flex flex-col w-72 h-full justify-center md:mt-0 mt-10">
            <div className="title-left-part text-sm text-red-500">
                about me --------
            </div>
            <h3 className=" line-clamp-3 my-2 font-semibold">
                You cannot use Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Necessitatibus, repellat. Quidem, corporis unde a exercitationem inventore 
                ]atque laudantium totam fugit voluptatum ipsa nostrum, dolor, 
                tenetur dicta perferendis pariatur! Officia, consequuntur!
            </h3>
            <p className="text-xs line-clamp-3 text-neutral-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Eos sint minima et labore eius,
                 tempore sed esse ullam unde?
                 Blanditiis in eligendi quisquam iste maiores sapiente numquam vel, repellendus animi.
            </p>
    </div>
}

function RightPart(){

    return <div className="flex flex-col h-full justify-center md:mt-0 mt-10 w-60">

        <h5 className=" capitalize mb-8 font-bold text-xl"> Any type of query <br/>and discussion</h5>
        <div className="flex flex-col">
            <div className="text-xs text-neutral-50">
                connect with us
            </div>
            <div className="email-sec text-red-400 flex justify-between">
                <p className="email-c">emailnin@gmail.com</p>
                <div className="icon-arrow cursor-pointer">----</div>
            </div>
        </div>

    </div>
}