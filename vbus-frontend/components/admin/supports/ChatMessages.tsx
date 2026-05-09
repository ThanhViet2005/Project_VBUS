import { messages } from "@/data/supports";
import MessageBubble from "./MessageBubble";

export default function ChatMessages() {
  return (
    <div className="flex-1 overflow-y-auto px-8 py-8 space-y-8">
      <div className="flex justify-center">
        <span className="px-5 py-2 rounded-full bg-[#151F38] text-xs text-gray-500 uppercase tracking-wider">
          Hôm nay
        </span>
      </div>

      {messages.map((item, index) => (
        <MessageBubble
          key={index}
          sender={item.sender}
          text={item.text}
          time={item.time}
        />
      ))}
    </div>
  );
}
