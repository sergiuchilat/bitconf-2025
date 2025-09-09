export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About BitConf</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Moldova&apos;s leading technology conference bringing together innovators, developers, and tech enthusiasts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-bitconf-primary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-bitconf-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Innovation</h3>
            <p className="text-gray-300">Explore cutting-edge technologies and innovative solutions shaping the future of IT</p>
          </div>

          <div className="text-center">
            <div className="bg-bitconf-accent/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-bitconf-accent" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Community</h3>
            <p className="text-gray-300">Connect with like-minded professionals and build lasting relationships in the tech community</p>
          </div>

          <div className="text-center">
            <div className="bg-bitconf-secondary/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-bitconf-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Learning</h3>
            <p className="text-gray-300">Gain insights from industry experts and expand your knowledge through workshops and talks</p>
          </div>
        </div>

        <div className="bg-bitconf-dark/50 rounded-lg p-8 border border-bitconf-primary/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-bitconf-primary mb-2">4th</div>
              <div className="text-gray-300">Edition</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-bitconf-primary mb-2">150+</div>
              <div className="text-gray-300">Attendees</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-bitconf-primary mb-2">15+</div>
              <div className="text-gray-300">Speakers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-bitconf-primary mb-2">1</div>
              <div className="text-gray-300">Day</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
