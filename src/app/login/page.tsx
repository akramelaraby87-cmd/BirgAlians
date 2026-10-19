'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { LogIn, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert('سيتم الربط النهائي مع Supabase فور إضافة المفاتيح المجانية الخاصة بك.');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4" dir="rtl">
      <div className="max-w-md w-full bg-slate-800 rounded-2xl border border-slate-700 p-8 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center font-bold text-2xl mx-auto text-white">
            BA
          </div>
          <h1 className="text-2xl font-bold text-white">تسجيل الدخول — BirgAlians</h1>
          <p className="text-xs text-slate-400">أدخل بياناتك للوصول إلى المنصة</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">البريد الإلكتروني</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@domain.com"
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">كلمة المرور</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
          >
            <LogIn size={18} /> دخول
          </button>
        </form>

        <div className="pt-4 border-t border-slate-700 flex flex-col gap-3 text-center text-xs">
          <Link href="/" className="text-emerald-400 hover:underline flex items-center justify-center gap-1">
            <ArrowRight size={14} /> الاستمرار كضيف (Guest Mode)
          </Link>
          <Link href="/register" className="text-slate-400 hover:text-white transition-colors">
            ليس لديك حساب؟ <span className="text-emerald-400 underline">اطلب إنشاء حساب جديد</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
