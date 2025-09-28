/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useEffect } from "react";
import "./Courses.css";
import Lottie from "lottie-react";

const courses = {
  ابتدائي: [
    {
      title: "الرياضيات للصف الرابع الابتدائي",
      price: "200 جنيه",
      description: "شرح شامل لمناهج الرياضيات للصف الرابع الابتدائي مع تمارين وحلول.",
      img: "/grades/y4.png",
      date: "الاثنين، ١ سبتمبر ٢٠٢٥",
      link: "/course/math4",
    },
    {
      title: "الرياضيات للصف الخامس الابتدائي",
      price: "200 جنيه",
      description: "شرح شامل لمناهج الرياضيات للصف الخامس الابتدائي مع تمارين وحلول.",
      img: "/grades/y5.jpg",
      date: "الاثنين، ١ سبتمبر ٢٠٢٥",
      link: "/course/math5",
    },
    {
      title: "الرياضيات للصف السادس الابتدائي",
      price: "200 جنيه",
      description: "شرح شامل لمناهج الرياضيات للصف السادس الابتدائي مع تمارين وحلول.",
      img: "/grades/y6.jpg",
      date: "الاثنين، ١ سبتمبر ٢٠٢٥",
      link: "/course/math6",
    },
  ],
  اعدادي: [
    {
      title: "الرياضيات للصف الأول الاعدادي",
      price: "200 جنيه",
      description: "شرح شامل لمناهج الرياضيات للصف الأول الاعدادي مع تمارين وحلول.",
      img: "/grades/y1.png",
      date: "الاثنين، ١ سبتمبر ٢٠٢٥",
      link: "/course/math-prep1",
    },
    {
      title: "الرياضيات للصف الثاني الاعدادي",
      price: "200 جنيه",
      description: "شرح شامل لمناهج الرياضيات للصف الثاني الاعدادي مع تمارين وحلول.",
      img: "/grades/y2.jpg",
      date: "الاثنين، ١ سبتمبر ٢٠٢٥",
      link: "/course/math-prep2",
    },
    {
      title: "الرياضيات للصف الثالث الاعدادي",
      price: "200 جنيه",
      description: "شرح شامل لمناهج الرياضيات للصف الثالث الاعدادي مع تمارين وحلول.",
      img: "/grades/y3.jpg",
      date: "الاثنين، ١ سبتمبر ٢٠٢٥",
      link: "/course/math-prep3",
    },
  ],
  ثانوي: [
    {
      title: "الرياضيات للصف الأول الثانوي",
      price: "200 جنيه",
      description: "شرح شامل لمناهج الرياضيات للصف الأول الثانوي مع تمارين وحلول.",
      img: "/grades/y-1.png",
      date: "الاثنين، ١ سبتمبر ٢٠٢٥",
      link: "/course/math-sec1",
    },
    {
      title: "الرياضيات للصف الثاني الثانوي",
      price: "250 جنيه",
      description: "مراجعة كاملة لجميع دروس الرياضيات للصف الثاني الثانوي مع أمثلة محلولة.",
      img: "/grades/y-2.jpg",
      date: "الأحد، ٣ أغسطس ٢٠٢٥",
      link: "/course/math-sec2",
    },
    {
      title: "الرياضيات للصف الثالث الثانوي",
      price: "300 جنيه",
      description: "تحضير شامل لامتحانات الرياضيات للصف الثالث الثانوي مع حلول تفصيلية.",
      img: "/grades/y-3.jpg",
      date: "الأحد، ٣ أغسطس ٢٠٢٥",
      link: "/course/math-sec3",
    },
  ],
};


export default function Courses() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // التحقق من حالة تسجيل الدخول عند تحميل الصفحة
  // eslint-disable-next-line no-undef
  useEffect(() => {
    const token = localStorage.getItem("token"); // استخدم نفس المفتاح اللي حطيته عند تسجيل الدخول
    if (token) setIsLoggedIn(true);
  }, []);

  const handleSubscribe = (courseLink) => {
    if (isLoggedIn) {
      window.location.href = courseLink;
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <div className="courses-container">
      <div className="courses-header">
        <h2>كورسات الرياضيات 2025/2026</h2>
        <a className="all-courses-btn" href="/register">الكل</a>
      </div>

      {Object.keys(courses).map((stage, idx) => (
        <div key={idx} className="stage-section">
          <h3 className="stage-title">مرحلة {stage}</h3>
          <div className="courses-wrapper">
            {courses[stage].map((course, index) => (
              <div className="course-card" key={index}>
                <div className="course-image">
                  <img src={course.img} alt={course.title} />
                </div>
                <div className="course-info">
                  <h3>{course.title}</h3>
                  <p className="course-price">{course.price}</p>
                  <p className="course-desc">{course.description}</p>
                  <p className="course-date">{course.date}</p>
                  <div className="course-buttons">
                    <button onClick={() => handleSubscribe(course.link)}>الدخول للكورس</button>
                    <button onClick={() => handleSubscribe(course.link)}>الإشتراك في الكورس !</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="cta-section">
        <div className="cta-content">
          <h2>🚀 ابدأ رحلتك في تعلم الرياضيات</h2>
          <p>سجّل الآن وجرب <span>المحاضرات المجانية</span> قبل ما تشترك في أي كورس!</p>
          <a href="/register" className="cta-btn">👨‍🎓 دخول المحاضرات المجانية</a>
        </div>

        <div className="cta-image">
          <Lottie
            path="/animation/frame.json"
            loop={true}
            autoplay={true}
            style={{ width: 350, height: 350 }}
          />
        </div>
      </div>
    </div>
  );
}
