-- 1. جدول الأدوار Roles
CREATE TABLE IF NOT EXISTS public.roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT UNIQUE NOT NULL
);

INSERT INTO public.roles (name) VALUES 
('Super Admin'), 
('Content Moderator'), 
('Community Moderator'), 
('Support Agent'), 
('Finance Viewer'), 
('Student') 
ON CONFLICT (name) DO NOTHING;

-- 2. جدول الملفات الشخصية Profiles
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    role_id UUID REFERENCES public.roles(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. تفعيل حماية Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 4. آلية تلقائية لتعيين البريد akramelaraby87@gmail.com كـ Super Admin عند التسجيل
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
    super_admin_role_id UUID;
    student_role_id UUID;
BEGIN
    SELECT id INTO super_admin_role_id FROM public.roles WHERE name = 'Super Admin';
    SELECT id INTO student_role_id FROM public.roles WHERE name = 'Student';

    IF NEW.email = 'akramelaraby87@gmail.com' THEN
        INSERT INTO public.profiles (id, email, full_name, role_id)
        VALUES (NEW.id, NEW.email, 'Akram Elaraby (Owner)', super_admin_role_id);
    ELSE
        INSERT INTO public.profiles (id, email, full_name, role_id)
        VALUES (NEW.id, NEW.email, COALESCE(NEW.raw_user_meta_data->>'full_name', 'Student'), student_role_id);
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger للربط عند إنشاء أي حساب
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 5. جدول طلبات إنشاء الحسابات Account Requests
CREATE TABLE IF NOT EXISTS public.account_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    university TEXT,
    reason TEXT,
    status TEXT DEFAULT 'Pending', -- Pending, Approved, Rejected
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. جدول سجلات التدقيق Audit Logs
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    actor_id UUID REFERENCES public.profiles(id),
    action TEXT NOT NULL,
    target TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
