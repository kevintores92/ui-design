import { 
  Inbox, 
  Mail, 
  PhoneMissed, 
  CornerUpLeft, 
  Clock, 
  Ban, 
  Trash2, 
  ChevronDown,
  ChevronRight,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function MessengerSidebar() {
  const [activeFolder, setActiveFolder] = useState("all");
  const [activeSection, setActiveSection] = useState<string | null>("campaigns");

  const sidebarItems = [
    { id: "all", label: "All", icon: Inbox, count: 12 },
    { id: "unread", label: "Unread", icon: Mail, count: 5 },
    { id: "missed", label: "Missed calls", icon: PhoneMissed, count: 0 },
    { id: "unreplied", label: "Unreplied", icon: CornerUpLeft, count: 2 },
    { id: "awaiting", label: "Awaiting reply", icon: Clock, count: 8 },
    { id: "opted_out", label: "Opted out", icon: Ban },
    { id: "deleted", label: "Deleted", icon: Trash2 },
  ];

  const secondaryNav = [
    { 
      id: "campaigns",
      label: "Campaigns", 
      items: ["Q4 Outreach", "Cold Leads", "Warm Follow-up"] 
    },
    { 
      id: "labels",
      label: "Labels", 
      items: ["Hot", "Warm", "Cold"] 
    },
    { 
      id: "groups",
      label: "Groups", 
      items: ["Team A", "Team B"] 
    },
  ];

  return (
    <div className="flex flex-col h-full bg-card/30">
      <div className="p-4 flex items-center justify-between border-b border-border/50">
        <div className="flex items-center gap-2 font-semibold">
          Inbox
        </div>
      </div>

      <ScrollArea className="flex-1 px-3 py-3">
        <div className="space-y-1">
          {sidebarItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-between font-normal h-9",
                activeFolder === item.id 
                  ? "bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
              onClick={() => setActiveFolder(item.id)}
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </div>
              {item.count !== undefined && item.count > 0 && (
                <span className={cn(
                  "text-[10px] px-1.5 py-0.5 rounded-full font-medium",
                  activeFolder === item.id ? "bg-primary/20" : "bg-muted"
                )}>
                  {item.count}
                </span>
              )}
            </Button>
          ))}
        </div>

        <Separator className="my-4" />

        <div className="space-y-2">
          {secondaryNav.map((section) => (
            <div key={section.id}>
              <button 
                className="flex items-center justify-between w-full px-2 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
              >
                <span>{section.label}</span>
                {activeSection === section.id ? (
                  <ChevronDown className="h-3 w-3" />
                ) : (
                  <ChevronRight className="h-3 w-3" />
                )}
              </button>
              
              {activeSection === section.id && (
                <div className="mt-1 ml-2 space-y-0.5 border-l border-border/50 pl-2">
                  {section.items.map((item) => (
                    <Button
                      key={item}
                      variant="ghost"
                      className="w-full justify-start font-normal h-8 text-xs text-muted-foreground"
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t border-border mt-auto">
         <div className="text-xs font-medium text-muted-foreground px-2 py-2 hover:text-foreground cursor-pointer transition-colors">
           Macros
         </div>
      </div>
    </div>
  );
}
