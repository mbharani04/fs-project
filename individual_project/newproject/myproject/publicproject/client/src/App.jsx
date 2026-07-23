import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { ServicesProvider } from "./context/ServicesContext";
import { AuthProvider } from "./context/AuthContext";

// ── Scroll to top on every route change ──
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    // AuthProvider wraps everything so auth state is available app-wide
    <AuthProvider>
      <ServicesProvider>
        <ScrollToTop />
        <Navbar />
        <AppRoutes />
      </ServicesProvider>
    </AuthProvider>
  );
}

export default App;