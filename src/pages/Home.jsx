import Banner from "../components/Home/Banner"
import BrowseCourse from "../components/Home/BrowseCourse"
import CTA from "../components/Home/CTA"
import ExploreCourse from "../components/Home/ExploreCourse"
import FAQ from "../components/Home/FAQ"
import HowItWorks from "../components/Home/HowItWorks"
import Learner from "../components/Home/Learner"
import PopularCourses from "../components/Home/PopularCourses"

function Home() {
  return <>
    <Banner />
    <HowItWorks />
    <ExploreCourse />
    <PopularCourses />
    <BrowseCourse />
    <Learner />
    <FAQ />
    <CTA />
  </>
}

export default Home 