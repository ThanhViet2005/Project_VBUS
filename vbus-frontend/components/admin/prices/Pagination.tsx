export default function Pagination() {
  return (
    <div className="flex justify-end gap-2 mt-6">
      <button className="w-10 h-10 rounded-lg border border-[#1E2A45]">
        {"<"}
      </button>

      <button className="w-10 h-10 rounded-lg bg-cyan-500 text-black font-bold">
        1
      </button>

      <button className="w-10 h-10 rounded-lg border border-[#1E2A45]">
        2
      </button>

      <button className="w-10 h-10 rounded-lg border border-[#1E2A45]">
        3
      </button>
    </div>
  );
}
