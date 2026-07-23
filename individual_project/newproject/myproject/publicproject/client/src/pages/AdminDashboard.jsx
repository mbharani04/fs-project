import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import API from "../api/axios";
import {
  Users, FileText, AlertTriangle, CheckCircle,
  ShieldCheck, LogOut, TrendingUp, Settings, Key, X, Lock,
} from "lucide-react";

const statCards = [
  { label: "Total Users",         value: "1,248", icon: Users,          color: "bg-indigo-50 text-indigo-600",  change: "+12 this week" },
  { label: "Open Complaints",     value: "87",    icon: FileText,       color: "bg-amber-50 text-amber-600",   change: "+5 today"      },
  { label: "Critical Issues",     value: "4",     icon: AlertTriangle,  color: "bg-red-50 text-red-600",       change: "Requires action"},
  { label: "Resolved This Month", value: "312",   icon: CheckCircle,    color: "bg-emerald-50 text-emerald-600",change: "↑ 18% vs last month"},
];

const recentComplaints = [
  { id: 1, user: "Ravi Kumar",    type: "Road Damage",      ward: "Ward 4",  status: "Pending",      statusColor: "text-amber-600 bg-amber-50",    priority: "High"   },
  { id: 2, user: "Priya Sharma",  type: "Water Leakage",    ward: "Ward 7",  status: "In Progress",  statusColor: "text-blue-600 bg-blue-50",       priority: "Medium" },
  { id: 3, user: "Arun Mehta",    type: "Street Light",     ward: "Ward 2",  status: "Resolved",     statusColor: "text-emerald-600 bg-emerald-50", priority: "Low"    },
  { id: 4, user: "Deepa Nair",    type: "Electricity Cut",  ward: "Ward 9",  status: "Pending",      statusColor: "text-amber-600 bg-amber-50",    priority: "High"   },
  { id: 5, user: "Suresh Rao",    type: "Garbage Dump",     ward: "Ward 3",  status: "In Progress",  statusColor: "text-blue-600 bg-blue-50",       priority: "Medium" },
];

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // Password change state
  const [showModal, setShowModal] = useState(false);
  const [passData, setPassData] = useState({ currentPassword: "", newPassword: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (passData.newPassword !== passData.confirmPassword) {
      return setError("New passwords do not match.");
    }
    if (passData.newPassword.length < 6) {
      return setError("New password must be at least 6 characters.");
    }

    setLoading(true);
    try {
      const response = await API.put("/admin/change-password", {
        currentPassword: passData.currentPassword,
        newPassword: passData.newPassword,
      });

      setSuccess(response.data.message || "Password updated successfully!");
      setPassData({ currentPassword: "", newPassword: "", confirmPassword: "" });
      setTimeout(() => {
        setShowModal(false);
        setSuccess("");
      }, 2000);
    } catch (err) {
      const msg = err.response?.data?.message || "Failed to update password. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">

        {/* Welcome banner */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-8 py-7 text-white shadow-xl shadow-blue-500/15 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/10" />
          <div className="absolute -bottom-4 -right-4 h-20 w-20 rounded-full bg-white/10" />
          <div className="relative">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="h-5 w-5 text-blue-200" />
              <span className="text-xs font-bold text-blue-100 uppercase tracking-widest">Admin Control Panel</span>
            </div>
            <h2 className="text-2xl font-extrabold">Welcome back, {user?.name?.split(" ")[0]} 🛡️</h2>
            <p className="mt-1 text-blue-100 text-sm">You have administrative access to manage complaints, users, and platform settings.</p>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {statCards.map(({ label, value, icon: Icon, color, change }) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-100 hover:shadow-md hover:shadow-slate-200/70 transition-all">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${color} mb-3`}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-2xl font-extrabold text-slate-900">{value}</p>
              <p className="text-xs font-medium text-slate-600 mt-0.5">{label}</p>
              <p className="text-xs text-slate-400 mt-1">{change}</p>
            </div>
          ))}
        </div>

        {/* Quick admin actions */}
        <div>
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Admin Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Change Password",  icon: Key,          action: () => setShowModal(true), gradient: "from-blue-600 to-indigo-600" },
              { label: "Manage Users",     icon: Users,        action: () => {},                 gradient: "from-indigo-600 to-violet-600"},
              { label: "View Reports",     icon: TrendingUp,   action: () => {},                 gradient: "from-emerald-600 to-teal-600" },
              { label: "All Complaints",   icon: FileText,     action: () => {},                 gradient: "from-amber-500 to-orange-500" },
            ].map(({ label, icon: Icon, action, gradient }) => (
              <button
                key={label}
                onClick={action}
                className={`rounded-2xl bg-gradient-to-br ${gradient} p-5 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-left`}
              >
                <Icon className="h-6 w-6 mb-2 opacity-90" />
                <p className="text-sm font-bold">{label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Complaints table */}
        <div>
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Recent Complaints — System Overview</h3>
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50/80 border-b border-slate-200">
                <tr>
                  {["#", "Citizen", "Type", "Ward", "Priority", "Status"].map((h) => (
                    <th key={h} className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentComplaints.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="px-6 py-4 text-slate-400 font-mono text-xs">#{String(item.id).padStart(3, "0")}</td>
                    <td className="px-6 py-4 font-semibold text-slate-800">{item.user}</td>
                    <td className="px-6 py-4 text-slate-600">{item.type}</td>
                    <td className="px-6 py-4 text-slate-500">{item.ward}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-semibold ${item.priority === "High" ? "text-red-600" : item.priority === "Medium" ? "text-amber-600" : "text-slate-500"}`}>
                        {item.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>

      {/* ── Change Password Modal ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-7 shadow-2xl shadow-slate-200/80 relative">
            <button
              onClick={() => {
                setShowModal(false);
                setError("");
                setSuccess("");
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Change Admin Password</h3>
                <p className="text-xs text-slate-500">Update your login credentials</p>
              </div>
            </div>

            <form onSubmit={handlePasswordChange} className="space-y-4">
              {error && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-medium text-red-600">
                  {error}
                </div>
              )}
              {success && (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs font-medium text-emerald-700">
                  {success}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Current Password</label>
                <input
                  type="password"
                  required
                  value={passData.currentPassword}
                  onChange={(e) => setPassData({ ...passData, currentPassword: e.target.value })}
                  placeholder="Enter current password"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">New Password</label>
                <input
                  type="password"
                  required
                  minLength={6}
                  value={passData.newPassword}
                  onChange={(e) => setPassData({ ...passData, newPassword: e.target.value })}
                  placeholder="Min 6 characters"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Confirm New Password</label>
                <input
                  type="password"
                  required
                  value={passData.confirmPassword}
                  onChange={(e) => setPassData({ ...passData, confirmPassword: e.target.value })}
                  placeholder="Re-enter new password"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded-xl border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2 text-xs font-bold text-white shadow-md shadow-blue-500/20 hover:from-blue-700 hover:to-blue-800 disabled:opacity-60"
                >
                  {loading ? "Updating…" : "Update Password"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
