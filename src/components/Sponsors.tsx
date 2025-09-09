export default function Sponsors() {
  const sponsorTiers = [
    {
      title: 'Platinum Sponsors',
      description: 'Our premier partners supporting innovation in Moldova',
      sponsors: [
        { name: 'Your Company Here', logo: '/placeholder-logo.png', tier: 'platinum' }
      ]
    },
    {
      title: 'Gold Sponsors',
      description: 'Valuable partners in our mission',
      sponsors: [
        { name: 'Your Company Here', logo: '/placeholder-logo.png', tier: 'gold' },
        { name: 'Your Company Here', logo: '/placeholder-logo.png', tier: 'gold' }
      ]
    },
    {
      title: 'Silver Sponsors',
      description: 'Supporting the tech community',
      sponsors: [
        { name: 'Your Company Here', logo: '/placeholder-logo.png', tier: 'silver' },
        { name: 'Your Company Here', logo: '/placeholder-logo.png', tier: 'silver' },
        { name: 'Your Company Here', logo: '/placeholder-logo.png', tier: 'silver' }
      ]
    }
  ];

  const sponsorshipPackages = [
    {
      tier: 'Platinum',
      price: '5,000',
      color: 'from-purple-500 to-indigo-600',
      benefits: [
        'Logo on main stage backdrop',
        'Speaking slot (30 minutes)',
        'Premium booth location',
        '10 conference tickets',
        'Logo on all marketing materials',
        'Social media mentions',
        'Newsletter inclusion'
      ]
    },
    {
      tier: 'Gold',
      price: '3,000',
      color: 'from-yellow-500 to-orange-500',
      benefits: [
        'Logo on conference materials',
        'Exhibition booth',
        '6 conference tickets',
        'Logo on website',
        'Social media mentions',
        'Newsletter inclusion'
      ]
    },
    {
      tier: 'Silver',
      price: '1,500',
      color: 'from-gray-400 to-gray-600',
      benefits: [
        'Logo on website',
        'Exhibition space',
        '3 conference tickets',
        'Newsletter mention'
      ]
    }
  ];

  return (
    <section id="sponsors" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Sponsors</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            BitConf is made possible by the generous support of our sponsors who believe in Moldova's tech community
          </p>
        </div>

        {/* Current Sponsors */}
        <div className="mb-20">
          {sponsorTiers.map((tier, tierIndex) => (
            <div key={tierIndex} className="mb-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{tier.title}</h3>
                <p className="text-gray-300">{tier.description}</p>
              </div>

              <div className={`grid gap-8 ${
                tier.sponsors.length === 1 ? 'grid-cols-1 max-w-md mx-auto' :
                tier.sponsors.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto' :
                'grid-cols-1 md:grid-cols-3 max-w-4xl mx-auto'
              }`}>
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <div
                    key={sponsorIndex}
                    className="bg-gray-800 rounded-lg p-8 flex items-center justify-center min-h-32 hover:shadow-md transition-shadow border border-bitconf-primary/20"
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">🏢</span>
                      </div>
                      <p className="font-semibold text-gray-300">{sponsor.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sponsorship Opportunities */}
        <div className="bg-bitconf-dark/50 rounded-lg p-8 border border-bitconf-primary/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Become a Sponsor</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with BitConf and connect with Moldova's most talented developers, entrepreneurs, and tech leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {sponsorshipPackages.map((package_, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden border border-bitconf-primary/20">
                <div className={`bg-gradient-to-r ${package_.color} p-6 text-white text-center`}>
                  <h4 className="text-2xl font-bold mb-2">{package_.tier}</h4>
                  <div className="text-3xl font-bold">${package_.price}</div>
                </div>

                <div className="p-6">
                  <ul className="space-y-3">
                    {package_.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <svg className="w-4 h-4 text-bitconf-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-300 mb-6">
              Interested in sponsoring BitConf 4th Edition?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-bitconf-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-bitconf-primary/80 transition-colors">
                Download Sponsorship Kit
              </button>
              <button className="border-2 border-bitconf-accent text-bitconf-accent px-8 py-3 rounded-full font-semibold hover:bg-bitconf-accent hover:text-white transition-colors">
                Contact Partnership Team
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          <p className="text-gray-400">Custom sponsorship packages available. Contact us to discuss your specific needs.</p>
        </div>
      </div>
    </section>
  );
}