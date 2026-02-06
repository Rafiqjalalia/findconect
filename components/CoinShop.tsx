
import React from 'react';

interface CoinShopProps {
  onBack: () => void;
}

const CoinShop: React.FC<CoinShopProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col h-full bg-background-dark text-white overflow-y-auto hide-scrollbar">
      <nav className="sticky top-0 z-50 flex items-center justify-between p-4 bg-background-dark/80 backdrop-blur-md">
        <button onClick={onBack} className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
          <span className="material-symbols-outlined text-2xl">arrow_back_ios_new</span>
        </button>
        <h1 className="text-xl font-bold tracking-tight">Coin Shop</h1>
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
          <span className="material-symbols-outlined text-2xl">history</span>
        </button>
      </nav>

      {/* Fix: Added pb-32 padding to ensure content is not obscured by the bottom navigation bar */}
      <main className="px-4 pb-32">
        {/* Balance Card */}
        <section className="mt-4">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-[#ff4da6] p-6 shadow-lg shadow-primary/20">
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm font-medium uppercase tracking-wider">Current Balance</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="material-symbols-outlined text-yellow-400 text-3xl fill-1">monetization_on</span>
                  <span className="text-white text-4xl font-bold leading-none">450</span>
                </div>
              </div>
              <button className="bg-white text-primary px-4 py-2 rounded-full font-bold text-sm shadow-sm active:scale-95 transition-transform">
                Earn Free
              </button>
            </div>
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 bg-black/10 rounded-full blur-xl"></div>
          </div>
        </section>

        {/* Exclusive Welcome Offer */}
        <section className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Limited Offers</h2>
            <span className="text-primary text-sm font-bold">Ends in 02:45:12</span>
          </div>
          <div className="rounded-xl bg-card-dark border-2 border-primary/30 p-4 flex items-center gap-4 relative overflow-hidden">
            <div className="flex-shrink-0 w-20 h-20 bg-primary/20 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-primary fill-1">savings</span>
            </div>
            <div className="flex-grow">
              <span className="bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase mb-1 inline-block">New User Special</span>
              <h3 className="text-white font-bold text-lg leading-tight">150 Coins</h3>
              <p className="text-slate-400 text-sm">One-time exclusive bonus</p>
            </div>
            <div className="text-right">
              <button className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all">
                $0.49
              </button>
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="mt-8">
          <h2 className="text-lg font-bold mb-4">Choose a Package</h2>
          <div className="grid grid-cols-2 gap-4">
            <PackageCard 
              title="100 Coins" 
              subtitle="Starter Pack" 
              price="$0.99" 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBMcixtMi4E78cIa4D00_QBJwSbzRobzMg6V11JhjtCsDGFXWP1R_Z5N2vTGfqKjHQNFm8DTSz6VQkLFdb5gyqryMht98vbBxwD-wEaXMpO6RR8CBU7e7KJZrDlZaauw7Yg2VDXZIjSWffqirieMsqyCrhF0W-lUXLp_HYXFJtDRpiUqXL4Ly3TqHAexVOGsC8dcOJ8lDc4Qo6Qai-Im6hJvemEpQTffC0n4AqYiX_QRsv3CpNS73jvHgPnCyrSWBWEyDLTaWbv16Mc" 
            />
            <PackageCard 
              title="500 +50" 
              subtitle="Social Pack" 
              price="$4.99" 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBvyTsKrk0KVFpP_r8dMACr3B6Zb76YXtDWdf9tDlE42xE06mp9meg6iC30hOS6kWhI_R5qTQFXcD3aj1wn2Yn5Zt_FLLPe1LRuVcoMxSDqkzbp5wdPUg39lAFkdUZMZaf9YPQ3bKt6cpIY0znKp0AQ3IdZOvkZiV76AH_d2h2lUkblBdbTvnpAi7d46VqcuqmeNyi9PC1fUojxevBPrkbaqynO74dhTjvwHvplVp2A1yWMTGdvbAiczZRU-XKDCiSL30D8v4wfpWp9" 
              isPopular 
            />
            <PackageCard 
              title="1,000 +200" 
              subtitle="Pro Pack" 
              price="$9.99" 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuBDwuovkpKdMW2nqjYde9mXDbj086jusJrOJYEI5qvuAMHrVZ5n3xfJJFQa6YdbEGcOQk5lsRqwcbMDInBsFxxYUPmkkh93Gz8_r_Qpfp9DMMjQORBm3UdRlMKm3su7prWAycWmW5pcJzqwRalX5_RXRZoZ_em7SGKRG8-YgbXuDS8Djas5q_pn2UgMa9QJSTjQFH6AKiiMwBUe71S_1lYGrDIduIIVwGRPL5sgVIhGaehvEUrBpEhHVvsI_u-ChhpYnN_PCFfOX7n6" 
              isBestValue 
            />
            <PackageCard 
              title="2,500 +600" 
              subtitle="Whale Pack" 
              price="$24.99" 
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuCQn5y4U_ZAk0FmXrcxGipRYBiw3eBoMw-juzw0M4G2y2asfBu9BgduMojKqkWAxrPHkA877ml_9KOuW4buIDCEhVKzVhOP7QFG7unzV7hmMV_oEFMWO2y8rFzg2r_SLAgQZGyjUjmQrk0HVPHtIv2tavITclpqcm8CJHnoE66hGxcDFmpKP9zjQiM-Tdp6RaJaGfSVxCSvFut2S4KM0HiVmUsl7v9qeE-LnlVSCAOAbJ4RRUskz8e8HmxZ33v0hVSlcbqmyNSMrtYV" 
            />
          </div>
        </section>

        <section className="mt-10 mb-8 p-4 bg-white/5 rounded-xl border border-white/5">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">info</span>
            <p className="text-sm text-slate-400 leading-snug">
              Coins can be used for gifts, priority matching, and exclusive chat features. Non-refundable.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

const PackageCard: React.FC<{ title: string; subtitle: string; price: string; image: string; isPopular?: boolean; isBestValue?: boolean }> = ({ title, subtitle, price, image, isPopular, isBestValue }) => (
  <div className={`bg-card-dark p-4 rounded-xl border ${isPopular ? 'border-primary' : 'border-white/5'} flex flex-col items-center text-center shadow-sm relative animate-in zoom-in duration-300`}>
    {isPopular && <span className="absolute -top-3 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">Most Popular</span>}
    {isBestValue && <span className="absolute -top-3 bg-yellow-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase">Best Value</span>}
    <div className="w-16 h-16 mb-2 flex items-center justify-center">
      <img src={image} alt={title} className="max-w-full max-h-full object-contain" />
    </div>
    <p className="font-bold text-lg">{title}</p>
    <p className="text-slate-400 text-xs mb-4">{subtitle}</p>
    <button className={`w-full ${isPopular ? 'bg-primary text-white' : 'bg-white/5 text-primary'} font-bold py-2 rounded-full border border-primary/20 active:scale-95 transition-all`}>
      {price}
    </button>
  </div>
);

export default CoinShop;
