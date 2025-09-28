import "./HeroSection.css";
import { Player } from "@lottiefiles/react-lottie-player";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="content">
          <h1>
            اتعلم <span>الرياضيات</span> بطريقة سهلة
            <br /> من <span>الأرقام</span> لحل المشاكل الحقيقية
          </h1>
          <p>
            <strong>غوص جوه عالم الرياضيات!</strong>
            <br />
            هتتعلم <span>الجبر، الهندسة، والتفاضل والتكامل</span>  وكل ماهو لذيد ف عالم الرياضيات 
       
          </p>
          <a href="/courses" className="hero-btn">
          احجز مقعدك الأن
          </a>
        </div>

        {/* 🟢 لوتي أنيميشن بدل الصورة */}
        <div className="hero-animation">
          <Player
            autoplay
            loop
            src="/animation/Calculator.json"
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
