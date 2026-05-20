import React from 'react';

const ServerError = ({ imageUrl, onRetry, onGoHome }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0f172a] text-white p-4 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full animate-pulse delay-700"></div>

      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Image Container */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img
              src={imageUrl}
              alt="Server Error Illustration"
              className="relative rounded-2xl w-full max-w-[400px] h-auto object-cover shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Content Containerdd */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold tracking-wider uppercase mb-2">
            Status Code: 500
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Internal</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Server Error</span>
          </h1>

          <p className="text-lg text-slate-400 max-w-md mx-auto md:mx-0 leading-relaxed">
            Oops! Something went wrong on our end. Our technical team has been notified and is working hard to fix the issue.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <button
              onClick={onRetry || (() => window.location.reload())}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] active:scale-95"
            >
              Retry Connection
            </button>
            <button
              onClick={onGoHome || (() => window.location.href = '/')}
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(30,41,59,0.4)] border border-slate-700 active:scale-95"
            >
              Go Back Home
            </button>
          </div>

          <div className="pt-8 flex items-center gap-4 text-slate-500 justify-center md:justify-start">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0f172a] bg-slate-800 flex items-center justify-center text-[10px]">
                  {i}
                </div>
              ))}
            </div>
            <p className="text-sm">Join 2,000+ others reporting this</p>
          </div>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
    </div>
  );
};

export default ServerError;
