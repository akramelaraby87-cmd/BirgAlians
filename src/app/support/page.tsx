'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { Heart, Code, BookOpen, ShieldCheck, Send, CheckCircle, Info } from 'lucide-react';

export default function SupportPage() {
  const [volSubmitted, setVolSubmitted] = useState(false);

  const handleVolunteer = (e: React.FormEvent) => {
    e.preventDefault();
    setVolSubmitted(true);
  };

  return (
    <div className="min-h-screen flex bg-slate-50">
      <Sidebar />

      <div className="flex-1 lg:mr-64 flex flex-col min-w-0">
        <Navbar />

        <main className="p-6 space-y-6 max-w-7xl w-full mx-auto">
          {/* لافتة التعريف والمبادئ */}
          <div className="bg-emerald-900 text-white rounded-2xl p-6 md:p-8 shadow-sm space-y-3">
            <span className="bg-emerald-700 text-emerald-200 text-xs px-3 py-1 rounded-full font-medium">
              مبادرة طلابية مستقلة — Transparency & Support
            </span>
            <h1 className="text-2xl md:text-3xl font-bold">ساهم في استمرار BirgAlians 💖</h1>
            <p className="text-emerald-100 text-sm max-w-2xl leading-relaxed">
              BirgAlians مشروع طلابي مستقل يهدف إلى تسهيل الوصول إلى المعرفة وبناء مجتمع متعاون. 
              إذا وجدت المنصة مفيدة، يمكنك المساهمة في استمرارها وتطويرها. 
              المساهمة اختيارية، ولا يشترط الدفع للاستفادة من الخدمات التعليمية الأساسية.
            </p>
          </div>

          {/* مسارات الدعم الثلاثة */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* الدعم التقني */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                <Code size={20} />
              </div>
              <h3 className="font-bold text-slate-800 text-base">1. الدعم التقني</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                المساهمة في تطوير كود المنصة، اكتشاف الثغرات والأخطاء، تحسين التصميم، واختبار الأداء على مختلف الأجهزة.
              </p>
            </div>

            {/* الدعم التعليمي */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <BookOpen size={20} />
              </div>
              <h3 className="font-bold text-slate-800 text-base">2. الدعم التعليمي</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                إعداد المحتوى الأصلي، كتابة ملخصات للمحاضرات، مراجعة الموارد المرفوعة، ومشاركة الكتب المسموح بنشرها.
              </p>
            </div>

            {/* الدعم المالي والشفافية */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                <Heart size={20} />
              </div>
              <h3 className="font-bold text-slate-800 text-base">3. الدعم المالي</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                لتغطية تكاليف الاستضافة والخوادم المستقبليّة. قسم الاستقبال غير مفعل حالياً حتى استكمال المتطلبات القانونية.
              </p>
            </div>
          </div>

          {/* نموذج التطوع والانضمام */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-800 border-b pb-3 flex items-center gap-2">
              <ShieldCheck className="text-emerald-600" /> نموذج التطوع لطلاب المنصة
            </h3>

            {volSubmitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-center gap-2">
                <CheckCircle size={18} className="text-emerald-600" />
                <span>شكراً لرغبتك في التطوع! تم تسجيل طلبك وسيتم التواصل معك عبر البريد الإلكتروني.</span>
              </div>
            ) : (
              <form onSubmit={handleVolunteer} className="space-y-4 max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">الاسم الكامل</label>
                    <input type="text" placeholder="أكرم علي" required className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">مجال التطوع</label>
                    <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm bg-white">
                      <option>تطوير برمجي (Full-Stack / UI)</option>
                      <option>إعداد ومراجعة ملخصات دراسية</option>
                      <option>إشراف وتنظيم المجتمع الطلابى</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">رسالة قصيرة أو خبرات سابقة</label>
                  <textarea rows={2} placeholder="اكتب نبذة عن مهاراتك..." className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"></textarea>
                </div>

                <button type="submit" className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-700 text-white font-semibold rounded-lg text-sm transition-colors flex items-center gap-2">
                  <Send size={16} /> تقديم طلب التطوع
                </button>
              </form>
            )}
          </div>

          {/* التنبيه القانوني والشفافية */}
          <div className="p-4 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl text-xs space-y-1">
            <div className="flex items-center gap-2 font-bold">
              <Info size={16} className="text-amber-700" /> تنبيه الشفافية والخصوصية
            </div>
            <p>
              لا توجد أي وسيلة دفع مفعّلة حالياً، ولا يتم عرض أو تخزين أي بيانات مالية أو بطاقات مصرفية. جميع الخدمات التعليمية مجانية تماماً.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
