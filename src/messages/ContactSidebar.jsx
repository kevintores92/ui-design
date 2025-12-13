
import React from 'react';
import { 
  UserCircle, 
  Calendar, 
  CheckSquare, 
  FileText, 
  Mail, 
  Phone, 
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Plus,
  CircleOff,
  Voicemail,
  MessageSquare,
  AlertCircle
} from "lucide-react";
import { activeConversation } from './data';

export default function ContactSidebar() {
  return (
    <div className="w-[300px] bg-[#F9FAFB] h-screen flex flex-col border-l border-[#E5E7EB] shrink-0 overflow-y-auto font-inter">
      {/* Contact Profile Header */}
      <div className="p-5 flex flex-col items-center border-b border-[#E5E7EB] bg-white">
        <div className={`w-[72px] h-[72px] rounded-full ${activeConversation.contact.avatarColor} flex items-center justify-center text-white text-xl font-medium mb-2.5`}>
          {activeConversation.contact.initials}
        </div>
        <h3 className="text-[15px] font-semibold text-gray-900 flex items-center gap-1.5 mb-0.5">
          {activeConversation.contact.name}
          <ExternalLink className="w-3.5 h-3.5 text-blue-500 cursor-pointer" />
        </h3>
        
        <div className="flex gap-3 mt-3">
           <button className="p-1.5 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 hover:text-green-600 transition-colors bg-white">
              <Phone className="w-3.5 h-3.5" />
           </button>
           <button className="p-1.5 rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 hover:text-blue-600 transition-colors bg-white">
              <Mail className="w-3.5 h-3.5" />
           </button>
        </div>
      </div>
      
      {/* Right Sidebar Menu Icons */}
      <div className="flex border-b border-[#E5E7EB] bg-white">
         <div className="flex-1 p-2.5 flex justify-center border-b-2 border-blue-600 text-blue-600">
            <UserCircle className="w-[18px] h-[18px]" strokeWidth={1.5} />
         </div>
         <div className="flex-1 p-2.5 flex justify-center text-gray-400 hover:bg-gray-50 cursor-pointer">
            <Calendar className="w-[18px] h-[18px]" strokeWidth={1.5} />
         </div>
         <div className="flex-1 p-2.5 flex justify-center text-gray-400 hover:bg-gray-50 cursor-pointer">
            <CheckSquare className="w-[18px] h-[18px]" strokeWidth={1.5} />
         </div>
         <div className="flex-1 p-2.5 flex justify-center text-gray-400 hover:bg-gray-50 cursor-pointer">
            <FileText className="w-[18px] h-[18px]" strokeWidth={1.5} />
         </div>
      </div>

      {/* Accordion Sections */}
      <div className="flex-1 bg-[#F9FAFB]">
        
        {/* Contact Info */}
        <div className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
           <button className="w-full flex items-center justify-between p-3.5 hover:bg-gray-100/50">
              <span className="font-medium text-[#6B7280] text-[13px] tracking-wide">Contact</span>
              <ChevronUp className="w-3.5 h-3.5 text-gray-400" />
           </button>
           <div className="px-3.5 pb-3.5 space-y-3.5 bg-[#F9FAFB]">
              <div className="group">
                 <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                       <Mail className="w-3 h-3" /> Email
                    </div>
                    <Plus className="w-3 h-3 text-blue-600 cursor-pointer opacity-0 group-hover:opacity-100" />
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    <span className="text-[13px] text-gray-900">{activeConversation.contact.email}</span>
                 </div>
              </div>
              
              <div className="group">
                 <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-1.5 text-[11px] text-gray-500 font-medium">
                       <Phone className="w-3 h-3" /> Phone
                    </div>
                    <Plus className="w-3 h-3 text-blue-600 cursor-pointer opacity-0 group-hover:opacity-100" />
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    <span className="text-[13px] text-gray-900">{activeConversation.contact.phone}</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Owner */}
        <div className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
           <button className="w-full flex items-center justify-between p-3.5 hover:bg-gray-100/50">
              <span className="font-medium text-[#6B7280] text-[13px] tracking-wide">Owner (Assigned to)</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
           </button>
           <div className="px-3.5 pb-3.5">
              <div className="flex items-center gap-2">
                 <div className="w-5 h-5 rounded-full bg-[#C5A572] flex items-center justify-center text-white text-[9px] font-bold">DR</div>
                 <span className="text-[13px] text-gray-700">{activeConversation.contact.owner}</span>
              </div>
           </div>
        </div>

        {/* Tags */}
        <div className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
           <button className="w-full flex items-center justify-between p-3.5 hover:bg-gray-100/50">
              <span className="font-medium text-[#6B7280] text-[13px] tracking-wide">Tags</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
           </button>
        </div>

        {/* Active Automations */}
        <div className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
           <button className="w-full flex items-center justify-between p-3.5 hover:bg-gray-100/50">
              <span className="font-medium text-[#6B7280] text-[13px] tracking-wide">Active Automations</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
           </button>
        </div>

        {/* DND */}
        <div className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
           <button className="w-full flex items-center justify-between p-3.5 hover:bg-gray-100/50">
              <span className="font-medium text-[#6B7280] text-[13px] tracking-wide">DND</span>
              <span className="text-[11px] text-gray-500 mr-1.5">Partial</span>
              <ChevronUp className="w-3.5 h-3.5 text-gray-400" />
           </button>
           
           <div className="px-3.5 pb-3.5 space-y-2.5">
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-2 text-[13px] text-gray-600">
                    <CircleOff className="w-3.5 h-3.5 text-gray-400" /> DND All
                 </div>
                 <input type="checkbox" className="rounded-sm border-gray-300 w-3.5 h-3.5" />
              </div>
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-2 text-[13px] text-gray-600">
                    <Voicemail className="w-3.5 h-3.5 text-gray-400" /> DND Calls & Voicemails
                 </div>
                 <input type="checkbox" className="rounded-sm border-gray-300 w-3.5 h-3.5" />
              </div>
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-2 text-[13px] text-gray-600">
                    <MessageSquare className="w-3.5 h-3.5 text-gray-400" /> DND Text Message
                 </div>
                 <input type="checkbox" className="rounded-sm border-gray-300 w-3.5 h-3.5" />
              </div>
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-2 text-[13px] text-gray-600">
                    <Mail className="w-3.5 h-3.5 text-gray-400" /> DND Emails
                 </div>
                 <div className="flex items-center gap-1.5">
                     <AlertCircle className="w-3 h-3 text-gray-400" />
                     <input type="checkbox" checked readOnly className="rounded-sm border-gray-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5" />
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}
