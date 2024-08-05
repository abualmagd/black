import { ConnectActionButton } from "./utils";


export function LetWork(){

    return <div className=" flex md:flex-row flex-col w-full h-32 mb-10 md:mb-0 pl-3 ">
        <div className=" flex-1 text-3xl font-bold">
            Have a project <br/>or idea 
        </div>
        <div className="flex">
        <p className="w-60 text-sm text-neutral-400">
            Lorem ipsum dolor sit amet consectetur.
        </p>
        <ConnectActionButton  word={'Connect me'} link={'/'}/>
        </div>
    </div> 
}