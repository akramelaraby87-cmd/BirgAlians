import React from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { BookOpen, Search, Download, FileText, Filter } from 'lucide-react';

export default function LibraryPage() {
  const resources = [
    { id: 1, title: 'أساسيات البرمجة بلغة C', course: 'برمجة الحاسب', type: 'PDF', size: '2.4 MB', year: 'السنة الأولى' },
    { id: 2, title: 'مقدمة في الأمن السيبراني والشبكات', course: 'الشبكات', type: 'PDF', size: '4.1 MB', year: 'السنة الثانية' },
    { id: 3, title: 'شرح مفاهيم الأتمتة والمتحكمات ESP32', course: 'أنظمة مدمجة', type: 'PDF', size: '3.8 MB', year: 'السنة الثانية' },
    { id: 4, title: 'بنك أسئلة الرياضيات التطبيقية', course: 'رياضيات', type: 'Quiz', size: '1.2 MB', year: 'السنة الأولى' },
  ];

  return (
    <div className="min-h-screen flex bg-slate-50">
      <Sidebar />

      <div className="flex-1 lg:mr-64 flex flex-col min-w-0">
        <Navbar />

        <main className="p-6 space-y-6 max-w-7xl w-full mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <BookOpen className="text-emerald-700" /> المكتبة التعليمية
              </h1>
              <p className="text-xs text-slate-500 mt-1">تصفّح وقم بتحميل الملخصات والموارد التعليمية الحرة</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="بحث في المكتبة..."
                  className="pl-4 pr-9 py-2 bg-white text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
                <Search className="absolute right-3 top-2.5 text-slate-400" size={16} />
              </div>
              <button className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 text-sm flex items-center gap-2 hover:bg-slate-50">
                <Filter size={16} /> تصفية
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {resources.map((item) => (
              <div key={item.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-start justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-semibold px-2.5 py-0.5 bg-emerald-50 text-emerald-700 rounded-md">
                    {item.course} — {item.year}
                  </span>
                  <h3 className="font-bold text-slate-800 text-base">{item.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><FileText size={14} /> {item.type}</span>
                    <span>•</span>
                    <span>{item.size}</span>
                  </div>
                </div>

                <button className="p-2.5 bg-emerald-900 hover:bg-emerald-800 text-white rounded-lg transition-colors flex items-center gap-1 text-xs">
                  <Download size={16} /> تحميل
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
