import { Schema, model } from 'mongoose';

const teacherSchema = new Schema({
    name: String,
    subject: String,
    avatar: String, // رابط صورة المدرس (الافاتار)
    grade: String   // المرحلة المخصص لها المدرس
});

export const Teacher = model('Teacher', teacherSchema);