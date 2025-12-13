
import React, { useState } from 'react';
import { Search, Filter, Pencil, ChevronDown, MessageCircle, Flame, Sun, Sprout, Droplets, Ban, XCircle, Slash, CircleDashed } from "lucide-react";
import { conversations as initialConversations } from './data';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const STATUS_CONFIG = {
  hot: { icon: Flame, color: "text-red-500", label: "Hot" },
  warm: { icon: Sun, color: "text-yellow-500", label: "Warm" },
  nurture: { icon: Sprout, color: "text-green-500", label: "Nurture" },
  drip: { icon: Droplets, color: "text-blue-500", label: "Drip" },
  not_interested: { icon: Ban, color: "text-gray-500", label: "Not interested" },
  wrong_number: { icon: XCircle, color: "text-red-400", label: "Wrong number" },
  dnc: { icon: Slash, color: "text-red-600", label: "DNC" },
  no_status: { icon: CircleDashed, color: "text-gray-300", label: "No status" }
};

export default function ConversationList() {
  const [conversations, setConversations] = useState(initialConversations);

  const handleStatusChange = (id, newStatus) => {
    setConversations(conversations.map(c => 
      c.id === id ? { ...c, status: newStatus } : c
    ));
  };

  const handleAddTag = (id) => {
    const tag = prompt("Enter new tag:");
    if (tag) {
      setConversations(conversations.map(c => 
        c.id === id ? { ...c, tags: [...c.tags, tag] } : c
      ));
    }
  };

  return (
    <div className="w-[600px] bg-white h-screen flex flex-col border-r border-[#E5E7EB] shrink-0 font-inter">
      {/* Tabs */}
      <div className="flex items-center border-b border-[#E5E7EB] px-2 pt-1">
        {['Unread', 'Recents', 'Starred', 'All'].map((tab, idx) => (
          <button 
            key={tab}
            className={`px-3 py-2.5 text-[13px] font-medium border-b-[2px] transition-colors ${
              idx === 0 
                ? "border-blue-600 text-blue-600" 
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search and Filter */}
      <div className="p-3 border-b border-[#E5E7EB] space-y-2.5">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-[13px] focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder-gray-400"
            />
          </div>
          <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded border border-gray-200">
            <Filter className="w-3.5 h-3.5" />
          </button>
          <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded border border-gray-200">
            <Pencil className="w-3.5 h-3.5" />
          </button>
        </div>
        
        <div className="flex items-center justify-between text-[11px] text-gray-500">
          <div className="flex items-center gap-1.5">
            <input type="checkbox" className="rounded-sm border-gray-300 w-3.5 h-3.5" />
            <span className="font-medium text-gray-400">64 RESULTS</span>
          </div>
          <button className="flex items-center gap-1 hover:text-gray-700 font-medium">
            Latest-All <ChevronDown className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conv) => {
          const StatusIcon = STATUS_CONFIG[conv.status]?.icon || STATUS_CONFIG.no_status.icon;
          const statusColor = STATUS_CONFIG[conv.status]?.color || STATUS_CONFIG.no_status.color;

          return (
            <div 
              key={conv.id}
              className={`flex gap-3 px-3 py-3 border-b border-gray-100 cursor-pointer hover:bg-[#F9FAFB] group transition-colors ${
                conv.selected ? "bg-blue-50/40 border-l-[3px] border-l-blue-600 pl-[9px]" : "pl-3 border-l-[3px] border-l-transparent"
              }`}
            >
              <div className="flex items-start gap-2 pt-1">
                 {/* Checkbox */}
                 <div className={`flex items-center justify-center mt-1`}>
                    <input type="checkbox" className="rounded-sm border-gray-300 w-3.5 h-3.5" checked={conv.selected} readOnly={conv.selected} />
                 </div>

                {/* Avatar */}
                <div className={`w-[38px] h-[38px] rounded-full ${conv.avatarColor} flex items-center justify-center text-white text-[11px] font-semibold relative shrink-0`}>
                  {conv.initials}
                  <div className="absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-[1px]">
                     <div className="bg-blue-500 rounded-full p-[2px]">
                       <MessageCircle size={7} className="text-white" fill="white" />
                     </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 min-w-0 flex flex-col justify-center gap-0.5">
                <div className="flex justify-between items-baseline">
                  <div className="flex items-center gap-2 overflow-hidden">
                    
                    {/* Status Icon - Moved Inline */}
                     <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className={`p-0.5 hover:bg-gray-100 rounded-full transition-colors ${statusColor} shrink-0`}>
                            <StatusIcon size={14} strokeWidth={2.5} />
                          </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="w-48 bg-white">
                          {Object.entries(STATUS_CONFIG).map(([key, config]) => (
                            <DropdownMenuItem 
                              key={key} 
                              className="flex items-center gap-2 cursor-pointer text-xs py-2"
                              onClick={(e) => { e.stopPropagation(); handleStatusChange(conv.id, key); }}
                            >
                              <config.icon className={`w-3.5 h-3.5 ${config.color}`} />
                              <span>{config.label}</span>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                     </DropdownMenu>

                    <h3 className="text-[13px] font-semibold text-gray-900 truncate">{conv.name}</h3>
                    
                    {/* Tags */}
                    <div className="flex items-center gap-1 overflow-hidden">
                      {conv.tags.map((tag, i) => (
                        <span key={i} className="px-1.5 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded-full border border-gray-200 font-medium whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleAddTag(conv.id); }}
                        className="w-4 h-4 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-blue-500 hover:border-blue-200 transition-colors text-[10px]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <span className="text-[10px] text-gray-400 whitespace-nowrap shrink-0 ml-2">{conv.time}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <p className={`text-[12px] truncate pr-2 leading-tight ${conv.unread > 0 ? "text-gray-700 font-medium" : "text-gray-500 font-normal"}`}>
                    {conv.lastMessage}
                  </p>
                  {conv.unread > 0 && (
                    <span className="inline-flex items-center justify-center min-w-[18px] h-[18px] px-1 bg-[#2563EB] text-white text-[10px] font-bold rounded-full shrink-0">
                      {conv.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
