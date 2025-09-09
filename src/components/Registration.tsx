export default function Registration() {
  const tickets = [
    {
      name: 'General Admission',
      price: 'FREE',
      currency: '',
      features: [
        'Access to all sessions',
        'Conference materials',
        'Coffee breaks & lunch',
        'Networking events'
      ],
      popular: false,
      available: true
    }
  ];

  return (
    <section id="registration" className="py-20 bg-bitconf-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Registration</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Secure your spot at BitConf 4th Edition. Limited seats available!
          </p>
        </div>

        <div className="mb-12 max-w-4xl mx-auto">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-lg shadow-md overflow-hidden border border-bitconf-primary/20 w-full ${
                ticket.popular ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {ticket.popular && (
                <div className="bg-bitconf-primary text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{ticket.name}</h3>
                
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-bitconf-primary">{ticket.price}</span>
                    <span className="text-gray-300 ml-1">{ticket.currency}</span>
                  </div>
                  {ticket.originalPrice && (
                    <div className="text-sm text-gray-400">
                      <span className="line-through">{ticket.originalPrice} {ticket.currency}</span>
                      <span className="ml-2 text-bitconf-accent font-semibold">Save 25%</span>
                    </div>
                  )}
                </div>

                <ul className="mb-6 space-y-2">
                  {ticket.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <svg className="w-4 h-4 text-bitconf-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {ticket.note && (
                  <p className="text-xs text-gray-400 mb-4 italic">* {ticket.note}</p>
                )}

                <button
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors ${
                    ticket.available
                      ? ticket.popular
                        ? 'bg-bitconf-primary text-white hover:bg-bitconf-primary/80'
                        : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
                      : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                  }`}
                  disabled={!ticket.available}
                >
                  {ticket.available ? 'Register Now' : 'Coming Soon'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-400">
            For questions, contact us at info@bitconf.md
          </p>
        </div>
      </div>
    </section>
  );
}