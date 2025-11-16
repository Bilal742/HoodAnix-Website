import Hero from "./component/Hero/Hero";
import HomeAboutSection from "./component/HomeAboutSection/HomeAboutSection";
import HomeCategoriesSection from "./component/HomeCategoriesSection/HomeCategoriesSection";
import HomeContactSection from "./component/HomeContactSection/HomeContactSection";
import HomeServicesSection from "./component/HomeServicesSection/HomeServicesSection";

function Home() {


  return (
    <div>
      <Hero />
      <HomeAboutSection />
      <HomeCategoriesSection />
      <HomeServicesSection />
      <HomeContactSection />
    </div>
  );
}

export default Home