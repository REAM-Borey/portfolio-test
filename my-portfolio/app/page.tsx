import Image from "next/image";
import HeroSection from "../components/Hero";
import FeaturesSection from "../components/Projects";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AboutMe />
      <Education />
    </>
  );
}
