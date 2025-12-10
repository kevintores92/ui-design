import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  Paperclip, 
  Smile, 
  AlertCircle 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "contact";
  timestamp: Date;
  status?: "sent" | "delivered" | "read" | "failed";
}

// Mock messages
const mockMessages: Message[] = [
  {
    id: "1",
    content: "Hi Sarah, I saw you were looking at 123 Main St. Are you still interested in selling?",
    sender: "user",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    status: "read"
  },
  {
    id: "2",
    content: "Yes, I am. But I'm not sure about the price.",
    sender: "contact",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 23),
  },
  {
    id: "3",
    content: "I understand. What price range were you hoping for?",
    sender: "user",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 22),
    status: "read"
  },
  {
    id: "4",
    content: "Around $450k ideally.",
    sender: "contact",
    timestamp: new Date(Date.now() - 1000 * 60 * 5),
  }
];

export function ConversationView() {
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    // Mock send logic
    console.log("Sending outbound-reply:", newMessage);
    setNewMessage("");
  };

  return (
    <div className="flex flex-col h-full bg-slate-950/30">
      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
           {/* Alert Panel Example */}
           <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 flex items-start gap-3 mb-6">
              <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-destructive">Possible DNC Match</h4>
                <p className="text-xs text-destructive/80 mt-1">
                  This contact number appears on the National Do Not Call registry. Proceed with caution.
                </p>
              </div>
           </div>

          {mockMessages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex w-full",
                msg.sender === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[85%] rounded-2xl px-3.5 py-2 text-xs shadow-sm",
                  msg.sender === "user"
                    ? "bg-primary text-white rounded-br-none"
                    : "bg-slate-800 text-slate-100 rounded-bl-none"
                )}
              >
                {msg.content}
                <div className={cn(
                  "text-[10px] mt-1 text-right opacity-70",
                  msg.sender === "user" ? "text-primary-foreground" : "text-slate-400"
                )}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Composer */}
      <div className="p-3 border-t border-border bg-card/30">
        <div className="relative">
          <Textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="min-h-[80px] pr-24 bg-background resize-none border-border/50 focus-visible:ring-primary/50"
          />
          <div className="absolute bottom-2 right-2 flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-primary">
              <Paperclip className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-primary">
              <Smile className="w-4 h-4" />
            </Button>
            <Button onClick={handleSend} size="sm" className="h-7 px-3 gap-2 bg-primary hover:bg-primary/90 text-white">
              Send <Send className="w-3 h-3" />
            </Button>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-2 overflow-x-auto pb-1">
           <Badge variant="outline" className="cursor-pointer hover:bg-muted transition-colors text-[10px] font-normal whitespace-nowrap border-border/60">
             Quick Reply: "Available tomorrow?"
           </Badge>
           <Badge variant="outline" className="cursor-pointer hover:bg-muted transition-colors text-[10px] font-normal whitespace-nowrap border-border/60">
             Quick Reply: "Send pricing info"
           </Badge>
        </div>
      </div>
    </div>
  );
}
