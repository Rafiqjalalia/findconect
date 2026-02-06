
import React, { useState } from 'react';
import Discovery from './components/Discovery';
import VoiceHub from './components/VoiceHub';
import CoinShop from './components/CoinShop';
import Messages from './components/Messages';
import Profile from './components/Profile';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DISCOVERY);

  const renderView = () => {
    switch (currentView) {
      case View.DISCOVERY:
        return <Discovery onStartVoice={() => setCurrentView(View.VOICE_HUB)} />;
      case View.VOICE_HUB:
        return <VoiceHub onBack={() => setCurrentView(View.DISCOVERY)} />;
      case View.SHOP:
        return <CoinShop onBack={() => setCurrentView(View.DISCOVERY)} />;
      case View.MESSAGES:
        return <Messages />;
      case View.PROFILE:
        return <Profile onRecharge={() => setCurrentView(View.SHOP)} />;
      default:
        return <Discovery onStartVoice={() => setCurrentView(View.VOICE_HUB)} />;
    }
  };

  return (
    <div className="flex flex-col h-screen w-full max-w-[430px] mx-auto bg-background-dark shadow-2xl overflow-hidden relative">
      {renderView()}

      {/* Persistent Navigation Bar (only for main screens) */}
      {/* 
        Fix: Removed currentView !== View.SHOP from the guard. 
        Since SHOP is a primary navigation item, the bar should remain visible.
        This also prevents TypeScript narrowing errors when checking active states in the buttons below.
      */}
      {currentView !== View.VOICE_HUB && (
        <nav className="fixed bottom-0 w-full max-w-[430px] bg-background-dark/95 backdrop-blur-xl border-t border-white/5 pb-8 pt-2 px-6 flex justify-between items-center z-50">
          <button 
            onClick={() => setCurrentView(View.DISCOVERY)}
            className={`flex flex-col items-center gap-1 ${currentView === View.DISCOVERY ? 'text-primary' : 'text-slate-500'}`}
          >
            <span className={`material-symbols-outlined text-2xl ${currentView === View.DISCOVERY ? 'fill-1' : ''}`}>explore</span>
            <span className="text-[10px] font-medium">Discovery</span>
          </button>
          <button 
            onClick={() => setCurrentView(View.MESSAGES)}
            className={`flex flex-col items-center gap-1 ${currentView === View.MESSAGES ? 'text-primary' : 'text-slate-500'}`}
          >
            <span className={`material-symbols-outlined text-2xl ${currentView === View.MESSAGES ? 'fill-1' : ''}`}>chat_bubble</span>
            <span className="text-[10px] font-medium">Chat</span>
          </button>
          <button 
            onClick={() => setCurrentView(View.SHOP)}
            className={`flex flex-col items-center gap-1 ${currentView === View.SHOP ? 'text-primary' : 'text-slate-500'}`}
          >
            <span className={`material-symbols-outlined text-2xl ${currentView === View.SHOP ? 'fill-1' : ''}`}>payments</span>
            <span className="text-[10px] font-medium">Earn</span>
          </button>
          <button 
            onClick={() => setCurrentView(View.PROFILE)}
            className={`flex flex-col items-center gap-1 ${currentView === View.PROFILE ? 'text-primary' : 'text-slate-500'}`}
          >
            <span className={`material-symbols-outlined text-2xl ${currentView === View.PROFILE ? 'fill-1' : ''}`}>account_circle</span>
            <span className="text-[10px] font-medium">Profile</span>
          </button>
        </nav>
      )}
    </div>
  );
};

export default App;
