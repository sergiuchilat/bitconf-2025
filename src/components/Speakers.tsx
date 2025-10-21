export default function Speakers() {
  const speakers = [
    {
      name: "Veronica Covali",
      role: "Entrepreneur, angel investor, and Co-Founder",
      company: "Stilio.md",
      companyLink: "https://stilio.md/",
      bio: "Tech Movers: From Ideas to Startups",
      image: "/speakers/Website speaker - Veronica Covali.png"
    },
    {
      name: "Radu Dumbraveanu",
      role: "Tech Leader",
      company: "AmSoft Group",
      companyLink: "https://amsoft-group.com",
      bio: "Collected Insights (2024–2025): Docker, Java, Vim, Linux, etc.",
      image: "/speakers/Website speaker - Radu Dumbraveanu.png"
    },
    {
      name: "Adrian Romanov",
      role: "Full-stack Software Engineer",
      company: "Cegeka",
      companyLink: "https://cegeka.com/",
      bio: "From Code to Impact: How to Bring Value Beyond Code",
      image: "/speakers/Website speaker - Adrian Romanov.png"
    },
    {
      name: "Roman Fiodorov",
      role: "Founder Filosoft Company, Tech-Lead",
      company: "Aiomed.com",
      companyLink: "https://aiomed.com/",
      bio: "Chasing the AI Hype: A Senior Developer’s Perspective",
      image: "/speakers/Website speaker - Roman Fiodorov.png"
    },
    {
      name: "Diana Lari",
      role: "Former Product Owner",
      company: "_",
      bio: "I Logged Out: What Happens After You Leave IT?",
      image: "/speakers/Website speaker - Diana Lari.png"
    },
    {
      name: "Eugen Zagorcea",
      role: "Principal QA Engineer",
      company: "flow48.com",
      companyLink: "https://flow48.com",
      bio: "How to test an API in the era of AI",
      image: "/speakers/Website speaker - Eugen Zagorcea.png"
    },
    {
      name: "Petru Maleru",
      role: "General Manager",
      company: "Association of Recruitment Agencies (ARA)",
      companyLink: "https://ara.md",
      bio: "The Recruiter's Playbook: Turning Teams into Innovation Engines",
      image: "/speakers/Website speaker - Petru Maleru.png"
    },
    {
      name: "Radu Tataru",
      role: "Delivery Director SER Region, Amdaris, Entrepreneur, Commercial mentor and Ironman athlete",
      company: "Amdaris",
      companyLink: "https://amdaris.com",
      bio: "Pitch It. Scope It. Deliver It. How to sell ambitiously and deliver delight by design",
      image: "/speakers/Website speaker - Radu Tataru.png"
    },
    {
      name: "Sergiu Chilat",
      role: "DevOps Engineer & Team Lead",
      company: "Adtelligent",
      companyLink: "https://adtelligent.com",
      bio: "Balancing AI and Traditional Methods in IT: From Academia to Industry",
      image: "/speakers/Website speaker - Sergiu Chilat.png"
    }

  ];

  const shuffledSpeakers = speakers.sort(() => 0.5 - Math.random());


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
          {shuffledSpeakers.map((speaker, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-bitconf-primary/20">
              <div className="h-64 bg-gradient-to-br from-bitconf-secondary to-bitconf-primary flex items-center justify-center">
                <img src={speaker.image} alt=""/>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">{speaker.name}</h3>
                <p className="text-bitconf-primary font-medium mb-2">{speaker.role}</p>
                <p className="text-gray-400 text-sm mb-3">
                  <a href={speaker.companyLink} target={"_blank"} className={"underline"}>{speaker.company}</a>
                </p>
                <p className="text-gray-300 text-sm">{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
