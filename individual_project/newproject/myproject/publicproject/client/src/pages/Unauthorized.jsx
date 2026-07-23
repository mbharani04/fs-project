import { useNavigate } from "react-router-dom";
import { ShieldX, ArrowLeft } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Unauthorized = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleBack = () => {
    if (user?.role === "admin") {
      navigate("/admin/dashboard");
    } else if (user?.role === "user") {
      navigate("/user/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50/30 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-red-100 mb-6 mx-auto">
          <ShieldX className="h-10 w-10 text-red-500" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">403</h1>
        <h2 className="text-xl font-bold text-slate-700 mb-3">Access Denied</h2>
        <p className="text-slate-500 text-sm mb-8">
          You don't have permission to access this page.
          {user && (
            <> Your current role is <span className="font-semibold text-slate-700">{user.role}</span>.</>
          )}
        </p>
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-3 text-sm font-bold text-white shadow-md hover:from-slate-800 hover:to-slate-900 hover:-translate-y-0.5 transition-all duration-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to My Dashboard
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
