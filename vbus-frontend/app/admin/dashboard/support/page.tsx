import ChatHeader from "@/components/admin/supports/ChatHeader";
import ChatMessages from "@/components/admin/supports/ChatMessages";
import ChatSidebar from "@/components/admin/supports/ChatSidebar";
import CustomerInfo from "@/components/admin/supports/CustomerInfo";
import MessageInput from "@/components/admin/supports/MessageInput";
import SupportTopbar from "@/components/admin/supports/SupportTopbar";

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[#081120] text-white flex flex-col">
      <SupportTopbar />

      <div className="flex flex-1 overflow-hidden">
        <ChatSidebar />

        <div className="flex-1 flex flex-col">
          <ChatHeader />

          <ChatMessages />

          <MessageInput />
        </div>

        <CustomerInfo />
      </div>
    </div>
  );
}
