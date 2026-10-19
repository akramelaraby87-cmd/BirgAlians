import React from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { BookOpen, Library, Clock, HelpCircle, Heart, ArrowLeft, FileText, BellRing } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex bg-slate-50">
      <Sidebar />

      <div className="flex-1 lg:mr-64 flex flex-col min-w-0">
        <Navbar />

        <main className="p-6 space-y-6 max-w-7xl w-full mx-auto">
          {/* لافتة الترحيب الهوية */}
          <section className="bg-emerald-900 text-white rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
            <div className="relative z-10 space-y-3">
              <span className="bg-emerald-700 text-emerald-200 text-xs px-3 py-1 rounded-full font-medium">
                نسخة الأولية — BirgAlians
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">أهلاً بك في BirgAlians 👋</h2>
              <p className="text-emerald-100 text-sm md:text-base max-w-xl">
                "نتعلم معًا ونساعد بعضنا على النجاح."
                <br />
                Learn together. Grow together.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#" className="bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-bold px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2">
                  <Library size={16} /> تصفح المكتبة
                </a>
                <a href="#" className="bg-emerald-800 hover:bg-emerald-700 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2">
                  <Clock size={16} /> الجدول الدراسي
                </a>
              </div>
            </div>
          </section>

          {/* بطاقات الوصول السريع */}
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: 'المقررات', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
              { title: 'المكتبة', icon: Library, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { title: 'الجدول الدراسي', icon: Clock, color: 'text-purple-600', bg: 'bg-purple-50' },
              { title: 'الاختبارات', icon: FileText, color: 'text-amber-600', bg: 'bg-amber-50' },
              { title: 'الفرص والأنشطة', icon: BellRing, color: 'text-indigo-600', bg: 'bg-indigo-50' },
              { title: 'دعم المنصة', icon: Heart, color: 'text-rose-600', bg: 'bg-rose-50' },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center cursor-pointer">
                  <div className={`p-3 rounded-xl ${card.bg} ${card.color} mb-2`}>
                    <Icon size={24} />
                  </div>
                  <span className="text-xs font-semibold text-slate-700">{card.title}</span>
                </div>
              );
            })}
          </section>

          {/* قسم أحدث المحتويات واللوحة الجانبية */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* أحدث المحتويات */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="font-bold text-slate-800">أحدث المحتويات المضافة</h3>
                <a href="#" className="text-xs text-emerald-600 font-semibold flex items-center gap-1 hover:underline">
                  عرض الكل <ArrowLeft size={14} />
                </a>
              </div>

              <div className="space-y-3">
                {[
                  { title: 'ملخص محاضرات البرمجة الهيكلية (C)', date: 'اليوم', type: 'PDF', category: 'ICT' },
                  { title: 'بنك أسئلة مادة الشبكات الأسبوع الثالث', date: 'أمس', type: 'Quiz', category: 'Cybersecurity' },
                  { title: 'دليل البدء في نظام Linux Arch', date: 'منذ يومين', type: 'Guide', category: 'General' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 border border-slate-100 transition-colors">
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-800">{item.title}</p>
                      <span className="text-xs text-slate-400">{item.category} • {item.date}</span>
                    </div>
                    <span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 font-medium rounded-md">
                      {item.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* اللوحة الجانبية At a Glance */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-800 border-b pb-3">لمحة سريعة (At a Glance)</h3>
              
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <p className="text-xs text-slate-500">الحالة العلمية</p>
                  <p className="text-sm font-semibold text-slate-700">الفصل الدراسي الحالي — active</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                  <p className="text-xs text-slate-500">تحديثات المجتمع</p>
                  <p className="text-sm font-semibold text-slate-700">3 منشورات جديدة تنتظر المراجعة</p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                  <p className="text-xs text-emerald-700 font-medium">ساهم في تطوير BirgAlians</p>
                  <p className="text-xs text-emerald-900 mt-1">مشروع طلابي مستقل بالكامل بميزانية صفر.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
