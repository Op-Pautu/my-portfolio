import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col h-full px-4 lg:flex-row sm:px-8 md:px-12 lg:pg-20 xl:px-48">
      <div id="imageContainer" className="relative w-1/2 h-1/2 lg:h-full">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>
      <div
        id="textContainer"
        className="flex flex-col items-center justify-center w-1/2 gap-8 h-1/2 lg:h-full"
      >
        <h1 className="text-4xl font-bold md:text-6xl">
          Designing Tomorrow: A Portfolio of Inspiring Projects
        </h1>
        <p className="md:text-xl">
          Every project tells a story, and I'm here to share mine. From concept
          to execution, my portfolio reflects my dedication to excellence and
          craftsmanship.
        </p>
        <div className="flex gap-4">
          <button className="p-4 text-white bg-black rounded-lg ring-1 ring-black">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">
            Contact Me
          </button>
        </div>
      </div>
    </main>
  );
}
