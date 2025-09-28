import React, { useState } from "react";
import Swal from "sweetalert2";
import "./SignUp.css";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    phone: "",
    parent_phone: "",
    national_id: "",
    email: "",
    password: "",
    confirm_password: "",
    grade: "",
    government: "",
    photo: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [id]: files[0] });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // ✅ تحقق من الحقول المطلوبة
    if (!formData.first_name) newErrors.first_name = "الاسم الأول مطلوب";
    if (!formData.middle_name) newErrors.middle_name = "الاسم الأوسط مطلوب";
    if (!formData.last_name) newErrors.last_name = "الاسم الأخير مطلوب";
    if (!formData.phone) newErrors.phone = "رقم الهاتف مطلوب";
    if (!formData.password) newErrors.password = "كلمة المرور مطلوبة";
    if (!formData.confirm_password)
      newErrors.confirm_password = "تأكيد كلمة المرور مطلوب";
    if (!formData.grade) newErrors.grade = "الصف مطلوب";
    if (!formData.government) newErrors.government = "المحافظة مطلوبة";

    // ✅ تحقق من تطابق كلمة المرور
    if (
      formData.password &&
      formData.confirm_password &&
      formData.password !== formData.confirm_password
    ) {
      newErrors.confirm_password = "كلمة المرور وتأكيدها غير متطابقين";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      Swal.fire({
        icon: "warning",
        title: "⚠️ تحقق من البيانات",
        text: "الرجاء مراجعة الحقول المطلوبة",
        confirmButtonText: "تمام",
      });
      return;
    }

    setErrors({});

    const data = new FormData();
    for (let key in formData) {
      if (formData[key]) data.append(key, formData[key]);
    }

    try {
      const res = await fetch("http://localhost:3000/students", {
        method: "POST",
        body: data,
      });

      if (!res.ok) throw new Error("حدث خطأ أثناء التسجيل");

      const result = await res.json();
      console.log("تم التسجيل:", result);

      Swal.fire({
        icon: "success",
        title: "✅ تم التسجيل بنجاح",
        text: "مرحبا بك! تم إنشاء حسابك بنجاح.",
        confirmButtonText: "الذهاب لتسجيل الدخول",
      }).then(() => {
        window.location.href = "/login"; // تحويل لصفحة تسجيل الدخول
      });

      // Reset form
      setFormData({
        first_name: "",
        middle_name: "",
        last_name: "",
        phone: "",
        parent_phone: "",
        national_id: "",
        email: "",
        password: "",
        confirm_password: "",
        grade: "",
        government: "",
        photo: null,
      });
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "❌ خطأ",
        text: "حدث خطأ، حاول مرة أخرى",
        confirmButtonText: "موافق",
      });
    }
  };

  return (
    <div className="register-page">
      <div className="register-image">
        <div
          className="image-bg"
          style={{ backgroundImage: "url('/logo/dragon.jpg')" }}
        >
          <div className="image-text" style={{ direction: "rtl" }}>
            <h2>أهلاً بك 👋</h2>
            <p>انضم إلينا الآن للحصول على أفضل تجربة تعليمية</p>
          </div>
        </div>
      </div>

      <div className="register-form">
        <div className="form-box">
          <div className="logo">
            <a href="/">
              <img src="/logo/logo.png" alt="Workflow" />
            </a>
          </div>

          <h2 className="title">إنشاء حساب جديد</h2>
          <p className="subtitle">
            أدخل بياناتك بشكل صحيح للحصول على أفضل تجربة داخل الموقع
          </p>

          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-grid">
              {/* الاسم الأول */}
              <div className="form-group">
                <input
                  type="text"
                  id="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  placeholder="ادخل الاسم الأول"
                />
                <label htmlFor="first_name">الاسم الأول</label>
                {errors.first_name && (
                  <span className="error">{errors.first_name}</span>
                )}
              </div>

              {/* الاسم الأوسط */}
              <div className="form-group">
                <input
                  type="text"
                  id="middle_name"
                  value={formData.middle_name}
                  onChange={handleChange}
                  placeholder="ادخل الاسم الأوسط"
                />
                <label htmlFor="middle_name">الاسم الأوسط</label>
                {errors.middle_name && (
                  <span className="error">{errors.middle_name}</span>
                )}
              </div>

              {/* الاسم الأخير */}
              <div className="form-group full">
                <input
                  type="text"
                  id="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  placeholder="ادخل الاسم الأخير"
                />
                <label htmlFor="last_name">الاسم الأخير</label>
                {errors.last_name && (
                  <span className="error">{errors.last_name}</span>
                )}
              </div>

              {/* رقم الهاتف */}
              <div className="form-group full">
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="ادخل رقم الهاتف"
                />
                <label htmlFor="phone">رقم الهاتف</label>
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>

              {/* الصف */}
              <div className="form-group full">
                <select id="grade" value={formData.grade} onChange={handleChange}>
                  <option value="">اختر الصف</option>
                  <option value="الصف الرابع الابتدائي">الصف الرابع الابتدائي</option>
                  <option value="الصف الخامس الابتدائي">الصف الخامس الابتدائي</option>
                  <option value="الصف السادس الابتدائي">الصف السادس الابتدائي</option>
                  <option value="الصف الاول الاعدادي">الصف الأول الاعدادي</option>
                  <option value="الصف الثاني الاعدادي">الصف الثاني الاعدادي</option>
                  <option value="الصف الثالث الاعدادي">الصف الثالث الاعدادي</option>
                  <option value="الصف الأول الثانوي">الصف الأول الثانوي</option>
                  <option value="الصف الثاني الثانوي">الصف الثاني الثانوي</option>
                  <option value="الصف الثالث الثانوي">الصف الثالث الثانوي</option>
                </select>
                <label htmlFor="grade">الصف</label>
                {errors.grade && <span className="error">{errors.grade}</span>}
              </div>

              {/* المحافظة */}
              <div className="form-group full">
                <select
                  id="government"
                  value={formData.government}
                  onChange={handleChange}
                >
                  <option value="">اختر المحافظة</option>
                  <option value="القاهرة">القاهرة</option>
                  <option value="الجيزة">الجيزة</option>
                  <option value="الإسكندرية">الإسكندرية</option>
                  <option value="الدقهلية">الدقهلية</option>
                  <option value="البحر الأحمر">البحر الأحمر</option>
                  <option value="البحيرة">البحيرة</option>
                  <option value="الفيوم">الفيوم</option>
                  <option value="الغربية">الغربية</option>
                  <option value="الإسماعيلية">الإسماعيلية</option>
                  <option value="المنوفية">المنوفية</option>
                  <option value="المنيا">المنيا</option>
                  <option value="القليوبية">القليوبية</option>
                  <option value="الوادي الجديد">الوادي الجديد</option>
                  <option value="السويس">السويس</option>
                  <option value="أسوان">أسوان</option>
                  <option value="أسيوط">أسيوط</option>
                  <option value="بني سويف">بني سويف</option>
                  <option value="بورسعيد">بورسعيد</option>
                  <option value="دمياط">دمياط</option>
                  <option value="الشرقية">الشرقية</option>
                  <option value="جنوب سيناء">جنوب سيناء</option>
                  <option value="كفر الشيخ">كفر الشيخ</option>
                  <option value="مطروح">مطروح</option>
                  <option value="الأقصر">الأقصر</option>
                  <option value="قنا">قنا</option>
                  <option value="شمال سيناء">شمال سيناء</option>
                  <option value="سوهاج">سوهاج</option>
                </select>
                <label htmlFor="government">المحافظة</label>
                {errors.government && (
                  <span className="error">{errors.government}</span>
                )}
              </div>

              {/* باقي الحقول زي ما عندك */}
              <div className="form-group full">
                <input
                  type="text"
                  id="parent_phone"
                  value={formData.parent_phone}
                  onChange={handleChange}
                  placeholder="رقم تليفون ولي الأمر"
                />
                <label htmlFor="parent_phone">رقم ولي الأمر</label>
              </div>

              <div className="form-group full">
                <input
                  type="text"
                  id="national_id"
                  value={formData.national_id}
                  onChange={handleChange}
                  placeholder="رقم البطاقة إن وجد"
                />
                <label htmlFor="national_id">رقم البطاقة</label>
              </div>

              <div className="form-group full">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ادخل البريد الإلكتروني"
                />
                <label htmlFor="email">البريد الإلكتروني</label>
              </div>

              <div className="form-group full">
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="كلمة المرور"
                />
                <label htmlFor="password">كلمة المرور</label>
                {errors.password && (
                  <span className="error">{errors.password}</span>
                )}
              </div>

              <div className="form-group full">
                <input
                  type="password"
                  id="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  placeholder="تأكيد كلمة المرور"
                />
                <label htmlFor="confirm_password">تأكيد كلمة المرور</label>
                {errors.confirm_password && (
                  <span className="error">{errors.confirm_password}</span>
                )}
              </div>

              <div className="form-group full">
                <input
                  type="file"
                  id="photo"
                  accept="image/*"
                  onChange={handleChange}
                />
                <label htmlFor="photo">رفع صورة الطالب</label>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              التالي →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
