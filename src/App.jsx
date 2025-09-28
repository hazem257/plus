import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Grades from "./components/grades/Grades";
import Courses from "./components/Courses/Courses";
import FeaturesSection from "./components/advanced/FeaturesSection";
import Cellefect from "./components/effect/BioScene";
import Footer from "./components/Footer/Footer";
import Course from "./pages/coursePage/Course"
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/LogIn/Login";

// ✅ مكون لحماية الصفحات
function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  if (!token) {
    // لو مفيش تسجيل دخول ➝ يروح للـ login
    return <Navigate to="/login" replace />;
  }
  return children;
}

function App() {
  return (
    <Router>
      <Cellefect />
      <Header />

      <Routes>
        {/* الصفحة الرئيسية محمية */}
        <Route
          path="/"
          element={
           
              <>
                <Hero />
                <FeaturesSection />
                <Grades />
                <Courses />
                <Footer />
              </>
         
          }
        />

        {/* Register Page */}
        <Route path="/register" element={<SignUp />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* مثال: صفحة Dashboard محمية */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <h1 style={{ textAlign: "center" }}>🎉 Welcome to Dashboard</h1>
            </ProtectedRoute>
          }
        />
        <Route path="/course/y1" element={<Course/>}/>
      </Routes>
    </Router>
  );
}

export default App;
