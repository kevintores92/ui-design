
import React from 'react';
import { 
  Star, 
  Mail, 
  Trash2, 
  Filter, 
  ChevronRight, 
  Phone,
  Paperclip,
  Smile,
  Send,
  ThumbsUp,
  ThumbsDown,
  Sparkles,
  ChevronDown
} from "lucide-react";
import { activeConversation } from './data';

export default function MessagePanel() {
  return (
    <div className="flex-1 flex flex-col h-screen bg-white relative font-inter">
      {/* Header */}
      <div className="h-[60px] px-5 border-b border-[#E5E7EB] flex items-center justify-between shrink-0 bg-white">
        <h2 className="text-[15px] font-semibold text-gray-900">{activeConversation.contact.name}</h2>
        
        <div className="flex items-center gap-0.5">
          <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-100">
            <Star className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </button>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-100">
            <Mail className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </button>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-100">
            <Trash2 className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </button>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-100">
            <Filter className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </button>
          <div className="h-5 w-px bg-gray-200 mx-1.5"></div>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-100">
            <ChevronRight className="w-[18px] h-[18px]" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white">
        {activeConversation.messages.map((msg) => (
          <div key={msg.id} className={`flex gap-3 ${msg.isMe ? "flex-row-reverse" : ""}`}>
            {/* Avatar for other person */}
            {!msg.isMe && (
              <div className={`w-[34px] h-[34px] rounded-full ${msg.avatarColor} flex items-center justify-center text-white text-[11px] font-semibold mt-0.5 shrink-0`}>
                {msg.initials}
              </div>
            )}
            
            {/* Avatar for me (optional, usually not shown in this layout but let's keep it clean) */}
            {msg.isMe && (
               <div className="w-[34px] h-[34px] rounded-full bg-indigo-600 flex items-center justify-center text-white text-[11px] font-semibold mt-0.5 shrink-0">
                 DR
               </div>
            )}

            <div className={`group max-w-[65%]`}>
              <div 
                className={`px-4 py-3 text-[14px] leading-relaxed shadow-sm relative ${
                  msg.isMe 
                    ? "bg-[#2563EB] text-white rounded-2xl rounded-tr-sm" 
                    : "bg-[#F3F4F6] text-gray-900 rounded-2xl rounded-tl-sm"
                }`}
              >
                {msg.content}
                
                {/* AI Sparkle Icon for specific messages (visual flair from screenshot) */}
                {msg.isMe && (
                    <div className="absolute -right-7 top-0 text-blue-300 opacity-60">
                        <Sparkles size={14} />
                    </div>
                )}
              </div>
              
              <div className={`flex items-center gap-2 mt-1 px-1 ${msg.isMe ? "justify-end" : ""}`}>
                 <span className="text-[11px] text-[#9CA3AF]">{msg.time}</span>
                 {msg.isMe && (
                    <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                         <ThumbsUp size={12} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                         <ThumbsDown size={12} className="text-gray-400 cursor-pointer hover:text-gray-600" />
                    </div>
                 )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 bg-white border-t border-[#E5E7EB] shrink-0">
        <div className="border border-[#E5E7EB] rounded-[6px] shadow-sm bg-white overflow-hidden">
           <div className="p-2.5">
               <textarea 
                  placeholder="Type a message..." 
                  className="w-full resize-none outline-none text-[14px] min-h-[36px] placeholder-gray-400"
                  rows={1}
               />
           </div>
           
           <div className="flex items-center justify-between px-3 py-1.5 border-t border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-3 text-gray-500">
                  <div className="flex items-center gap-3 text-[11px] font-medium mr-1">
                      <span className="text-gray-900 cursor-pointer">SMS</span>
                      <span className="text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">WhatsApp</span>
                      <span className="text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">Email</span>
                  </div>
                  <div className="h-3.5 w-px bg-gray-300"></div>
                  <div className="flex gap-2">
                    <Paperclip className="w-3.5 h-3.5 cursor-pointer text-gray-400 hover:text-gray-700" />
                    <Smile className="w-3.5 h-3.5 cursor-pointer text-gray-400 hover:text-gray-700" />
                  </div>
              </div>
              
              <div className="flex items-center gap-1">
                  <button className="p-1.5 bg-transparent hover:bg-gray-200 rounded text-gray-500">
                      <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <button className="p-1.5 bg-transparent hover:bg-gray-200 rounded text-gray-500">
                      <Send className="w-3.5 h-3.5" />
                  </button>
              </div>
           </div>
        </div>
        <div className="flex justify-between items-center mt-1.5 px-0.5">
           <div className="flex gap-3 text-[11px] text-gray-400">
              <span>SMS</span>
              <span>WhatsApp</span>
              <span>Email</span>
           </div>
           <span className="text-[10px] text-gray-400">
             Press Enter to send. Shift + Enter for new line.
           </span>
        </div>
      </div>
    </div>
  );
}
