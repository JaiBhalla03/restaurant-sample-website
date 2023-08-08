import Image from 'next/image'
import {Noto_Sans_Cherokee} from "next/dist/compiled/@next/font/dist/google";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="">
        {/*<Navbar/>*/}
        <Hero/>
        <About/>
    </main>
  )
}
