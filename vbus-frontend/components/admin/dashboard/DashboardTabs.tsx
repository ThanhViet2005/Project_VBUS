"use client";

const tabs = ["Hôm nay", "Tuần này", "Tháng này"];

export default function DashboardTabs() {
  return (
    <div className="flex items-center gap-8">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`
            pb-3 text-lg transition-all
            ${
              index === 1
                ? "text-cyan-400 border-b-2 border-cyan-400"
                : "text-slate-400"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
