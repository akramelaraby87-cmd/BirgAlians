'use client';
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import { ShieldCheck, UserCheck, UserX, Clock, Check, X } from 'lucide-react';

export default function AdminDashboard() {
  const [requests, setRequests] = useState([
    { id: 1, name: 'محمد علي', email: 'mohamed@example.com', uni: 'جامعة برج العرب', status: 'Pending', date: '2026-10-19' },
    { id: 2, name: 'زياد محمود', email: 'ziad@example.com', uni: 'جامعة برج العرب', status: 'Pending', date: '2026-10-18' },
  ]);

  const handleApprove = (id: number) => {
    setRequests(requests.map(r => r.id === id ? { ...r, status: 'Approved' } : r));
  };

  const handleReject = (id: number) => {
    setRequests(requests.map(r => r.id === id ? { ...r, status: 'Rejected' } : r));
  };

  return (
    <div className="min-h-screen flex bg-slate-50">
      <Sidebar />

      <div className="flex-1 lg:mr-64 flex flex-col min-w-0">
        <Navbar />

        <main className="p-6 space-y-6 max-w-7xl w-full mx-auto">
          <div className="bg-emerald-950 text-white p-6 rounded-2xl flex items-center justify-between shadow-sm">
            <div>
              <span className="bg-emerald-800 text-emerald-200 text-xs px-3 py-1 rounded-full font-medium">
                Super Admin Privileges
              </span>
              <h1 className="text-2xl font-bold mt-2 flex items-center gap-2">
                <ShieldCheck className="text-emerald-400" /> لوحة الإدارة — Account Requests
              </h1>
              <p className="text-xs text-slate-300 mt-1">مرحباً أكرم (akramelaraby87@gmail.com). إدارة الطلبات والصلاحيات بحسّ وأمان كامل.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
            <h3 className="font-bold text-slate-800 border-b pb-3">طلبات إنشاء الحسابات المعلقة (Pending Requests)</h3>

            <div className="overflow-x-auto">
              <table className="w-full text-right text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b text-slate-500 text-xs">
                    <th className="p-3">الاسم</th>
                    <th className="p-3">البريد الإلكتروني</th>
                    <th className="p-3">الجامعة</th>
                    <th className="p-3">الحالة</th>
                    <th className="p-3">الإجراء</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {requests.map((req) => (
                    <tr key={req.id} className="hover:bg-slate-50">
                      <td className="p-3 font-semibold text-slate-800">{req.name}</td>
                      <td className="p-3 text-slate-600">{req.email}</td>
                      <td className="p-3 text-slate-500">{req.uni}</td>
                      <td className="p-3">
                        <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                          req.status === 'Pending' ? 'bg-amber-100 text-amber-800' :
                          req.status === 'Approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                        }`}>
                          {req.status}
                        </span>
                      </td>
                      <td className="p-3">
                        {req.status === 'Pending' ? (
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => handleApprove(req.id)}
                              className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs flex items-center gap-1"
                            >
                              <Check size={14} /> قبول
                            </button>
                            <button 
                              onClick={() => handleReject(req.id)}
                              className="px-2.5 py-1 bg-rose-600 hover:bg-rose-500 text-white rounded text-xs flex items-center gap-1"
                            >
                              <X size={14} /> رفض
                            </button>
                          </div>
                        ) : (
                          <span className="text-xs text-slate-400">تم المعالجة</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
