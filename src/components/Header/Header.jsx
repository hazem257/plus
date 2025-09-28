import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [user, setUser] = useState(null);

  // تفعيل / إيقاف وضع الظلام
  useEffect(() => {
    if (darkTheme) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  }, [darkTheme]);

  // جلب بيانات المستخدم من localStorage أو من API
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      return;
    }

    const fetchUser = async () => {
      const token = localStorage.getItem("access_token");
      if (!token) return;

      try {
        const res = await fetch("http://localhost:3000/students/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data);
          localStorage.setItem("user", JSON.stringify(data));
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  return (
    <header>
      <div className="container">
        <div className="logo-div">
          <a href="/">
            <img src="/logo/logo.png" alt="logo" />
          </a>
        </div>

        <div className="auth-container">
          {/* Toggle mode */}
          <label className="switch">
            <input
              id="input"
              type="checkbox"
              checked={darkTheme}
              onChange={() => setDarkTheme(!darkTheme)}
            />
            <div className="slider round">
              <div className="sun-moon">
                <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>

                <svg id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg id="light-ray-2" className="light-ray" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg id="light-ray-3" className="light-ray" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>

                <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>

                <svg id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
                <svg id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="50"></circle>
                </svg>
              </div>

              <div className="stars">
                {[1, 2, 3, 4].map((n) => (
                  <svg key={n} id={`star-${n}`} className="star" viewBox="0 0 20 20">
                    <path d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"></path>
                  </svg>
                ))}
              </div>
            </div>
          </label>

          <div className="auth">
            {user ? (
              <div className="welcome">
                <span>Welcome, {user.first_name}</span>
                {user.photo && (
                  <img
                    src={user.photo}
                    alt={user.first_name}
                    className="user-photo"
                  />
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="btn login">
                  تسجيل دخول
                </Link>
                <Link to="/register" className="btn signup">
                  إنشاء حساب
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
