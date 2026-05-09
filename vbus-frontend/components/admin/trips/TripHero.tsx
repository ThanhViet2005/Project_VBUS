import { Download, PlusCircle } from "lucide-react";

export default function TripHero() {
  return (
    <div className="relative overflow-hidden bg-[#10182B] border border-[#1F2B45] rounded-3xl p-10 mb-8">
      <div className="relative z-10">
        <p className="text-cyan-400 text-2xl mb-3">Quản Lý Chuyến Xe</p>

        <h2 className="text-gray-300 text-xl leading-9 max-w-3xl mb-8">
          Theo dõi và điều phối toàn bộ đội xe VBus theo thời gian thực. Đảm bảo
          hành trình an toàn và đúng giờ.
        </h2>

        <div className="flex gap-5">
          <button className="px-7 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold flex items-center gap-3">
            <PlusCircle size={20} />
            THÊM CHUYẾN MỚI
          </button>

          <button className="px-7 py-4 rounded-xl border border-cyan-500 text-cyan-400 flex items-center gap-3">
            <Download size={20} />
            XUẤT BÁO CÁO
          </button>
        </div>
      </div>
    </div>
  );
}
