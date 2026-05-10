"use client";

export default function BookingChart() {
  return (
    <div
      className="
      bg-[#111827]
      rounded-3xl
      p-6
      h-[420px]
    "
    >
      <h2 className="text-3xl text-white font-semibold">Xu hướng đặt vé</h2>

      <div className="flex items-end justify-between h-[300px] mt-10">
        {[100, 180, 250, 150, 280, 210, 160].map((item, index) => (
          <div
            key={index}
            className="
              bg-cyan-400/30
              rounded-t-2xl
              w-12
            "
            style={{
              height: `${item}px`,
            }}
          />
        ))}
      </div>

      <div className="flex justify-between text-slate-500 mt-4">
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
        <span>S</span>
      </div>
    </div>
  );
}
