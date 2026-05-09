export default function TripPagination() {
  return (
    <div className="flex justify-end gap-3 mt-6">
      <button className="px-4 py-2 border border-[#1F2B45] rounded-lg">
        Trước
      </button>

      <button className="w-10 h-10 rounded-lg bg-cyan-500 text-black font-bold">
        1
      </button>

      <button className="w-10 h-10 rounded-lg border border-[#1F2B45]">
        2
      </button>

      <button className="w-10 h-10 rounded-lg border border-[#1F2B45]">
        3
      </button>

      <button className="px-4 py-2 border border-[#1F2B45] rounded-lg">
        Sau
      </button>
    </div>
  );
}
