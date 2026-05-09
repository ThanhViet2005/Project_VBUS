export default function PaymentPagination() {
  return (
    <div className="flex justify-end gap-3 mt-8">
      <button className="w-12 h-12 rounded-xl border border-[#1A2740]">
        ‹
      </button>

      <button className="w-12 h-12 rounded-xl bg-cyan-400 text-black font-bold">
        1
      </button>

      <button className="w-12 h-12 rounded-xl border border-[#1A2740]">
        2
      </button>

      <button className="w-12 h-12 rounded-xl border border-[#1A2740]">
        3
      </button>

      <button className="w-12 h-12 rounded-xl border border-[#1A2740]">
        ›
      </button>
    </div>
  );
}
