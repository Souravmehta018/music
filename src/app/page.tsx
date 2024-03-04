import HeroSection from '../components/HeroSection';
import FeaturedCources from '../components/FeaturedCources';


export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black/[0.96] antialiased text-white 
    justify-center bg-grid-white/[0.02]">
        <HeroSection />
        <FeaturedCources />
    </main>
  );
}
