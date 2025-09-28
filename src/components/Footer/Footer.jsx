import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      {/* الجزء الأول */}
      <div className="footer-section">
        <div className="logo">
          <img src="/logo/logo.png" alt="Workflow" />
        </div>
        
      </div>

      {/* الجزء الثاني */}
      <div className="footer-grid">
        {/* الصفحات */}
        <div className="footer-col">
          <h4>الصفحات</h4>
          <ul>
            <li><a href="#">الرئيسية</a></li>
            <li><a href="#">المساعدة</a></li>
            <li><a href="#">انشاء حساب جديد</a></li>
            <li><a href="#">تسجيل الدخول</a></li>
          </ul>
        </div>

        {/* السوشيال ميديا */}
        <div className="footer-col">
          <h4>السوشيال ميديا</h4>
          <ul>
            <li><a href="#">فيسبوك</a></li>
            <li><a href="#">انستجرام</a></li>
            <li><a href="#">تيك توك</a></li>
            <li><a href="#">يوتيوب</a></li>
            <li><a href="#">الجروب الرسمي</a></li>
          </ul>
        </div>

        {/* تواصل معنا */}
        <div className="footer-col">
          <h4>تواصل معنا</h4>
          <a href="#" className="phone-btn">
            <span>📞</span>
            <span>01025547663</span>
          </a>
          <ul>
            <li><a href="#">تليجرام الدعم الفني</a></li>
            <li><a href="#">تليجرام الكتب</a></li>
          </ul>
        </div>
      </div>

      {/* صاحب الموقع */}
      <div className="supervisor">
        <h2>بإشراف مستر مهدي حسن</h2>
      </div>

      {/* مصمم المنصة */}
      <div className="designer">
        <div className="right-container">
          <div className="rights">جميع الحقوق محفوظة © 2025</div>
          <div className="developed">
            <span>Developed by "</span>
            <a href="#">Hazem Gamal</a>
         
          </div>
        </div>
        💻 مصمم المنصة: <span>Dragon</span>
      </div>
    </div>
  );
}
