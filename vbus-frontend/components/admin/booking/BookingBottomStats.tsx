interface Props {
  title: string;
  value: string;
}

export default function BookingBottomStats({ title, value }: Props) {
  return (
    <div className="bg-[#4A5561]/80 backdrop-blur-md rounded-2xl px-5 py-4 border border-white/10">
      <p className="text-xs text-gray-300 mb-1">{title}</p>

      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
  );
}
