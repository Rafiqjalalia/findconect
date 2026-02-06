
import React, { useState } from 'react';
import { GIFTS } from '../constants';

interface VoiceHubProps {
  onBack: () => void;
}

const VoiceHub: React.FC<VoiceHubProps> = ({ onBack }) => {
  const [showGiftTray, setShowGiftTray] = useState(false);

  return (
    <div className="relative flex flex-col h-full bg-background-dark text-white overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between p-4 pt-12 z-10">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="w-10 h-10 flex items-center justify-center rounded-full glass-effect">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div>
            <h1 className="text-lg font-bold leading-tight">Lively Voice Hub</h1>
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-green-500"></span>
              <span className="text-xs text-white/60">1,240 Online</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 flex items-center justify-center rounded-full glass-effect">
            <span className="material-symbols-outlined">share</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full glass-effect">
            <span className="material-symbols-outlined">more_horiz</span>
          </button>
        </div>
      </header>

      {/* Main Area: Circular Avatar Grid */}
      <main className="flex-1 flex flex-col items-center justify-center relative py-8">
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <div className="w-64 h-64 bg-primary blur-[100px] rounded-full"></div>
        </div>

        <div className="relative w-72 h-72 flex items-center justify-center">
          {/* Host - Center */}
          <div className="relative z-10 group">
            <div className="size-24 rounded-full border-4 border-primary p-1 bg-background-dark shadow-[0_0_15px_#ec1380] animate-pulse">
              <div className="w-full h-full rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuANxBEg4e1fPzBKfQ5NIrAV6IsgqN0YroxUCnqL2RYIXvqmRKFPBpJNPpIEFwPGPo9jUO4TcqUDzwchXUgYZXQ2UZaUh_gIg7vwcIwGezNiUq8CMq5XRhxiGDsADoJrpptiOa8wwzE1y-YAi7jtP3mAfBwbXVWJog7Yw-eN_jEnR-HlQQOfcZCPSC2DZxg1K9hXE4hzkevHJJkYDWkLL_wrPvssOcu8OU28d4dfmnaZsG3cPN5h8BhGuu8mmLyOL9CVeu3Nr2YBVs7k')" }}></div>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">Host</div>
          </div>

          {/* Participants */}
          <div className="absolute top-0 left-0">
             <div className="size-16 rounded-full border-2 border-white/20 p-1 bg-background-dark/80 backdrop-blur-md">
                <div className="w-full h-full rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtewvHf4jDVTvch09TBbvlJG-NcDHRDDHQBXjF26flPb0aG3xxIY4LKN9bbUrP8svi_pxjJlqSieyZIfXRKQEsy0NcUoQm5JodlaCi5IjHL1M3T69mPUurbK4UPay5BNHc17m-a8I2SeT8QYtdZ6JY8WZeceRMQtMOu0H5VOGnlTX2dRXGFbmJfJh-kn5nKNt73nUH0KH-PbYhJ5zgEIbSv7l5ORAoml0SLMz2DJWbXrUIrXCzrfTLCsAmMjIzjCkYwTMBxilq4Eqq')" }}></div>
             </div>
          </div>
          <div className="absolute top-0 right-0">
             <div className="size-16 rounded-full border-2 border-primary p-1 bg-background-dark/80 backdrop-blur-md shadow-[0_0_10px_#ec1380]">
                <div className="w-full h-full rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2SRsSMFAFfhdUo70RcqhECuFbvzXbWaLfzk-Wv6aUjlONvjLrRL_EiLVG0-G98X2dUblywBEFpqXD6LqCHfgz9mPojMCnag4399cWB0Dp0pa_eC4TxLb5t0ANgAlLI__tcnW14ssAL1JULuPwfZs0W9GtRuVIqM9NeEwZ5BjePXyH-zCYfCVww-B4yVffRYvt2o_l0-kMW3z9acMjaqI3w08nx4x2awMMrFSNNLicMUTwyiqVXO6NOqLDIDtX0meSoKTXgpjqfXxq')" }}></div>
             </div>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -left-8">
             <div className="size-16 rounded-full border-2 border-white/20 p-1 bg-background-dark/80 backdrop-blur-md">
                <div className="w-full h-full rounded-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPQ7hP3QlQfrvDoKB3iE2HRqSh7CEwxHOBy-3QZkS085JTvz9gLBapvkUc5yzGGn6fL1BtgrlEoXWKYgydcn4yNhJvz_Mqbe3FaRF9yCVFRmMp3MN7vAzQL0Zl_L8Cd-YX7ZS3H5R5KfgeR3RnVdXVYelWN2beNltYOpl_ju3bR3snL-p8nF5Ud-9_ZOyqB0_xhzOPms8mB-AelG6kWV1nO-GFC6r5BB5wTFPhPrzpa3SbHgLGkbmqud_uUeiOUoX62zBT-95AISUL')" }}></div>
             </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-8">
             <div className="size-16 rounded-full border-2 border-white/10 p-1 bg-white/5 backdrop-blur-md flex items-center justify-center">
                <span className="material-symbols-outlined text-white/30">add</span>
             </div>
          </div>
          <div className="absolute bottom-0 left-0">
             <div className="size-16 rounded-full border-2 border-white/10 p-1 bg-white/5 backdrop-blur-md flex items-center justify-center">
                <span className="material-symbols-outlined text-white/30">add</span>
             </div>
          </div>
          <div className="absolute bottom-0 right-0">
             <div className="size-16 rounded-full border-2 border-white/10 p-1 bg-white/5 backdrop-blur-md flex items-center justify-center">
                <span className="material-symbols-outlined text-white/30">add</span>
             </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-white/60 text-sm font-medium">Topic of the day</h3>
          <p className="text-xl font-bold">"Best Weekend Getaways ✈️"</p>
        </div>
      </main>

      {/* Chat Feed */}
      <div className="px-4 pb-4 space-y-4">
        <div className="max-h-48 overflow-y-auto space-y-2 mask-gradient hide-scrollbar">
          <div className="flex items-start gap-2 bg-black/20 p-2 rounded-lg border-l-2 border-primary/40">
            <span className="text-primary font-bold text-sm">System:</span>
            <p className="text-sm text-white/80">Welcome to Lively Hub! Be kind and respect others.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-blue-400 font-bold text-sm shrink-0">SocialBee:</span>
            <p className="text-sm text-white/90">Love this vibe! 🚀 Is anyone from Tokyo here?</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold text-sm shrink-0">GiftMaster:</span>
            <div className="flex items-center gap-1 bg-primary/20 px-2 py-0.5 rounded-full border border-primary/30">
              <span className="text-xs text-primary">Sent Heart</span>
              <span className="material-symbols-outlined text-sm text-primary fill-1">favorite</span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <button className="flex-1 flex items-center gap-2 glass-effect h-12 px-4 rounded-full text-white/40 text-sm">
            <span className="material-symbols-outlined text-lg">chat_bubble</span>
            Say something...
          </button>
          <button 
            onClick={() => setShowGiftTray(true)}
            className="size-12 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20 active:scale-90 transition-transform"
          >
            <span className="material-symbols-outlined text-white fill-1">redeem</span>
          </button>
          <button className="bg-primary hover:bg-primary/90 transition-colors px-6 h-12 rounded-full font-bold flex items-center gap-2 shadow-lg shadow-primary/30">
            <span className="material-symbols-outlined">mic</span>
            Join Room
          </button>
        </div>
      </div>

      {/* Gift Tray Sheet */}
      {showGiftTray && (
        <>
          <div className="fixed inset-0 bg-black/60 z-40" onClick={() => setShowGiftTray(false)}></div>
          <div className="fixed inset-x-0 bottom-0 glass-effect rounded-t-xl z-50 animate-in slide-in-from-bottom duration-300">
            <div className="w-full flex justify-center py-3">
              <div className="w-12 h-1.5 bg-white/20 rounded-full"></div>
            </div>
            <div className="px-4 pb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-4">
                  <button className="text-primary font-bold border-b-2 border-primary pb-1">Gifts</button>
                  <button className="text-white/40 font-bold pb-1">Backpacks</button>
                </div>
                <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full">
                  <span className="material-symbols-outlined text-yellow-500 text-sm fill-1">monetization_on</span>
                  <span className="text-sm font-bold">1,250</span>
                  <span className="material-symbols-outlined text-primary text-sm">add_circle</span>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 overflow-y-auto max-h-[40vh] hide-scrollbar">
                {GIFTS.map(gift => (
                  <div key={gift.id} className="flex flex-col items-center gap-1 p-2 rounded-lg bg-white/5 border border-white/10">
                    <div className="size-12 flex items-center justify-center">
                      <span className={`material-symbols-outlined text-3xl fill-1 ${gift.color}`}>{gift.icon}</span>
                    </div>
                    <span className="text-[10px] text-white/60">{gift.name}</span>
                    <span className="text-xs font-bold text-yellow-500">{gift.price}</span>
                  </div>
                ))}
              </div>
              <button className="w-full bg-primary py-3 rounded-full font-bold mt-6 shadow-lg shadow-primary/30 active:scale-[0.98] transition-all">Send Gift</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VoiceHub;
