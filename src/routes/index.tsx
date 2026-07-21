import { Title } from "@solidjs/meta";
import HeroSection from "~/components/HeroSection";
import About from "~/components/About";
import Skills from "~/components/Skills";

export default function Home() {
  return (
    <>
      <Title>Dawid Masiarz | Portfolio</Title>
      <HeroSection/>
      <About/>
      <Skills/>
    </>
  );
}
