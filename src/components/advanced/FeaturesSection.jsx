import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import "./FeaturesSection.css";

const features = [
  {
    id: 1,
    title: "شرح مفصل للمنهج",
    desc: "كل جزئية في الرياضيات من جبر وهندسة وتفاضل وتكامل بتشرح بطريقة سهلة مع أمثلة عملية.",
    animation: "/animation/math1.json", // Lottie animation
  },
  {
    id: 2,
    title: "تمارين وحلول مركزة",
    desc: "هتلاقي تمارين متنوعة على كل درس مع الحلول المفصلة لتساعدك تفهم كل فكرة كويس.",
    animation: "/animation/math2.json",
  },
  {
    id: 3,
    title: "اختبارات دورية",
    desc: "امتحانات قصيرة لكل جزء في المنهج وامتحانات شاملة علشان تتابع تقدمك باستمرار.",
    animation: "/animation/Exam.json",
  },
  {
    id: 4,
    title: "دعم فني مباشر",
    desc: "أي سؤال أو مشكلة في الرياضيات هتلاقي دعم فوري من المدرسين أو المساعدين على التليجرام.",
    animation: "/animation/team.json",
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section" dir="rtl">
      <div className="container">
        <h2 className="section-title">ليه تختار منصة Plus؟</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-number">{feature.id}</div>
              
              {/* Lottie Animation */}
              <div className="feature-animation">
                <Player
                  autoplay
                  loop
                  src={feature.animation}
                  style={{ height: "200px", width: "200px" }}
                />
              </div>
              
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
