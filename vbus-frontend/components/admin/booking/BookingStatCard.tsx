interface Props {
  title: string;
  value: string;
  growth: string;
  border: string;
}

export default function BookingStatCard({
  title,
  value,
  growth,
  border,
}: Props) {
  return (
    <div className={`flex-1 bg-[#121B2F] border rounded-2xl p-6 ${border}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="w-11 h-11 rounded-xl bg-[#172640]" />

        <span className="text-green-400 text-sm font-medium">{growth}</span>
      </div>

      <p className="text-gray-500 text-xs uppercase mb-2">{title}</p>

      <h2 className="text-4xl font-bold">{value}</h2>
    </div>
  );
}
