import { Schema, model } from 'mongoose';

const studentSchema = new Schema({
    email: { type: String, required: true, unique: true }, // وسيلة الدخول الوحيدة
    name: { type: String, default: "طالب جديد" },
    grade: { type: String, default: "4" }, // المرحلة الدراسية
    teachers: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }] // المدرسين الذين اختارهم
});

export const Student = model('Student', studentSchema);