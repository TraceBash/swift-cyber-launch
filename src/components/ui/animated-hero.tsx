import React from 'react';
import { Shield, Lock, Monitor, Zap } from 'lucide-react';

const AnimatedHero = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background circles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full border border-white/20 animate-pulse" />
        <div className="absolute bottom-20 left-10 w-20 h-20 rounded-full border border-accent/30 animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full border border-white/10 animate-pulse delay-500" />
      </div>
      
      {/* Main illustration container */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Floating security elements */}
        <div className="relative">
          {/* Central security shield */}
          <div className="relative bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl animate-fade-in">
            <Shield className="w-16 h-16 text-accent animate-pulse" />
            
            {/* Orbiting elements */}
            <div className="absolute -top-6 -right-6 bg-primary/90 rounded-full p-3 animate-bounce delay-300">
              <Lock className="w-6 h-6 text-white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-accent/90 rounded-full p-3 animate-bounce delay-700">
              <Zap className="w-6 h-6 text-white" />
            </div>
            
            <div className="absolute top-1/2 -left-8 bg-white/90 rounded-full p-3 animate-bounce delay-1000">
              <Monitor className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
        
        {/* Floating data cards */}
        <div className="flex space-x-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-slide-in-right delay-300">
            <div className="grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-3 h-3 rounded-sm ${i === 4 ? 'bg-accent' : 'bg-white/40'} animate-pulse`}
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-slide-in-right delay-500">
            <div className="w-16 h-8 bg-gradient-to-r from-accent to-primary rounded animate-pulse" />
          </div>
        </div>
        
        {/* Security scan visualization */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 animate-fade-in delay-700">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center animate-pulse">
              <span className="text-white font-bold text-sm">✓</span>
            </div>
            <div className="space-y-2">
              <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-accent to-primary rounded-full animate-pulse" style={{ width: '75%' }} />
              </div>
              <div className="w-20 h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full animate-pulse delay-200" style={{ width: '90%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M 50 50 Q 150 100 250 150 T 350 200"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M 100 200 Q 200 150 300 100 T 400 50"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse delay-500"
        />
      </svg>
    </div>
  );
};

export default AnimatedHero;