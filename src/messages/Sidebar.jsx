
import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  CheckSquare,
  ChevronRight
} from "lucide-react";
import { navigationItems, currentUser } from './data';

export default function Sidebar() {
  // State to track expanded items, initialized with 'ai-agent' open for visibility
  const [expandedItems, setExpandedItems] = useState(['ai-agent']);

  const toggleExpand = (id) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="w-[240px] bg-[#111827] h-screen flex flex-col text-gray-400 shrink-0 border-r border-gray-800 font-inter">
      {/* Header / Account Switcher */}
      <div className="h-[64px] px-3 flex items-center justify-between border-b border-gray-800 bg-[#111827]">
        <div className="flex items-center gap-2.5 w-full">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-sm shadow-lg shadow-blue-900/20">
            <CheckSquare size={16} />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-white text-[13px] font-semibold truncate">Dhairya Raghav</span>
            <span className="text-[11px] truncate text-gray-500">Workspace Admin</span>
          </div>
          <ChevronDown className="w-3.5 h-3.5 ml-auto text-gray-500" />
        </div>
      </div>

      {/* Search */}
      <div className="px-3 py-3">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
          <input 
            type="text" 
            placeholder="Search menu" 
            className="w-full bg-[#1F2937] border border-gray-800/50 rounded-md text-[13px] py-1.5 pl-8 pr-8 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-gray-700 focus:bg-[#374151] transition-all"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
             <span className="text-[9px] bg-gray-800 px-1.5 py-0.5 rounded text-gray-500 border border-gray-700">/</span>
          </div>
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto py-1 custom-scrollbar px-2 space-y-0.5">
        {navigationItems.map((item) => (
          <div key={item.id}>
            <div 
              onClick={() => item.children && toggleExpand(item.id)}
              className={`group flex items-center gap-3 px-3 py-2 rounded-md transition-all text-[13px] cursor-pointer ${
                item.active 
                  ? "bg-[#1F2937] text-white font-medium shadow-sm" 
                  : "text-gray-400 hover:bg-[#1F2937]/50 hover:text-gray-200"
              }`}
            >
              <item.icon className={`w-[18px] h-[18px] ${item.active ? "text-blue-400" : "text-gray-500 group-hover:text-gray-400"}`} strokeWidth={1.5} />
              <span className="flex-1 truncate">{item.label}</span>
              {item.children && (
                <ChevronRight 
                  className={`w-3.5 h-3.5 text-gray-600 transition-transform duration-200 ${expandedItems.includes(item.id) ? "rotate-90" : ""}`} 
                />
              )}
            </div>

            {/* Sub-items */}
            {item.children && expandedItems.includes(item.id) && (
              <div className="ml-4 pl-3 border-l border-gray-800 my-1 space-y-0.5">
                {item.children.map((child) => (
                  <a 
                    key={child.id}
                    href="#" 
                    className="flex items-center gap-3 px-3 py-1.5 rounded-md transition-all text-[12px] text-gray-500 hover:text-gray-200 hover:bg-[#1F2937]/30"
                  >
                    <child.icon className="w-3.5 h-3.5 opacity-70" strokeWidth={1.5} />
                    <span className="truncate">{child.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Footer / Branding */}
      <div className="p-4 border-t border-gray-800 bg-[#111827]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-green-400 flex items-center justify-center shrink-0 shadow-lg shadow-green-900/20">
            <span className="text-black font-bold text-sm tracking-tight">LG</span>
          </div>
          <div className="flex flex-col">
             <span className="text-white text-[15px] font-bold leading-tight">Lead Genie</span>
             <span className="text-teal-500 text-[10px] tracking-[0.15em] font-medium uppercase mt-0.5">REI Lead Engine</span>
          </div>
        </div>
        
        <div className="h-px w-full bg-gray-800 mb-3"></div>
        
        <p className="text-[10px] text-gray-600 text-center font-medium">
          © 2025 Lead Genie. All rights reserved.
        </p>
      </div>
    </div>
  );
}
