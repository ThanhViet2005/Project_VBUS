interface Props {
  title: string;
  value: string;
  growth: string;
  color: string;
}

export default function ForecastCard({ title, value, growth, color }: Props) {
  return (
    <div className={`bg-[#121B2F] border rounded-3xl p-6 ${color}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12 rounded-xl bg-[#1A2945]" />

        <span className="text-green-400 text-sm">{growth}</span>
      </div>

      <p className="text-xs uppercase text-gray-400 leading-6 mb-4">{title}</p>

      <h2 className="text-4xl font-bold">{value}</h2>
    </div>
  );
}
