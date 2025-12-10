import { MessengerSidebar } from "@/components/messenger/MessengerSidebar";
import { ConversationList } from "@/components/messenger/ConversationList";
import { RightPanel } from "@/components/messenger/RightPanel";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Messenger() {
  const [selectedConversationId, setSelectedConversationId] = useState<string>("2");
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);

  return (
    <div className="flex w-full h-[calc(100vh-64px)] overflow-hidden bg-background">
      {/* 1. Far Left: Folders Sidebar (15%) */}
      <div className="w-[15%] shrink-0 border-r border-border h-full hidden lg:block">
        <MessengerSidebar />
      </div>

      {/* 2. Middle: Thread List (52%) */}
      <div 
         className={cn(
            "shrink-0 border-r border-border h-full flex flex-col bg-background transition-all duration-300",
            isRightPanelOpen ? "w-[65%]" : "flex-1"
         )}
      >
        <ConversationList 
          selectedId={selectedConversationId} 
          onSelect={(id) => {
            setSelectedConversationId(id);
            setIsRightPanelOpen(true);
          }} 
        />
      </div>

      {/* 3. Right: Conversation Details/Chat (28%) */}
      <div 
         className={cn(
            "h-full bg-card z-10 transition-all duration-300 ease-in-out border-l border-border",
            isRightPanelOpen ? "w-[20%] translate-x-0 opacity-100" : "w-0 translate-x-full opacity-0 overflow-hidden border-l-0"
         )}
      >
        <RightPanel 
           onCollapse={() => setIsRightPanelOpen(false)} 
           isCollapsed={!isRightPanelOpen}
        />
      </div>
    </div>
  );
}
