
import React from 'react';
import { MOCK_USERS } from '../constants';

interface DiscoveryProps {
  onStartVoice: () => void;
}

const Discovery: React.FC<DiscoveryProps> = ({ onStartVoice }) => {
  return (
    <>
      <header className="flex flex-col pt-12 pb-2 px-4 sticky top-0 z-20 bg-background-dark/80 backdrop-blur-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary/20 p-2 rounded-full">
              <span className="material-symbols-outlined text-primary text-2xl fill-1">account_balance_wallet</span>
            </div>
            <span className="font-bold text-sm tracking-tight text-white">1,250</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-white">Discovery Feed</h1>
          <button className="flex items-center justify-center size-10 rounded-full bg-white/10">
            <span className="material-symbols-outlined text-xl text-white">search</span>
          </button>
        </div>
        
        <div className="flex bg-white/5 rounded-full p-1 w-full max-w-[280px] mx-auto">
          <button className="flex-1 py-1.5 px-4 rounded-full text-sm font-semibold transition-all bg-primary shadow-sm text-white">
            Hot
          </button>
          <button className="flex-1 py-1.5 px-4 rounded-full text-sm font-semibold transition-all text-slate-400">
            Nearby
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 pt-4 pb-32 hide-scrollbar">
        <div className="grid grid-cols-2 gap-4">
          {MOCK_USERS.map((user) => (
            <div key={user.id} className="relative group animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div 
                className="aspect-[3/4] rounded-xl overflow-hidden bg-white/5 relative bg-cover bg-center"
                style={{ backgroundImage: `url('${user.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {user.isOnline && (
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded-full glass-effect">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span className="text-[10px] font-medium text-white">Online</span>
                  </div>
                )}
                
                {user.isLive && (
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded-full glass-effect">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-medium text-white">Live</span>
                  </div>
                )}

                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-bold text-base leading-none">{user.name}, {user.age}</p>
                  <p className="text-white/70 text-[10px] mt-1">{user.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-30 w-full px-8 max-w-[430px]">
        <button 
          onClick={onStartVoice}
          className="flex w-full items-center justify-center gap-3 bg-primary text-white py-4 rounded-full shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-transform"
        >
          <span className="material-symbols-outlined text-2xl fill-1">mic</span>
          <span className="font-bold text-lg">Start Voice Match</span>
        </button>
      </div>
    </>
  );
};

export default Discovery;
