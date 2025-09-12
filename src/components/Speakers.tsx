export default function Speakers() {
  const speakers = [
    {
      name: "Coming Soon",
      role: "Industry Expert",
      company: "TBA",
      bio: "Stay tuned for announcements of our amazing speaker lineup!",
      image: "/placeholder-speaker.jpg"
    },
    {
      name: "Coming Soon",
      role: "Tech Leader",
      company: "TBA",
      bio: "We're curating an exceptional group of speakers for you.",
      image: "/placeholder-speaker.jpg"
    },
    {
      name: "Coming Soon",
      role: "Innovation Pioneer",
      company: "TBA",
      bio: "Get ready to learn from the best in the industry.",
      image: "/placeholder-speaker.jpg"
    }
  ];

  return (
    <section id="speakers" className="py-20 bg-bitconf-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Speakers</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Learn from industry leaders and experts who are shaping the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-bitconf-primary/20">
              <div className="h-64 bg-gradient-to-br from-bitconf-secondary to-bitconf-primary flex items-center justify-center">
                <div className="text-white text-6xl">👤</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{speaker.name}</h3>
                <p className="text-bitconf-primary font-medium mb-2">{speaker.role}</p>
                <p className="text-gray-400 text-sm mb-3">{speaker.company}</p>
                <p className="text-gray-300 text-sm">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">
            Want to speak at BitConf 4th Edition?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button className="bg-bitconf-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-bitconf-primary/80 transition-colors">
              Submit Your Proposal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
