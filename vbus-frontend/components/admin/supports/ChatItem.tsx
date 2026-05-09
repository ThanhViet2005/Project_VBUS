interface Props {
  name: string;
  message: string;
  time: string;
  active?: boolean;
}

export default function ChatItem({ name, message, time, active }: Props) {
  return (
    <div
      className={`px-6 py-5 border-l-4 transition-all ${
        active ? "border-cyan-400 bg-[#121D34]" : "border-transparent"
      }`}
    >
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-full bg-[#223654] flex items-center justify-center text-cyan-300 font-semibold text-xl">
              {name.charAt(0)}
            </div>

            {active && (
              <div className="absolute bottom-1 right-0 w-3 h-3 rounded-full bg-green-400 border border-[#081120]" />
            )}
          </div>

          <div>
            <h3 className="text-[17px] font-semibold text-cyan-300 mb-1">
              {name}
            </h3>

            <p className="text-sm text-gray-400 max-w-[250px] leading-6">
              {message}
            </p>
          </div>
        </div>

        <span className="text-xs text-gray-500">{time}</span>
      </div>
    </div>
  );
}
