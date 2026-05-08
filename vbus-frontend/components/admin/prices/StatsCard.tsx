interface Props {
  title: string;
  value: string;
  sub: string;
}

export default function StatsCard({ title, value, sub }: Props) {
  return (
    <div className="bg-[#121C33] border border-[#1F2B45] rounded-2xl p-5 flex-1 hover:border-cyan-500 transition-all duration-300">
      <p className="text-gray-400 text-sm mb-4">{title}</p>

      <h3 className="text-3xl font-bold text-white mb-2">{value}</h3>

      <p className="text-sm text-cyan-400">{sub}</p>
    </div>
  );
}
