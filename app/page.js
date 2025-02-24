
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100 h-full">
      <section className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[60vh] bg-purple-100">
        {/* Text Section */}
        <div className="bg-purple-100 flex flex-col justify-center items-center gap-6 px-4 py-6 md:py-0">
          <h1 className="text-center text-3xl md:text-5xl font-bold">
            Shorten your URLs in seconds
          </h1>
          <p className="text-center text-lg md:text-xl text-gray-700">
            The best URL shortener in the market
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/shorten">
              <button className="text-white bg-purple-700 hover:bg-purple-800 transition rounded-lg px-6 py-3 font-semibold">
                Try Now
              </button>
            </Link>
            <Link href="/github">
              <button className="text-white bg-purple-700 hover:bg-purple-800 transition rounded-lg px-6 py-3 font-semibold">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="bg-purple-100 relative w-full h-[300px] md:h-full">
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            fill={true}
            src="/vector.jpg"
            alt="hero"
            priority
          />
        </div>
      </section>
      
    </main>
  );
}
