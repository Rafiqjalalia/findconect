
import React from 'react';

interface ProfileProps {
  onRecharge: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onRecharge }) => {
  return (
    <div className="flex flex-col h-full bg-background-dark text-white overflow-y-auto hide-scrollbar">
      {/* Top Bar */}
      <div className="sticky top-0 left-0 right-0 z-50 bg-background-dark/80 backdrop-blur-md px-4 pt-12 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined cursor-pointer hover:opacity-70">arrow_back_ios_new</span>
          <h2 className="text-lg font-bold tracking-tight">User Profile</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
            <span className="material-symbols-outlined text-xl">share</span>
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
            <span className="material-symbols-outlined text-xl">more_horiz</span>
          </button>
        </div>
      </div>

      <main className="pb-32 px-4 max-w-md mx-auto w-full">
        {/* Profile Header */}
        <div className="flex flex-col items-center mt-6 mb-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-primary via-purple-500 to-orange-400">
              <div 
                className="w-full h-full rounded-full border-4 border-background-dark overflow-hidden bg-center bg-cover" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCoz_HZDfnjTupz1ALMC6iJ-w2gBXar_PZoFkoRuFXHVQQi6CYV8heR1oSdB1ELW9w8vW595V9upkLdKwv7t8tDs1Hj0u-Q31Djcl0DJRYBmZ2Dpk2PjLrxNCEYYsVl4AhxBTx9u0X-TYD56bWouzMcb3HwxT_uXJIK30fe6BsxCV4WBtOuvzQ91E8aIR1MqVN-7BuLQTH9OwyPd6_NyMm5Cu8MaPDy5FXZJVWLnYnk11sNKyTQGP-wyfGubBjTy4ZGXs2rW5ukWucw")' }}
              ></div>
            </div>
            <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-4 border-background-dark shadow-lg"></div>
          </div>
          <div className="mt-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight">Alex Rivera, 24</h1>
              <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1 uppercase">
                <span className="material-symbols-outlined text-[12px] fill-1">verified</span> Pro
              </span>
            </div>
            <p className="text-slate-400 text-sm mt-1">ID: 98723451 • New York, NY</p>
          </div>
          <div className="flex w-full gap-3 mt-6">
            <button className="flex-1 h-12 rounded-full border-2 border-white/10 font-bold text-sm hover:bg-white/5 transition-all">
              Edit Profile
            </button>
            <button 
              onClick={onRecharge}
              className="flex-1 h-12 rounded-full bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-lg fill-1">monetization_on</span>
              Recharge
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <StatCard label="Followers" value="1.2k" />
          <StatCard label="Following" value="850" />
          <StatCard label="Visitors" value="4.2k" />
        </div>

        {/* XP Bar */}
        <div className="mb-8 p-5 glass-effect rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -mr-8 -mt-8 blur-2xl"></div>
          <div className="flex justify-between items-end mb-3">
            <div>
              <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Growth Journey</h3>
              <p className="text-lg font-bold">Level 24 <span className="text-sm font-normal text-slate-500">Master Chat</span></p>
            </div>
            <p className="text-sm font-medium">1,500 / 2,300 <span className="text-slate-500 font-normal">XP</span></p>
          </div>
          <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full shadow-[0_0_12px_rgba(236,19,128,0.5)]" style={{ width: "65%" }}></div>
          </div>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-[10px] text-slate-500 font-bold uppercase">Beginner</span>
            <span className="text-[10px] text-primary font-bold uppercase">65% to Lv. 25</span>
            <span className="text-[10px] text-slate-500 font-bold uppercase">Elite</span>
          </div>
        </div>

        {/* Bio */}
        <section className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 px-1">About Me</h3>
          <p className="text-slate-300 leading-relaxed px-1">
            Digital artist and pizza enthusiast. Always up for a late-night chat about space and cinema. Let's send some gifts! 🚀✨
          </p>
        </section>

        {/* Interests */}
        <section className="mb-8">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 px-1">Interests</h3>
          <div className="flex flex-wrap gap-2">
            <InterestChip label="Art" icon="🎨" />
            <InterestChip label="Movies" icon="🎬" />
            <InterestChip label="Gaming" icon="🎮" />
            <InterestChip label="Cooking" icon="🍕" />
            <InterestChip label="Music" icon="🎧" />
          </div>
        </section>

        {/* Gift Wall */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4 px-1">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Gift Wall</h3>
            <button className="text-primary text-xs font-bold flex items-center gap-1">
              See All <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-4 gap-3">
             <GiftTile icon="favorite" color="from-red-400 to-red-600" count="x24" />
             <GiftTile icon="diamond" color="from-blue-400 to-blue-600" count="x8" />
             <GiftTile icon="workspace_premium" color="from-yellow-400 to-orange-600" count="x3" />
             <GiftTile icon="rocket_launch" color="from-purple-400 to-purple-600" count="x1" />
          </div>
        </section>
      </main>
    </div>
  );
};

const StatCard: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="glass-effect rounded-xl p-4 flex flex-col items-center justify-center text-center">
    <span className="text-xl font-bold">{value}</span>
    <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">{label}</span>
  </div>
);

const InterestChip: React.FC<{ label: string; icon: string }> = ({ label, icon }) => (
  <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium">
    {icon} {label}
  </span>
);

const GiftTile: React.FC<{ icon: string; color: string; count: string }> = ({ icon, color, count }) => (
  <div className="aspect-square glass-effect rounded-2xl flex flex-col items-center justify-center p-2 group hover:border-primary/50 transition-colors">
    <div className={`w-10 h-10 mb-1 flex items-center justify-center bg-gradient-to-b ${color} rounded-lg shadow-inner`}>
      <span className="material-symbols-outlined text-white fill-1">{icon}</span>
    </div>
    <span className="text-[10px] font-bold">{count}</span>
  </div>
);

export default Profile;
