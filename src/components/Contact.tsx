'use client';

import { useEffect, useState, useRef } from 'react';

export default function Contact() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({
    title: false,
    content: false
  });
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            if (target === titleRef.current) {
              setIsVisible(prev => ({ ...prev, title: true }));
            } else if (target === contentRef.current) {
              setIsVisible(prev => ({ ...prev, content: true }));
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-bitconf-dark relative overflow-hidden">
      {/* Enhanced Parallax Background Abstractions */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs with complex movement */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-bitconf-primary/25 via-bitconf-secondary/20 to-transparent rounded-full blur-3xl transition-transform duration-600 ease-out"
             style={{
               transform: `translateY(${scrollY * -0.8}px) translateX(${scrollY * 0.4}px) rotate(${scrollY * 0.2}deg) scale(${1 + scrollY * 0.002})`
             }}></div>
        <div className="absolute bottom-20 left-1/5 w-80 h-80 bg-gradient-to-tr from-bitconf-turquoise/30 via-bitconf-accent/25 to-transparent rounded-full blur-2xl transition-transform duration-600 ease-out"
             style={{
               transform: `translateY(${scrollY * 1.0}px) translateX(${scrollY * -0.3}px) rotate(${scrollY * -0.15}deg)`
             }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-bl from-bitconf-secondary/35 to-transparent rounded-full blur-2xl transition-transform duration-600 ease-out"
             style={{
               transform: `translateY(${scrollY * -0.6}px) rotate(${scrollY * 0.4}deg) scale(${1.2 - scrollY * 0.001})`
             }}></div>

        {/* Abstract geometric patterns */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-bitconf-primary/20 rotate-45 transition-transform duration-1000"
             style={{
               transform: `translateY(${scrollY * 0.25}px) rotate(${45 + scrollY * 0.15}deg)`
             }}></div>
        <div className="absolute top-32 right-20 w-24 h-24 border-2 border-bitconf-accent/30 rounded-full transition-transform duration-1000"
             style={{
               transform: `translateY(${scrollY * -0.3}px) translateX(${scrollY * 0.1}px) scale(${1 + scrollY * 0.0003})`
             }}></div>
        
        {/* Floating lines and paths */}
        <svg className="absolute top-16 left-1/4 w-48 h-48 text-bitconf-turquoise/15 transition-transform duration-1000" 
             style={{ transform: `translateY(${scrollY * -0.2}px) rotate(${scrollY * 0.1}deg)` }}
             viewBox="0 0 100 100">
          <path d="M20,20 Q50,5 80,20 T80,50 Q65,80 35,65 T20,20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="20" cy="20" r="2" fill="currentColor"/>
          <circle cx="80" cy="50" r="1.5" fill="currentColor"/>
        </svg>

        {/* Animated mesh pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contactMesh" width="80" height="80" patternUnits="userSpaceOnUse"
                       patternTransform={`rotate(${scrollY * 0.05}) scale(${1 + scrollY * 0.0001})`}>
                <path d="M 80 0 L 40 40 L 0 0 M 40 40 L 80 80 M 40 40 L 0 80" fill="none" stroke="currentColor" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contactMesh)" />
          </svg>
        </div>

        {/* Dynamic particles */}
        <div className="absolute top-1/4 right-16 w-3 h-3 bg-bitconf-primary/40 rounded-full transition-transform duration-1000"
             style={{
               transform: `translateY(${scrollY * -0.35}px) translateX(${scrollY * 0.15}px)`,
               boxShadow: `0 0 ${8 + scrollY * 0.02}px rgba(59, 130, 246, 0.3)`
             }}></div>
        <div className="absolute bottom-1/3 left-20 w-2 h-2 bg-bitconf-accent/50 rounded-full transition-transform duration-1000"
             style={{
               transform: `translateY(${scrollY * 0.28}px) translateX(${scrollY * -0.08}px)`,
               boxShadow: `0 0 ${6 + scrollY * 0.015}px rgba(16, 185, 129, 0.4)`
             }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible.title 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Contact & Location</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with us or find information about the venue
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1200 ease-out ${
            isVisible.content 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="group flex items-start transition-all duration-300 ease-out cursor-pointer p-4 rounded-lg hover:bg-bitconf-primary/10">
                <div className="bg-bitconf-primary/20 rounded-full p-3 mr-4 transition-all duration-300 ease-out group-hover:bg-bitconf-primary/30">
                  <svg className="w-6 h-6 text-bitconf-primary transition-colors duration-300 group-hover:text-bitconf-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1 transition-colors duration-300 group-hover:text-bitconf-primary">Email</h4>
                  <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-100 hover:text-bitconf-primary cursor-pointer">info@bitconf.md</p>
                  <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-100 hover:text-bitconf-primary cursor-pointer">sponsors@bitconf.md</p>
                </div>
              </div>

              <div className="group flex items-start transition-all duration-300 ease-out cursor-pointer p-4 rounded-lg hover:bg-bitconf-secondary/10">
                <div className="bg-bitconf-secondary/20 rounded-full p-3 mr-4 transition-all duration-300 ease-out group-hover:bg-bitconf-secondary/30">
                  <svg className="w-6 h-6 text-bitconf-secondary transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1 transition-colors duration-300 group-hover:text-bitconf-secondary">Venue</h4>
                  <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-100">Venue TBA</p>
                  <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-100">Balti, Moldova</p>
                </div>
              </div>

              <div className="group flex items-start transition-all duration-300 ease-out cursor-pointer p-4 rounded-lg hover:bg-bitconf-accent/10">
                <div className="bg-bitconf-accent/20 rounded-full p-3 mr-4 transition-all duration-300 ease-out group-hover:bg-bitconf-accent/30">
                  <svg className="w-6 h-6 text-bitconf-accent transition-colors duration-300 group-hover:text-bitconf-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1 transition-colors duration-300 group-hover:text-bitconf-accent">Date</h4>
                  <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-100">November 8, 2025</p>
                  <p className="text-gray-300 transition-colors duration-300 group-hover:text-gray-100">Follow us for updates!</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/bitconf.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bitconf-primary text-white p-3 rounded-full transition-all duration-300 ease-out hover:bg-bitconf-primary/80"
                >
                  <svg className="w-6 h-6 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="bg-bitconf-secondary text-white p-3 rounded-full transition-all duration-300 ease-out hover:bg-bitconf-secondary/80">
                  <svg className="w-6 h-6 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="bg-bitconf-accent text-white p-3 rounded-full transition-all duration-300 ease-out hover:bg-bitconf-accent/80">
                  <svg className="w-6 h-6 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Send us a Message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white transition-all duration-300 hover:bg-gray-700 hover:border-gray-500 hover:shadow-lg hover:shadow-bitconf-primary/10 focus:ring-2 focus:ring-bitconf-primary focus:border-transparent focus:bg-gray-700"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white transition-all duration-300 hover:bg-gray-700 hover:border-gray-500 hover:shadow-lg hover:shadow-bitconf-primary/10 focus:ring-2 focus:ring-bitconf-primary focus:border-transparent focus:bg-gray-700"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-bitconf-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-bitconf-primary focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="speaking">Speaking Opportunity</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="partnership">Partnership</option>
                  <option value="media">Media Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-bitconf-primary focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-bitconf-primary text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 ease-out hover:bg-bitconf-primary/80"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}