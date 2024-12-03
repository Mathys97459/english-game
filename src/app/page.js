import Image from "next/image";
import Header from "../app/components/Header"
import Games from "../app/components/Games"
import HeroSection from "../app/components/HeroSection"

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Games/>
    </>
  );
}
