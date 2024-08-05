

export function Footer(){
     
    const listcompany=['google','facenook','alaraby','hello','scratch','alaraby','hello','scratch'];



    return <footer className=" flex flex-col md:h-72  w-full pb-8 bg-base-200 p-5 ">
        <h6 className="  capitalize text-center text-xl font-semibold mb-2"> worked for big top companies</h6>
        <ul className="flex flex-wrap justify-center mx-auto">
            {listcompany.map((c,i)=>{
                return  <li className="mx-2" key={i}>{c}</li >
            })}
            
           
        </ul>
        <div className="footer-tail mt-10 h-full flex md:flex-row flex-col w-full justify-between md:items-center">
            <FirstPart />
            <Links />
            <LastPart />
        </div>
    </footer>
}


function FirstPart(){

    return <div>
        <p className="w-72 mr-6 text-sm text-neutral-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Iusto laborum in doloribus.
        </p>
        <div className=" font-bold cursor-pointer my-3">
        Lets chat
        </div>
        <p className="w-60 text-sm text-neutral-400">
            Lorem ipsum dolor sit amet consectetur.
        </p>
    </div>
}


function Links(){

    return     <ul className="menu menu-vertical px-1">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 3</a></li>
    <li><a>Item 4</a></li>
</ul>
}


function LastPart(){

    return <div className="flex flex-col">
        <div className="email-footer">
            <span className=" text-primary"> emailshjs</span>
            @gmail.com
        </div>
        <p className=" text-sm text-neutral-400">
            Lorem ipsum dolor sit amet consectetur.
        </p>
    </div>
}