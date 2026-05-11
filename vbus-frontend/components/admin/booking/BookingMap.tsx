import { Plus, Minus, Target, Gauge, Cloud, MapPin } from "lucide-react";
import BookingBottomStats from "./BookingBottomStats";
import BookingMapInfo from "./BookingMapInfo";

export default function BookingMap() {
  return (
    <div className="relative h-[650px] rounded-[32px] overflow-hidden bg-gradient-to-br from-[#BCC6B6] to-[#A8B59F] border border-cyan-500/10 shadow-2xl">
      {/* Trip Info Overlay */}
      <BookingMapInfo />

      {/* Map Content (SVG Path for now) */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 650" preserveAspectRatio="none">
        <defs>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Route Path */}
        <path
          d="M150 520 C350 480, 400 280, 550 250 S800 220, 920 120"
          stroke="url(#pathGradient)"
          strokeWidth="6"
          strokeDasharray="12 12"
          fill="none"
          filter="url(#glow)"
          className="animate-pulse"
        />

        {/* Start Point */}
        <circle cx="150" cy="520" r="10" fill="#0ea5e9" filter="url(#glow)" />
        
        {/* Current Vehicle Position */}
        <circle cx="550" cy="250" r="14" fill="#2dd4bf" filter="url(#glow)">
           <animate attributeName="r" values="12;16;12" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* End Point */}
        <circle cx="920" cy="120" r="10" fill="#2dd4bf" filter="url(#glow)" />
      </svg>

      {/* Map Controls */}
      <div className="absolute right-8 top-8 flex flex-col gap-4 z-20">
        <div className="bg-[#344150]/90 backdrop-blur-xl rounded-2xl p-1 border border-white/5 shadow-2xl">
          <button className="w-16 h-14 rounded-xl hover:bg-slate-700/50 flex items-center justify-center text-white transition-colors">
            <Plus size={24} />
          </button>
          <div className="h-px bg-white/5 mx-3" />
          <button className="w-16 h-14 rounded-xl hover:bg-slate-700/50 flex items-center justify-center text-white transition-colors">
            <Minus size={24} />
          </button>
        </div>

        <button className="w-16 h-14 rounded-2xl bg-[#344150]/90 backdrop-blur-xl border border-white/5 flex items-center justify-center text-blue-400 hover:text-white transition-all shadow-2xl">
          <Target size={24} />
        </button>

        <button className="h-10 px-4 rounded-full bg-[#344150]/90 backdrop-blur-xl border border-white/5 flex items-center gap-2 text-white shadow-2xl group">
          <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.8)] animate-pulse" />
          <span className="text-[10px] font-black tracking-widest uppercase">Live View</span>
        </button>
      </div>

      {/* Bottom Stats Overlay */}
      <div className="absolute left-8 bottom-8 flex gap-6 z-20">
        <BookingBottomStats title="Tốc độ hiện tại" value="62 km/h" icon={Gauge} />
        <BookingBottomStats title="Thời tiết" value="24°C" icon={Cloud} />
      </div>

      <div className="absolute right-8 bottom-8 z-20">
        <BookingBottomStats title="Quãng đường còn lại" value="145 km" icon={MapPin} />
      </div>

      {/* Bottom Center Button */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <button className="bg-[#5E6662]/90 backdrop-blur-md text-white px-10 py-3.5 rounded-full text-[11px] font-black tracking-[4px] uppercase border border-white/10 hover:bg-[#6c7570] transition-all shadow-2xl">
          Bản đồ hành trình trực tuyến
        </button>
      </div>
    </div>
  );
}
