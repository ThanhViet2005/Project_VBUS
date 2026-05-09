interface Props {
  title: string;
  value: string;
  sub?: string;
}

export default function PaymentCard({ title, value, sub }: Props) {
  return (
    <div className="flex-1 bg-[#111A2D] border border-[#1A2740] rounded-3xl p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="w-16 h-16 rounded-2xl bg-[#172640]" />

        <div className="px-4 py-2 rounded-xl bg-green-500/10 text-green-400 font-medium">
          +12.5%
        </div>
      </div>

      <p className="text-gray-400 uppercase text-sm mb-4">{title}</p>

      <div className="flex items-end gap-3">
        <h2 className="text-3xl font-bold">{value}</h2>

        <span className="text-gray-400 text-xs mb-2">VND</span>
      </div>

      {sub && <p className="text-gray-500 text-[16px] mt-4">{sub}</p>}

      <div className="h-2 bg-[#1A2740] rounded-full mt-8 overflow-hidden">
        <div className="w-[75%] h-full bg-gradient-to-r from-cyan-400 to-blue-500" />
      </div>
    </div>
  );
}
