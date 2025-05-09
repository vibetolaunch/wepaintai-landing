import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#5e3a9d] via-[#9b4f7f] to-[#f8976a] z-0"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 z-10">
        {/* Clouds */}
        <div className="absolute top-[10%] left-[15%]">
          <Image src="/images/cloud.png" alt="" width={120} height={60} />
        </div>
        <div className="absolute top-[15%] right-[20%]">
          <Image src="/images/cloud.png" alt="" width={150} height={75} />
        </div>
        <div className="absolute top-[40%] left-[10%]">
          <Image src="/images/cloud.png" alt="" width={100} height={50} />
        </div>

        {/* Stars */}
        <div className="absolute top-[20%] left-[50%]">
          <Image src="/images/star.png" alt="" width={20} height={20} />
        </div>
        <div className="absolute top-[15%] right-[10%]">
          <Image src="/images/star.png" alt="" width={10} height={10} />
        </div>
        <div className="absolute top-[50%] right-[15%]">
          <Image src="/images/star.png" alt="" width={10} height={10} />
        </div>
        <div className="absolute bottom-[30%] right-[5%]">
          <Image src="/images/star.png" alt="" width={15} height={15} />
        </div>

        {/* Birds */}
        <div className="absolute top-[30%] left-[5%]">
          <Image src="/images/birds.png" alt="" width={60} height={30} />
        </div>

        {/* Star wands */}
        <div className="absolute top-[25%] left-[20%] transform -rotate-12">
          <Image src="/images/star-wand.png" alt="" width={80} height={80} />
        </div>
        <div className="absolute top-[25%] right-[20%] transform rotate-12">
          <Image src="/images/star-wand.png" alt="" width={80} height={80} />
        </div>

        {/* Sun */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <Image src="/images/sun.png" alt="" width={300} height={150} />
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-md px-4 py-8 relative z-20">
        <h1 className="text-center text-white text-5xl md:text-6xl font-bold mb-12">
          Find Your
          <br />
          Happy Place
        </h1>

        <div className="space-y-6">
          <div className="bg-[#ffd6e0] bg-opacity-80 rounded-xl p-6">
            <h2 className="text-[#4a2b7d] text-xl font-semibold mb-2">What kind of place makes you smile?</h2>
            <p className="text-[#4a2b7d] opacity-70">e.g. beach, forest, mountain cabin</p>
          </div>

          <div className="bg-[#ffd6e0] bg-opacity-80 rounded-xl p-6">
            <h2 className="text-[#4a2b7d] text-xl font-semibold mb-2">What do you love doing there?</h2>
            <p className="text-[#4a2b7d] opacity-70">e.g. reading, swimming, dancing</p>
          </div>

          <div className="bg-[#ffd6e0] bg-opacity-80 rounded-xl p-6">
            <h2 className="text-[#4a2b7d] text-xl font-semibold mb-2">What are the vibes or feelings you want</h2>
            <p className="text-[#4a2b7d] opacity-70">e.g. cozy, wild, adventurous</p>
          </div>

          <button className="w-full bg-[#6c3db7] hover:bg-[#5c2da7] text-white font-bold py-4 px-6 rounded-full transition-all flex items-center justify-center text-xl">
            Take Me There <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </main>
  )
}
