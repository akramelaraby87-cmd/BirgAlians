import './globals.css';
import React from 'react';

export const metadata = {
  title: 'BirgAlians — منصة طلابية تعليمية ومجتمعية',
  description: 'منصة مستقلة لطلاب جامعة برج العرب التكنولوجية',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}
