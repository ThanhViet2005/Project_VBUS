export const PromotionFilter = () => (
  <div className="bg-[#161b26] p-6 rounded-xl border border-slate-800 mt-8">
    <div className="flex items-center gap-4 mb-6">
      <span className="text-sm font-medium">Lọc nâng cao</span>
    </div>
    <div className="grid grid-cols-4 gap-4">
      {/* Implement Select Inputs here */}
      <select className="bg-[#1a1f2e] border border-slate-700 rounded-lg p-2 text-sm">
        <option>Tất cả trạng thái</option>
      </select>
      {/* ... other filters */}
      <button className="bg-teal-500 text-black font-bold py-2 rounded-lg">
        Áp dụng lọc
      </button>
    </div>
  </div>
);
