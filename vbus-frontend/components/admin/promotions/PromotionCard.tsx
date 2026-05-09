import { Promotion } from "@/types/promotions";

export const PromotionCard = ({ promo }: { promo: Promotion }) => {
  const progress = (promo.usageCount / promo.maxUsage) * 100;

  return (
    <div className="bg-[#1a1f2e] p-6 rounded-2xl border border-slate-800 flex flex-col gap-4">
      <div className="flex justify-between items-start">
        <span className="text-[10px] bg-slate-800 px-2 py-1 rounded uppercase tracking-wider">
          {promo.label}
        </span>
        <div className="p-2 bg-teal-500/10 rounded-lg text-teal-500">
          {/* Icon placeholder */}
        </div>
      </div>

      <h2 className="text-2xl font-bold tracking-tight">{promo.code}</h2>

      <div className="flex justify-between items-center">
        <span className="text-slate-400 text-sm">Số tiền giảm</span>
        <span className="text-2xl font-bold text-teal-400">
          {promo.discountValue}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs text-slate-400">
          <span>
            Đã dùng: {promo.usageCount} / {promo.maxUsage}
          </span>
        </div>
        <div className="w-full bg-slate-800 h-1.5 rounded-full">
          <div
            className="bg-teal-500 h-full rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <button className="w-full mt-2 py-2 text-sm border border-slate-700 rounded-lg hover:bg-slate-800 transition">
        Edit Quản lý chi tiết
      </button>
    </div>
  );
};
