import Link from "next/link";
import { Spotlight } from "./Spotlight";

export default function HeroSection() {
    return (
        <div className="relative w-full h-auto md:h-[40rem] rounded-md flex flex-col 
        justify-center  overflow-hidden mx-auto py-10 bg-grid-white/[0.02]">
      <Spotlight
        className="-top-40 left-0 md:left-20 md:-top-20"
        fill="white"
      />            
            
            <div className="p-4 relative z-10 w-full">
                <h1 className="text-4xl mt-20 md:mt-0 md:text-7xl font-bold bg-clip-text text-transparent 
                bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
                     Master The Art Of Music 
                </h1>
                <p className="mt-4 font-normal text-base text-center md:text-lg text-neutral-300 max-w-lg mx-auto">
                    Learn to play the guitar, 
                    sing and danceLearn to play the guitar, 
                    sing and danceLearn to play the guitar,
                    sing and dance. Learn to play the guitar, sing and dance
                    . Learn to play the guitar, sing and dance </p>
                <div className="mt-4">
                    <Link href={"/cources"}>
                    Explore Cources
                    </Link>
                </div>
            </div>
        </div>
    )
}