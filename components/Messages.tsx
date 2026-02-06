
import React from 'react';
import { MOCK_MESSAGES } from '../constants';

const Messages: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-background-dark text-white overflow-hidden">
      <header className="sticky top-0 z-40 bg-background-dark/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-4 pt-12 pb-2">
          <div className="flex items-center gap-2 bg-primary/20 px-3 py-1.5 rounded-full border border-primary/20">
            <span className="material-symbols-outlined text-primary text-xl fill-1">database</span>
            <span className="text-sm font-bold text-primary">1,240</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center size-10 rounded-full bg-surface-dark text-slate-300">
              <span className="material-symbols-outlined">person_add</span>
            </button>
            <button className="flex items-center justify-center size-10 rounded-full bg-surface-dark text-slate-300">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </div>
        <div className="px-4 py-2">
          <h1 className="text-3xl font-bold tracking-tight">Messages</h1>
        </div>
        <div className="px-4 py-3">
          <label className="relative block w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
              <span className="material-symbols-outlined text-xl">search</span>
            </span>
            <input 
              className="w-full h-12 bg-surface-dark border-none rounded-full pl-11 pr-4 focus:ring-2 focus:ring-primary/50 placeholder:text-slate-500 text-base text-white" 
              placeholder="Search conversations..." 
              type="text"
            />
          </label>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto pb-32 hide-scrollbar">
        <div className="flex flex-col">
          {MOCK_MESSAGES.map((msg) => (
            <div key={msg.id} className="flex items-center gap-4 px-4 py-4 active:bg-surface-dark transition-colors cursor-pointer border-b border-white/5 last:border-0">
              <div className="relative shrink-0">
                {msg.isSystem ? (
                  <div className="size-14 rounded-full bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-3xl">verified_user</span>
                  </div>
                ) : (
                  <div 
                    className={`size-14 rounded-full bg-cover bg-center border-2 ${msg.unreadCount ? 'border-primary' : 'border-transparent'}`} 
                    style={{ backgroundImage: `url('${msg.user.image}')` }}
                  ></div>
                )}
                {!msg.isSystem && msg.unreadCount && (
                  <div className="absolute bottom-0 right-0 size-4 rounded-full bg-green-500 border-2 border-background-dark"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-0.5">
                  <h3 className="font-semibold text-base truncate flex items-center gap-1">
                    {msg.user.name}
                    {msg.isSystem && <span className="material-symbols-outlined text-primary text-sm fill-1">verified</span>}
                  </h3>
                  <span className={`text-xs ${msg.unreadCount ? 'text-primary' : 'text-slate-500'} font-medium`}>{msg.time}</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <p className={`text-sm ${msg.unreadCount ? 'text-white' : 'text-slate-400'} line-clamp-1`}>
                    {msg.lastMessage}
                  </p>
                  {msg.unreadCount && (
                    <div className="size-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <span className="text-[10px] text-white font-bold leading-none">{msg.unreadCount}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="fixed bottom-24 right-6 z-50">
        <button className="flex items-center gap-2 px-6 h-16 bg-primary text-white rounded-full shadow-lg shadow-primary/30 hover:scale-105 transition-transform active:scale-95">
          <span className="material-symbols-outlined text-2xl">shuffle</span>
          <span className="font-bold tracking-wide">Start Random Chat</span>
        </button>
      </div>
    </div>
  );
};

export default Messages;
