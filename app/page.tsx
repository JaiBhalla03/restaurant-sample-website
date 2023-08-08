import Image from 'next/image'
import {Noto_Sans_Cherokee} from "next/dist/compiled/@next/font/dist/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="bg-[#285f58]">
        {/*<Navbar/>*/}
        <Hero/>
        <About/>
        <Menu/>
        <Footer/>
    </main>
  )
}
