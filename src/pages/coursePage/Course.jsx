import React, { useState } from "react";
import "./Course.css";

export default function CoursePage() {
  const [openLesson, setOpenLesson] = useState(null);

  const toggleLesson = (id) => {
    setOpenLesson(openLesson === id ? null : id);
  };

  return (
    <div className="course-container">
      {/* هيدر */}
      <div className="course-header">
        <button className="back-btn">
          ⬅ العودة
        </button>
        <div className="header-text">
          <h1>اختبارات على أساسيات الكيمياء</h1>
          <p>الاختبار الأول والثاني علي أساسيات الكيمياء</p>
        </div>
      </div>

      <div className="course-content">
        {/* الجزء الأيمن (صورة + حالة الكورس) */}
        <div className="course-side">
          <img
            src="https://api.khaled-sakr.com/courses_images/course_15.webp"
            alt="course"
            className="course-image"
          />
          <button className="free-btn">هذا الكورس مجاني !</button>
        </div>

        {/* الجزء الأيسر (معلومات + دروس) */}
        <div className="course-main">
          {/* عن الكورس */}
          <section className="about-course">
            <h2>عن الكورس</h2>
            <p>الاختبار الأول والثاني علي أساسيات الكيمياء</p>
          </section>

          {/* الدروس */}
          <section className="lessons">
            <h2>الدروس</h2>

            <div className="lesson-item">
              <button
                className="lesson-header"
                onClick={() => toggleLesson(1)}
              >
                <span>📘 الاختبارات</span>
                <span>{openLesson === 1 ? "▲" : "▼"}</span>
              </button>

              {openLesson === 1 && (
                <div className="lesson-body">
                  <div className="lesson-card">
                    <p>الاختبار الأول</p>
                    <a href="/login" className="exam-btn">امتحن</a>
                  </div>
                  <div className="lesson-card">
                    <p>اختبار 2 على أساسيات الكيمياء</p>
                    <a href="/login" className="exam-btn">امتحن</a>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
