interface Props {
  sender: string;
  text: string;
  time: string;
}

export default function MessageBubble({ sender, text, time }: Props) {
  const isAdmin = sender === "admin";

  return (
    <div className={`flex ${isAdmin ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[560px] px-7 py-6 rounded-[26px] ${
          isAdmin
            ? "bg-gradient-to-r from-cyan-400 to-blue-500"
            : "bg-[#151F38]"
        }`}
      >
        <p className="text-[17px] leading-9">{text}</p>

        <span
          className={`text-xs mt-4 block ${
            isAdmin ? "text-cyan-100" : "text-gray-500"
          }`}
        >
          {time}
        </span>
      </div>
    </div>
  );
}
