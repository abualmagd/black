import { AboutMain } from "../components/about/aboutMain"
import { AboutCustomers } from "../components/about/customers"
import { Technologies } from "../components/about/technologies"
import { Layout } from "../components/layout"


export default function About(){


    return <Layout>
    <AboutMain />
    <AboutCustomers />
    <Technologies />
    
    </Layout>
}