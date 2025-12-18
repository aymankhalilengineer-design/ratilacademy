import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import { Student } from './Student';
import { Teacher } from './Teacher';

dotenv.config();

const dbURI = process.env.MONGODB_URI || "";

// دالة الاتصال بقاعدة البيانات
export const startApp = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log("✅ تم الاتصال بنجاح بـ MongoDB: عالم راتيل جاهز!");
    } catch (err) {
        console.error("❌ فشل الاتصال:", err);
    }
};

// دالة تسجيل الدخول بالإيميل (هذه هي الدالة المطلوبة)
export const loginStudent = async (email: string) => {
    try {
        // البحث عن الطالب أو إنشاؤه إذا لم يكن موجوداً
        let student = await Student.findOneAndUpdate(
            { email: email.toLowerCase() },
            { $setOnInsert: { name: "طالب جديد", grade: "4" } },
            { upsert: true, new: true }
        );
        
        console.log(`✨ مرحباً بك! تم الدخول بنجاح لحساب: ${email}`);
        return student;
    } catch (err) {
        console.error("❌ خطأ في تسجيل الدخول:", err);
    }
};

// لتجربة الكود الآن
startApp().then(() => {
    loginStudent("ratil@test.com"); // جرب وضع إيميل هنا للtest
});