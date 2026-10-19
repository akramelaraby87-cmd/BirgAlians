'use client';
import React from 'react';
import { Search, Bell, Sun, User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 px-6 py-3 flex items-center justify-between">
      {/* البحث */}
      <div className="relative w-72 hidden md:block">
        <input 
          type="text" 
          placeholder="ابحث عن مواد، ملخصات، أو إعلانات..."
          className="w-full pl-4 pr-10 py-2 bg-slate-100 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600"
        />
        <Search className="absolute right-3 top-2.5 text-slate-400" size={18} />
      </div>

      {/* الأدوات والمعلومات الشخصية */}
      <div className="flex items-center gap-4 mr-auto md:mr-0">
        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
          <Sun size={20} />
        </button>
        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full"></span>
        </button>

        <div className="h-6 w-px bg-slate-200"></div>

        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-sm">
            أكرم
          </div>
          <div className="hidden sm:block text-right">
            <p className="text-sm font-semibold text-slate-800">أكرم العربي</p>
            <p className="text-xs text-slate-500">طالب (Guest Mode)</p>
          </div>
        </div>
      </div>
    </header>
  );
}
