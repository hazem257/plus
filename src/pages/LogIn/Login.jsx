import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({ phone: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password.length < 6) {
      toast.error("⚠️ كلمة السر يجب أن تكون على الأقل 6 حروف!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ حفظ الـ JWT باسم access_token
        localStorage.setItem("access_token", data.access_token);

        // ✅ حفظ بيانات المستخدم
        localStorage.setItem("user", JSON.stringify(data.student));

        toast.success("✅ تم تسجيل الدخول بنجاح!");
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        toast.error("❌ خطأ: " + (data.message || "فشل تسجيل الدخول"));
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.warning("⚠️ حصل خطأ في الاتصال بالسيرفر");
    }
  };

  return (
    <div className="login-page">
      <div className="login-image">
        <img src="/logo/dragon-2.jpg" alt="Login Banner" />
      </div>

      <div className="login-form-container">
        <div className="login-box">
          <div className="login-logo">
            <a href="/">
              <img src="/logo/logo.png" alt="Logo" />
            </a>
          </div>

          <h2 className="login-title">أهلا تاني! جاهز للمذاكرة؟</h2>
          <p className="login-subtitle">
            ادخل علي حسابك بإدخال رقم الهاتف وكلمة المرور.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="ادخل رقم الهاتف"
              />
            </div>

            <div className="form-group password-field">
              <label htmlFor="password">كلمة السر</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="ادخل كلمة السر"
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "🙈"}
                </button>
              </div>
            </div>

            <button type="submit" className="btn-login">
              تسجيل الدخول
            </button>
          </form>

          <p className="signup-link">
            لا يوجد لديك حساب؟ <a href="/register">انشئ حسابك الآن!</a>
          </p>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default Login;
