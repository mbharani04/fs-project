import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", number: "", email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      // NOTE: role is NOT sent — backend always sets role: "user"
      const response = await API.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        number: formData.number,
      });

      setSuccess(response.data.message || "Account created! Redirecting to login…");

      // Redirect to login after a short delay so user can read success message
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      const msg = err.response?.data?.message || "Registration failed. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50/30 flex items-center justify-center px-3 py-5">
      <div className="w-full max-w-3xl">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/60">

          {/* Form panel — centered */}
          <div className="p-10 md:p-12 flex flex-col justify-center">
            <div className="mb-9 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 mb-2">Get started</p>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Create your account</h1>
              <p className="mt-2 text-slate-500 text-sm">
                Already have an account?{' '}
                <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-700">Sign in →</Link>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Error / Success messages */}
              {error && (
                <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600 font-medium">
                  {error}
                </div>
              )}
              {success && (
                <div className="rounded-xl bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-700 font-medium">
                  {success}
                </div>
              )}

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">Full name</label>
                <input
                  id="name" type="text" name="name"
                  placeholder="Your full name"
                  value={formData.name} onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 transition-all focus:border-violet-400 focus:bg-white focus:ring-3 focus:ring-violet-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="number" className="block text-sm font-semibold text-slate-700 mb-1.5">Phone number</label>
                <PhoneInput
                  defaultCountry="IN" international
                  placeholder="Enter your number"
                  value={formData.number}
                  onChange={(value) => setFormData({ ...formData, number: value })}
                  className="phone-input-field flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm transition-all focus-within:border-violet-400 focus-within:bg-white focus-within:ring-3 focus-within:ring-violet-100"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email address</label>
                <input
                  id="email" type="email" name="email"
                  placeholder="you@example.com"
                  value={formData.email} onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 transition-all focus:border-violet-400 focus:bg-white focus:ring-3 focus:ring-violet-100"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-1.5">Password</label>
                <div className="relative">
                  <input
                    id="password" type={showPass ? 'text' : 'password'} name="password"
                    placeholder="Create a secure password (min. 6 characters)"
                    value={formData.password} onChange={handleChange}
                    required
                    minLength={6}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-sm text-slate-900 outline-none placeholder:text-slate-400 transition-all focus:border-violet-400 focus:bg-white focus:ring-3 focus:ring-violet-100"
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors">
                    {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-1 w-full rounded-xl bg-gradient-to-r from-violet-600 to-blue-700 py-3.5 text-sm font-bold text-white shadow-md shadow-violet-500/20 hover:shadow-lg hover:shadow-violet-500/25 hover:from-violet-700 hover:to-blue-800 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {loading ? "Creating account…" : <>Create account <ArrowRight className="h-4 w-4" /></>}
              </button>

              <p className="text-center text-xs text-slate-400">
                By creating an account you agree to our{' '}
                <a href="#" className="underline hover:text-slate-600">Terms of Service</a> and{' '}
                <a href="#" className="underline hover:text-slate-600">Privacy Policy</a>.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
