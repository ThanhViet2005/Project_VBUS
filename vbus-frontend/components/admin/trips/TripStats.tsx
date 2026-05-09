interface Props {
  title: string;
  value: string;
  sub?: string;
  yellow?: boolean;
}

export default function TripStats({ title, value, sub, yellow }: Props) {
  return (
    <div className="flex-1 bg-[#10182B] border border-[#1F2B45] rounded-2xl p-7">
      <p className="text-gray-500 mb-4 uppercase text-sm">{title}</p>

      <div className="flex items-end gap-4">
        <h2
          className={`text-5xl font-bold ${
            yellow ? "text-yellow-400" : "text-cyan-400"
          }`}
        >
          {value}
        </h2>

        {sub && <p className="text-green-400 font-semibold mb-2">{sub}</p>}
      </div>
    </div>
  );
}
