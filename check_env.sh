#!/bin/bash

echo "=========================================="
echo "   BirgAlians - Environment Check (Arch)"
echo "=========================================="

# فحص Node.js
if ! command -v node &> /dev/null; then
    echo "[!] Node.js غير مثبت. جاري التثبيت عبر pacman..."
    sudo pacman -S --noconfirm nodejs npm
else
    echo "[✓] Node.js مثبت: $(node -v)"
fi

# فحص npm
if ! command -v npm &> /dev/null; then
    echo "[!] npm غير مثبت. جاري التثبيت..."
    sudo pacman -S --noconfirm npm
else
    echo "[✓] npm مثبت: $(npm -v)"
fi

# فحص Git
if ! command -v git &> /dev/null; then
    echo "[!] Git غير مثبت. جاري التثبيت..."
    sudo pacman -S --noconfirm git
else
    echo "[✓] Git مثبت: $(git -v)"
fi

# تهيئة مستودع Git إذا لم يكن مهيئاً
if [ ! -d ".git" ]; then
    git init -b main
    echo "[✓] تم تهيئة مستودع Git بنجاح (الفرع الرئيسي: main)."
else
    echo "[✓] مستودع Git موجود بالفعل."
fi

# إنشاء ملف .gitignore لحماية الأسرار
cat << 'GITIGNORE' > .gitignore
node_modules/
.next/
out/
build/
.env
.env.local
.env.production
*.log
.DS_Store
GITIGNORE
echo "[✓] تم إنشاء ملف .gitignore لتأمين الأسرار والملفات المؤقتة."

# إنشاء ملف README.md تعريفي
cat << 'README' > README.md
# BirgAlians 🎓

منصة طلابية تعليمية ومجتمعية مستقلة لطلاب جامعة برج العرب التكنولوجية.

## المبادئ الأساسية:
- محتوى تعليمي حر ومجاني.
- تصميم متجاوب وأنيق بدعم للغة العربية (RTL).
- أمان كامل للبيانات والصلاحيات.

README
echo "[✓] تم إنشاء ملف README.md بنجاح."

# حفظ التغييرات الأولى في Git
git add .
git commit -m "Chore: Initial environment setup and project baseline" &> /dev/null || true

echo "=========================================="
echo "   تم تجهيز وتفقد بيئة العمل بنجاح! 🚀"
echo "=========================================="
