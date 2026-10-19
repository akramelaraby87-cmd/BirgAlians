'use client';
import React, { useState } from 'react';
import { 
  Home, BookOpen, Library, CheckSquare, Calendar, Clock, 
  Bell, Users, Briefcase, Award, MessageSquare, AlertCircle, 
  Heart, HelpCircle, Settings, LogOut, Menu, X 
} from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { name: 'الرئيسية (Home)', icon: Home, href: '#' },
    { name: 'المقررات (Courses)', icon: BookOpen, href: '#' },
    { name: 'المكتبة (Study Library)', icon: Library, href: '#' },
    { name: 'المهام (Assignments)', icon: CheckSquare, href: '#' },
    { name: 'الامتحانات (Exams & Quizzes)', icon: Calendar, href: '#' },
    { name: 'الجدول (Timetable)', icon: Clock, href: '#' },
    { name: 'الإشعارات (Notifications)', icon: Bell, href: '#' },
    { name: 'المجتمع (Community)', icon: Users, href: '#' },
    { name: 'الفرص (Opportunities)', icon: Briefcase, href: '#' },
    { name: 'المقترحات (Suggestions)', icon: MessageSquare, href: '#' },
    { name: 'البلاغات (Reports)', icon: AlertCircle, href: '#' },
    { name: 'ساهم في BirgAlians', icon: Heart, href: '#' },
    { name: 'مركز المساعدة (Help)', icon: HelpCircle, href: '#' },
    { name: 'الإعدادات (Settings)', icon: Settings, href: '#' },
  ];

  return (
    <>
      {/* زر فتح القائمة للهواتف */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-emerald-900 text-white rounded-md"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* القائمة الجانبية */}
      <aside className={`fixed top-0 right-0 h-full w-64 bg-emerald-950 text-slate-100 p-4 transition-transform z-40 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>
        <div className="flex items-center gap-3 mb-8 px-2 border-b border-emerald-800 pb-4">
          <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
            BA
          </div>
          <div>
            <h1 className="font-bold text-lg text-emerald-400">BirgAlians</h1>
            <p className="text-xs text-slate-400">منصة طلابية مستقلة</p>
          </div>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <a
                key={idx}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-emerald-800 hover:text-white transition-colors"
              >
                <Icon size={18} className="text-emerald-400" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </nav>

        <div className="mt-8 pt-4 border-t border-emerald-800">
          <button className="flex items-center gap-3 w-full px-3 py-2 text-sm text-red-400 hover:bg-red-950/50 rounded-lg transition-colors">
            <LogOut size={18} />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>
    </>
  );
}
