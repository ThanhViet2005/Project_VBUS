"use client";

export default function FleetStatus() {
  return (
    <div
      className="
      relative overflow-hidden
      bg-[#111827]
      rounded-[32px]
      p-10
      h-[320px]
    "
    >
      <div className="relative z-10">
        <h2 className="text-5xl font-bold text-white">
          Độ sẵn sàng của đội xe
        </h2>

        <p className="text-slate-400 text-xl mt-6 max-w-3xl leading-relaxed">
          All 142 vehicles in the Hanoi-HCM corridor are active and monitored in
          real-time. Maintenance efficiency is at 98.4% for the current quarter.
        </p>

        <div className="flex gap-5 mt-10">
          <button
            className="
            px-8 py-5
            rounded-2xl
            bg-gradient-to-r from-cyan-400 to-blue-500
            text-white
            font-semibold
            text-lg
          "
          >
            Xem bản đồ đội xe
          </button>

          <button
            className="
            px-8 py-5
            rounded-2xl
            border border-cyan-400
            text-cyan-400
            font-semibold
            text-lg
          "
          >
            Tải báo cáo
          </button>
        </div>
      </div>

      {/* Glow */}
      <div
        className="
        absolute
        right-[-100px]
        bottom-[-100px]
        w-[400px]
        h-[400px]
        bg-cyan-400/20
        blur-[120px]
      "
      />
    </div>
  );
}
