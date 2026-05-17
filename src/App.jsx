import React, { useEffect, useState } from 'react';

const App = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleCount = 15;
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 15,
      duration: Math.random() * 10 + 10,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0c0c0e] text-white">
      {/* Background Image Container */}
      <div className="fixed inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center filter brightness-[0.7]"
          style={{ backgroundImage: "url('https://res.cloudinary.com/dnhju6mhg/image/upload/f_auto,q_auto/webp/office-spaces/office-spaces-90.webp')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      {/* Particles */}
      <div className="fixed inset-0 z-1 pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              width: `${p.size}px`,
              height: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[900px] px-6 py-12 text-center animate-fade-in mx-auto">
        <div className="mb-8 md:mb-12 inline-block">
          <div className="relative p-1 md:p-2 rounded-full bg-[conic-gradient(from_0deg,#ff4500,#feb47b,#ff7e5f,#764ba2,#667eea,#ff4500)] animate-rotate-border animate-breathe shadow-[0_0_30px_rgba(249,115,22,0.3)]">
            <img 
              src="https://tse4.mm.bing.net/th/id/OIP.2Kzep2ugJ1ZxC1jRL6CxvgAAAA?pid=Api&P=0&h=180" 
              alt="Infoyashonand Technology" 
              className="h-[70px] w-[70px] md:h-[110px] md:w-[110px] rounded-full object-contain bg-white border-2 md:border-4 border-black block rotate-0 scale-100 transform-none"
              style={{ animation: 'none' }}
            />
          </div>
        </div>

        <h1 className="font-heading text-[1.75rem] md:text-[3.5rem] font-black uppercase tracking-wider mb-6 leading-[1.1] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
          Server Down For Maintenance
        </h1>

        <p className="text-[0.95rem] md:text-[1.1rem] text-white/70 max-w-[650px] mx-auto mb-10 md:mb-14 leading-relaxed px-4">
          We're upgrading our servers to provide you with a better experience. We'll be back online shortly. Thank you for your patience.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch md:items-center max-w-[700px] mx-auto px-5 md:px-0">
          <a href="#" className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_15px_rgba(249,115,22,0.4)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.5)] uppercase tracking-wider text-sm">
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us
          </a>
          <a href="#" target="_blank" className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-transparent text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/50 backdrop-blur-md hover:border-white hover:bg-white/10 uppercase tracking-wider text-sm">
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            WhatsApp
          </a>
          <a href="#" className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-transparent text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/50 backdrop-blur-md hover:border-white hover:bg-white/10 uppercase tracking-wider text-sm">
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
