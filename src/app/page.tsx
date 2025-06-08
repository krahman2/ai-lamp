import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="px-6 sm:px-12 lg:px-20 py-6">
        <nav className="flex justify-between items-center p-3 sm:p-4 bg-white/60 backdrop-blur-xl rounded-xl shadow-sm border border-gray-200/80">
          <div className="flex items-center space-x-3">
            <Image src="/ai-lapm logo.png" alt="AI-LAMP Logo" width={32} height={32} />
            <span className="text-lg font-bold tracking-tight">AI-LAMP</span>
          </div>
          <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <li><a href="#" className="hover:text-blue-600 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">People</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Research</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Gallery</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Events</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="text-center pt-16 pb-24 md:pt-20 md:pb-32 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-extrabold tracking-tighter">
              <span className="block text-4xl sm:text-5xl md:text-6xl text-gray-900">Artificial Intelligence Lab</span>
              <span className="block text-2xl sm:text-3xl md:text-4xl font-medium text-gray-500 my-3">for</span>
              <span className="block text-5xl sm:text-6xl md:text-7xl text-blue-600">Augmented Multimodal</span>
              <span className="block text-5xl sm:text-6xl md:text-7xl text-blue-600">Perception</span>
            </h1>
            <p className="mt-8 text-lg max-w-2xl mx-auto text-gray-600">
              Empowering human perception through AI-driven sensory augmentation and cutting-edge multimodal research.
            </p>
            <div className="mt-12">
              <a
                href="#"
                className="inline-block px-10 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                Explore Research
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
