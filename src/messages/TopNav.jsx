
import React from 'react';
import { Search, Bell, HelpCircle, Plus } from "lucide-react";

export default function TopNav() {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 z-10 font-inter">
      {/* Left: Breadcrumbs or Title */}
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-gray-800">Conversations</h1>
        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">v2.0</span>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Global Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search everything..." 
            className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>

        {/* Quick Action */}
        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          <Plus className="w-4 h-4" />
          <span>New Message</span>
        </button>

        <div className="h-8 w-px bg-gray-200 mx-2"></div>

        {/* Icons */}
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors">
          <HelpCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
