import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Search, Star, Phone, Mic, ArrowUpRight, ArrowDownLeft, SlidersHorizontal, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Conversation {
  id: string;
  contactName: string;
  avatar?: string;
  lastMessage: string;
  timestamp: Date;
  unreadCount?: number;
  status?: "open" | "closed";
  label?: string;
  isStarred?: boolean;
  type?: "message" | "call" | "audio";
  phoneNumber?: string;
}

// Mock data
const conversations: Conversation[] = [
  {
    id: "1",
    contactName: "Adam Nasir",
    lastMessage: "Audio message",
    timestamp: new Date("2025-01-18T14:40:00"),
    type: "audio",
    isStarred: true,
    phoneNumber: "+1 (555) 123-4567"
  },
  {
    id: "2",
    contactName: "Ethan Russo",
    lastMessage: "Missed call",
    timestamp: new Date("2024-12-24T02:41:00"),
    unreadCount: 1,
    type: "call",
    label: "No answer",
    isStarred: true,
    phoneNumber: "+1 (727) 756-0779"
  },
  {
    id: "3",
    contactName: "Jay Carter",
    lastMessage: "Outbound call",
    timestamp: new Date("2024-12-24T02:37:00"),
    type: "call",
    label: "Lead",
    isStarred: true,
    phoneNumber: "+1 (555) 987-6543"
  },
  {
    id: "4",
    contactName: "Mark Latta",
    lastMessage: "I never did.",
    timestamp: new Date("2024-09-18T02:32:00"),
    label: "Not Interested",
    isStarred: true,
    phoneNumber: "+1 (555) 456-7890"
  },
  {
    id: "5",
    contactName: "Herman Ringer",
    lastMessage: "$200.000.",
    timestamp: new Date("2024-09-18T02:21:00"),
    label: "Price Too High",
    isStarred: true,
    phoneNumber: "+1 (555) 222-3333"
  },
  {
    id: "6",
    contactName: "Rosana Vanhorn",
    lastMessage: "Not for sale",
    timestamp: new Date("2024-09-18T01:59:00"),
    label: "Not Interested",
    isStarred: true,
    phoneNumber: "+1 (555) 444-5555"
  },
  {
    id: "7",
    contactName: "Carl Ranshaw",
    lastMessage: "No Carl here and no...",
    timestamp: new Date("2024-09-18T01:56:00"),
    label: "Wrong Number",
    isStarred: true,
    phoneNumber: "+1 (555) 666-7777"
  },
  {
    id: "8",
    contactName: "Florine Ruben",
    lastMessage: "I'm sorry but you got...",
    timestamp: new Date("2024-09-18T01:42:00"),
    label: "Wrong Number",
    isStarred: true,
    phoneNumber: "+1 (555) 888-9999"
  },
  {
    id: "9",
    contactName: "Dewayne Ligans",
    lastMessage: "No 👎",
    timestamp: new Date("2024-09-18T01:41:00"),
    label: "Wrong Number",
    isStarred: true,
    phoneNumber: "+1 (555) 000-1111"
  },
  {
    id: "10",
    contactName: "Margaret Burson",
    lastMessage: "No",
    timestamp: new Date("2024-09-18T01:32:00"),
    label: "Not Interested",
    isStarred: true,
    phoneNumber: "+1 (555) 121-2121"
  }
];

interface ConversationListProps {
  selectedId?: string;
  onSelect: (id: string) => void;
}

export function ConversationList({ selectedId, onSelect }: ConversationListProps) {
  return (
    <div className="flex flex-col h-full bg-card/10">
      {/* Header with Search */}
      <div className="p-4 border-b border-border space-y-3 bg-card/20">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-2">
             <h2 className="font-semibold text-lg">Inbox</h2>
             <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full border border-dashed border-muted-foreground/50 text-muted-foreground hover:text-primary hover:border-primary">
                <span className="text-xs">+</span>
             </Button>
           </div>
           
           <div className="relative w-full max-w-xs ml-auto">
             <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
             <Input placeholder="Search..." className="pl-9 h-9 bg-background/50 text-sm rounded-lg" />
           </div>
        </div>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
           <div className="flex items-center gap-4">
             <div className="flex items-center gap-1 cursor-pointer hover:text-foreground transition-colors">
               <Checkbox className="h-3.5 w-3.5 mr-1" />
               <span>Sort by: Newest</span>
               <ArrowDownLeft className="w-3 h-3" />
             </div>
             <div className="flex items-center gap-1 cursor-pointer hover:text-foreground transition-colors">
               <span>Labels</span>
               <ArrowDownLeft className="w-3 h-3" />
             </div>
             <div className="flex items-center gap-1 cursor-pointer hover:text-foreground transition-colors">
               <span>Date: All Time</span>
               <ArrowDownLeft className="w-3 h-3" />
             </div>
           </div>
           <div className="flex items-center gap-1 cursor-pointer hover:text-foreground transition-colors">
              <Download className="w-3 h-3" />
              <span>Export</span>
           </div>
        </div>
      </div>

      {/* List content */}
      <ScrollArea className="flex-1 bg-background/30">
        <div className="flex flex-col">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => onSelect(conversation.id)}
              className={cn(
                "grid grid-cols-[auto_2fr_3fr_1fr_auto] gap-4 items-center p-3.5 border-b border-border/40 hover:bg-muted/30 cursor-pointer transition-all",
                selectedId === conversation.id && "bg-muted/50 border-l-[3px] border-l-primary pl-[11px]"
              )}
            >
              {/* Checkbox */}
              <div onClick={(e) => e.stopPropagation()}>
                <Checkbox className="h-4 w-4 rounded-[4px] border-muted-foreground/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary" />
              </div>
              
              {/* Name & Star */}
              <div className="flex items-center gap-2 min-w-0">
                 <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center shrink-0 text-xs font-medium text-muted-foreground">
                    {conversation.contactName.slice(0, 2).toUpperCase()}
                 </div>
                 <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1.5">
                       {conversation.isStarred && <Star className="w-3 h-3 text-muted-foreground fill-transparent" />}
                       <span className={cn("font-medium text-sm truncate", selectedId === conversation.id ? "text-primary" : "text-foreground")}>
                         {conversation.contactName}
                       </span>
                    </div>
                 </div>
              </div>

              {/* Message Preview */}
              <div className="text-sm text-muted-foreground truncate flex items-center gap-2">
                  {conversation.type === 'call' && <Phone className="w-3.5 h-3.5 shrink-0 opacity-70" />}
                  {conversation.type === 'audio' && <Mic className="w-3.5 h-3.5 shrink-0 opacity-70" />}
                  <span className={cn(conversation.unreadCount && "font-medium text-foreground")}>
                    {conversation.lastMessage}
                  </span>
              </div>

              {/* Date */}
              <div className="text-xs text-muted-foreground text-right">
                <div className="font-medium">{conversation.timestamp.toLocaleDateString()}</div>
                <div className="text-[10px] opacity-70">{conversation.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
              </div>

              {/* Label/Badge */}
              <div className="flex justify-end min-w-[80px]">
                 {conversation.label ? (
                    <Badge variant="outline" className={cn(
                      "text-[10px] px-2 py-0.5 h-5 border-0 font-medium whitespace-nowrap",
                      conversation.label === "Lead" && "bg-blue-500/10 text-blue-400",
                      conversation.label === "Not Interested" && "bg-red-500/10 text-red-400",
                      conversation.label === "Wrong Number" && "bg-purple-500/10 text-purple-400",
                      conversation.label === "No answer" && "bg-slate-500/10 text-slate-400",
                      conversation.label === "Price Too High" && "bg-orange-500/10 text-orange-400",
                    )}>
                      {conversation.label}
                      <ArrowDownLeft className="w-2.5 h-2.5 ml-1 opacity-50" />
                    </Badge>
                 ) : (
                    <div className="w-full h-5"></div>
                 )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
