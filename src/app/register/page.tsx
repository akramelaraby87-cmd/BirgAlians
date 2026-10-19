'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { UserPlus, ArrowRight, CheckCircle } from 'lucide-react';

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4" dir="rtl">
      <div className="max-w-md w-full bg-slate-800 rounded-2xl border border-slate-700 p-8 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center font-bold text-2xl mx-auto text-white">
            BA
          </div>
          <h1 className="text-2xl font-bold text-white">طلب إنشاء حساب — BirgAlians</h1>
          <p className="text-xs text-slate-400">قدّم طلبك وسيتم مراجعته من قِبل إدارة المنصة</p>
        </div>

        {submitted ? (
          <div className="p-4 bg-emerald-950 border border-emerald-700 text-emerald-200 rounded-xl text-center space-y-3">
            <CheckCircle className="mx-auto text-emerald-400" size={40} />
            <h3 className="font-bold text-lg">تم إرسال طلبك بنجاح!</h3>
            <p className="text-xs text-slate-300">
              طلبك الآن بحالة <span className="text-emerald-400 font-semibold">Pending</span>. سيتم مراجعته وموافاة بريدك الإلكتروني برابط الدعوة فور الموافقة عليه.
            </p>
            <Link href="/" className="inline-block pt-2 text-xs text-emerald-400 underline">
              العودة للرئيسية كضيف
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">الاسم بالكامل</label>
              <input 
                type="text" 
                placeholder="أحمد محمد"
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">البريد الإلكتروني</label>
              <input 
                type="email" 
                placeholder="example@domain.com"
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">الجامعة / البرنامج الدراسي</label>
              <input 
                type="text" 
                placeholder="جامعة برج العرب التكنولوجية - ICT"
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">سبب الانضمام (اختياري)</label>
              <textarea 
                placeholder="الوصول للكتب والمواد الدراسية..."
                rows={2}
                className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
            >
              <UserPlus size={18} /> إرسال طلب الحساب
            </button>
          </form>
        )}

        <div className="pt-4 border-t border-slate-700 text-center text-xs">
          <Link href="/login" className="text-emerald-400 hover:underline flex items-center justify-center gap-1">
            <ArrowRight size={14} /> العودة لصفحة تسجيل الدخول
          </Link>
        </div>
      </div>
    </div>
  );
}
