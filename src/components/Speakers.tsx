'use client';

import { useState, useEffect } from 'react';

export default function Speakers() {
  const speakers = [
    {
      name: "Veronica Covali",
      role: "Entrepreneur, angel investor, and Co-Founder",
      company: "Stilio.md",
      companyLink: "https://stilio.md/",
      bio: "Tech Movers: From Ideas to Startups",
      image: "/speakers/Website speaker - Veronica Covali.png",
      linkedinUrl: "https://www.linkedin.com/in/veronicacovali"
    },
    {
      name: "Radu Dumbraveanu",
      role: "Tech Leader",
      company: "AmSoft Group",
      companyLink: "https://amsoft-group.com",
      bio: "Collected Insights (2024–2025): Docker, Java, Vim, Linux, etc.",
      image: "/speakers/Website speaker - Radu Dumbraveanu.png",
      linkedinUrl: "https://www.linkedin.com/in/radudumbraveanu"
    },
    {
      name: "Adrian Romanov",
      role: "Full-stack Software Engineer",
      company: "Cegeka",
      companyLink: "https://cegeka.com/",
      bio: "From Code to Impact: How to Bring Value Beyond Code",
      image: "/speakers/Website speaker - Adrian Romanov.png",
      linkedinUrl: "https://www.linkedin.com/in/romanovadrian/"
    },
    {
      name: "Roman Fiodorov",
      role: "Founder Filosoft Company, Tech-Lead",
      company: "Aiomed.com",
      companyLink: "https://aiomed.com/",
      bio: "Chasing the AI Hype: A Senior Developer's Perspective",
      image: "/speakers/Website speaker - Roman Fiodorov.png",
      linkedinUrl: "https://www.linkedin.com/in/roman-fiodorov-49994057/"
    },
    {
      name: "Diana Lari",
      role: "Former Product Owner",
      company: "_",
      bio: "I Logged Out: What Happens After You Leave IT?",
      image: "/speakers/Website speaker - Diana Lari.png",
      linkedinUrl: "https://www.linkedin.com/in/lari-diana-05972315a/"
    },
    {
      name: "Eugen Zagorcea",
      role: "Principal QA Engineer",
      company: "flow48.com",
      companyLink: "https://flow48.com",
      bio: "How to test an API in the era of AI",
      image: "/speakers/Website speaker - Eugen Zagorcea.png",
      linkedinUrl: "https://www.linkedin.com/in/eugeniu-zagorcea/"
    },
    {
      name: "Petru Maleru",
      role: "General Manager",
      company: "Association of Recruitment Agencies (ARA)",
      companyLink: "https://ara.md",
      bio: "The Recruiter's Playbook: Turning Teams into Innovation Engines",
      image: "/speakers/Website speaker - Petru Maleru.png",
      linkedinUrl: "https://www.linkedin.com/in/peter-maler/"
    },
    {
      name: "Radu Tataru",
      role: "Delivery Director SER Region, Amdaris, Entrepreneur, Commercial mentor and Ironman athlete",
      company: "Amdaris",
      companyLink: "https://amdaris.com",
      bio: "Pitch It. Scope It. Deliver It. How to sell ambitiously and deliver delight by design",
      image: "/speakers/Website speaker - Radu Tataru.png",
      linkedinUrl: "https://www.linkedin.com/in/radu-tataru/"
    },
    {
      name: "Sergiu Chilat",
      role: "DevOps Engineer & NOC Team Lead",
      company: "Adtelligent",
      companyLink: "https://adtelligent.com",
      bio: "Balancing AI and Traditional Methods in IT: From Academia to Industry",
      image: "/speakers/Website speaker - Sergiu Chilat.png",
      linkedinUrl: "https://www.linkedin.com/in/sergiu-chilat/"
    },
    {
      name: "Cristina Volontir",
      role: "Test manager",
      company: "Orange Systems",
      companyLink: "https://systems.orange.md/",
      bio: "Bug Hunting. How a QA thinks",
      image: "/speakers/Website speaker - Cristina Volontir.png",
      linkedinUrl: "https://www.linkedin.com/in/cristina-volontir-03335b212"
    },
    {
      name: "Cristina Grosu",
      role: "QA Analyst", 
      company: "Orange Systems",
      companyLink: "https://systems.orange.md/",
      bio: "Bug Hunting. How a QA thinks",
      image: "/speakers/Website speaker - Cristina Grosu.png",
      linkedinUrl: "https://www.linkedin.com/in/cristina-grosu-772b39b7"
    },
    {
      name: "Marina Zubcu",
      role: "QA Analyst",
      company: "Orange Systems", 
      companyLink: "https://systems.orange.md/",
      bio: "Bug Hunting. How a QA thinks",
      image: "/speakers/Website speaker - Marina Zubcu.png",
      linkedinUrl: "https://www.linkedin.com/in/zubcu-marina-973a561a0"
    },
    {
      name: "Pavel Curcovici",
      role: "Tekwill Balti Administrator",
      company: "Tekwill",
      companyLink: "https://tekwill.md/",
      bio: "Tech Movers: From Ideas to Startups",
      image: "/speakers/Website speaker - Pavel Curcovici.png",
      linkedinUrl: "https://www.linkedin.com/in/curcovici-pavel-461590101"
    },
    {
      name: "TBA",
      role: "To Be Announced",
      company: "Coming Soon",
      companyLink: "#",
      bio: "We're excited to announce this speaker soon. Stay tuned for updates!",
      image: "",
      linkedinUrl: ""
    },
    {
      name: "TBA",
      role: "To Be Announced",
      company: "Coming Soon",
      companyLink: "#",
      bio: "We're excited to announce this speaker soon. Stay tuned for updates!",
      image: "",
      linkedinUrl: ""
    }

  ];

  // Fisher-Yates shuffle algorithm
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Separate confirmed speakers from TBA speakers
  const confirmedSpeakers = speakers.filter(speaker => speaker.name !== "TBA");
  const tbaSpeakers = speakers.filter(speaker => speaker.name === "TBA");
  
  // Use original order initially to prevent hydration mismatch
  const [finalSpeakers, setFinalSpeakers] = useState([...confirmedSpeakers, ...tbaSpeakers]);

  // Shuffle only on client after mount
  useEffect(() => {
    const shuffledConfirmedSpeakers = shuffleArray(confirmedSpeakers);
    setFinalSpeakers([...shuffledConfirmedSpeakers, ...tbaSpeakers]);
  }, []);


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
          {finalSpeakers.map((speaker, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-bitconf-primary/20">
              <div className="h-64 bg-gradient-to-br from-bitconf-secondary to-bitconf-primary flex items-center justify-center">
                {speaker.name === "TBA" ? (
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">🎤</div>
                    <div className="text-xl font-bold">TBA</div>
                    <div className="text-sm opacity-75">Coming Soon</div>
                  </div>
                ) : (
                  <img src={speaker.image} alt={speaker.name}/>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl font-semibold text-white">{speaker.name}</h3>
                  {speaker.linkedinUrl && (
                    <a 
                      href={speaker.linkedinUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-bitconf-primary transition-colors"
                      aria-label={`${speaker.name}'s LinkedIn profile`}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                </div>
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
