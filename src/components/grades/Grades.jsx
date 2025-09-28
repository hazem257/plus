import React from "react";
import "./Grades.css"; // لو تحب تفصل CSS

const years = [
  { id: 0 , title:"الصف الرابع الابتدائي", link:"/year/4-v", desc:"جميع كورسات الصف الرابع الابتدائي← "},
  { id: 1 , title:"الصف الخامس الابتدائي", link:"/year/5-v", desc:"جميع كورسات الصف الخامس  الابتدائي←"},
  { id: 2 , title:"الصف السادس الابتدائي", link:"/year/6-v", desc:"جميع كورسات الصف السادس الابتدائي← "},
  { id: 3, title: "الصف الأول الاعدادي", link: "/years/0", desc: "← جميع كورسات الصف الأول الإعدادي" },
  { id: 4, title: " الصف الثاني الأعدادي", link: "/years/1", desc: "← جميع كورسات الصف الثاني الإعدادي" },
  { id: 5, title: " الصف الثالث الاعدادي", link: "/years/2", desc: "← جميع كورسات الصف الثالث الإعدادي" },
  { id: 6, title: "الصف الأول الثانوي", link: "/years/3", desc: "← جميع كورسات الصف الأول الثانوي" },
  { id: 7, title: "الصف الثاني الثانوي", link: "/years/4", desc: "← جميع كورسات الصف الثاني الثانوي" },
  { id: 8, title: "الصف الثالث الثانوي", link: "/years/5", desc: "← جميع كورسات الصف الثالث الثانوي" },
];

const Grades = () => {
  return (
    <section className="years-section" dir="rtl">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            اختار المرحلة الدراسية وادخل على <br />
            الكورسات المتاحة لدفعة 2026
          </h2>
        </div>
        <div className="years-grid">
          {years.map((year) => (
            <a key={year.id} href={year.link} className="year-card">
              <div className="year-title">{year.title}</div>
              <div className="year-desc">{year.desc}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grades;
