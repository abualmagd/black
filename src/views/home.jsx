import { AboutPart } from "../components/home/about";
import { NewHomeMain } from "../components/home/main";
import { ProjectsPart } from "../components/home/projectsPart";
import { ServicesSection } from "../components/home/services";
import { Testimonial } from "../components/home/testimon";
import { Layout } from "../components/layout";
import { miniTestMonialdata } from "../data/const";

export default function Home() {
  return (
    <Layout>
      <NewHomeMain />
      <AboutPart />
      <ServicesSection />
      <ProjectsPart />
      <Testimonial data={miniTestMonialdata} readMore={false} />
    </Layout>
  );
}
