import { Footer } from "./footer";
import { LetWork } from "./letWork";
import {MyHeader} from "./header";

// eslint-disable-next-line react/prop-types
export function Layout({children}){

    return <div className="layout-main  bg-base-100 flex items-center  flex-col   w-full justify-start md:px-20 ">
         <MyHeader />
        {children}
        <LetWork />
        <Footer />
    </div>
}