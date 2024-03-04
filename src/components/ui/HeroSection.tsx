import Link from "next/link";

export default function HeroSection() {
    return (
        <div className="relative w-full h-auto md:h-[40rem] rounded-md flex flex-col 
        justify-center items-center overflow-hidden mx-auto py-10 bg-grid-white/[0.02]">
            
            <div className="p-4 relative z-10 w-full text-cnter">
                <h1 className="text-4xl mt-20 md:mt-0 md:text-7xl font-bold bg-clip-text text-transparent 
                bg-gradient-to-b from-neutral-50 to-neutral-400">
                     Master The Art Of Music 
                </h1>
                <p className="text-sm text-cnter"> Learn to play the guitar, 
                sing and danceLearn to play the guitar, 
                sing and danceLearn to play the guitar, sing and dance. Learn to play the guitar, sing and dance </p>
                <div className="mt-4">
                    <Link href={"/cources"}>
                    Explore Cources
                    </Link>
                </div>
            </div>
        </div>
    )
}