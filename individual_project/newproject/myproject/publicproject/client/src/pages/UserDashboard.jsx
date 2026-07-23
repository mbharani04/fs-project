import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  FileText, Bell, MapPin, Phone, LogOut,
  CheckCircle, Clock, AlertCircle, User,
} from "lucide-react";

const statCards = [
  { label: "Complaints Filed",  value: "3",  icon: FileText,     color: "bg-blue-50 text-blue-600" },
  { label: "Under Review",      value: "1",  icon: Clock,        color: "bg-amber-50 text-amber-600" },
  { label: "Resolved",          value: "2",  icon: CheckCircle,  color: "bg-emerald-50 text-emerald-600" },
  { label: "Notifications",     value: "5",  icon: Bell,         color: "bg-violet-50 text-violet-600" },
];

const recentActivity = [
  { id: 1, type: "Road Damage",       location: "Main St, Ward 4",   status: "Resolved",    statusColor: "text-emerald-600 bg-emerald-50" },
  { id: 2, type: "Water Leakage",     location: "Gandhi Nagar",      status: "Under Review", statusColor: "text-amber-600 bg-amber-50"   },
  { id: 3, type: "Street Light Out",  location: "Block B, Sector 7", status: "Filed",        statusColor: "text-blue-600 bg-blue-50"     },
];

const UserDashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm shadow-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">PublicService Portal</h1>
            <p className="text-xs text-slate-500 mt-0.5">Citizen Dashboard</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center">
                <User className="h-4 w-4 text-blue-600" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-slate-800">{user?.name}</p>
                <p className="text-xs text-slate-500">{user?.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all duration-200"
            >
              <LogOut className="h-3.5 w-3.5" /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-10">

        {/* Welcome banner */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-7 text-white shadow-xl shadow-blue-500/20">
          <div className="flex items-center gap-3 mb-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Citizen Account
            </span>
          </div>
          <h2 className="text-2xl font-extrabold mt-2">Welcome back, {user?.name?.split(" ")[0]} 👋</h2>
          <p className="mt-1 text-blue-100 text-sm">Track your complaints and access government services from one place.</p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {statCards.map(({ label, value, icon: Icon, color }) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-100 hover:shadow-md hover:shadow-slate-200/70 transition-shadow">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${color} mb-3`}>
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-2xl font-extrabold text-slate-900">{value}</p>
              <p className="text-xs text-slate-500 mt-0.5">{label}</p>
            </div>
          ))}
        </div>

        {/* Quick actions */}
        <div>
          <h3 className="text-base font-bold text-slate-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "File Complaint",   icon: AlertCircle, path: "/services",       gradient: "from-blue-500 to-blue-600"    },
              { label: "Track Status",     icon: Clock,       path: "/services",       gradient: "from-amber-500 to-orange-500" },
              { label: "Nearby Services",  icon: MapPin,      path: "/services",       gradient: "from-emerald-500 to-teal-500" },
              { label: "Contact Support",  icon: Phone,       path: "/contact",        gradient: "from-violet-500 to-purple-600"},
            ].map(({ label, icon: Icon, gradient }) => (
              <button
                key={label}
                className={`rounded-2xl bg-gradient-to-br ${gradient} p-5 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-left`}
              >
                <Icon className="h-6 w-6 mb-2 opacity-90" />
                <p className="text-sm font-bold">{label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="text-base font-bold text-slate-800 mb-4">Recent Complaints</h3>
          <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">#</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Location</th>
                  <th className="text-left px-6 py-3.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {recentActivity.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="px-6 py-4 text-slate-400 font-mono text-xs">#{String(item.id).padStart(3, "0")}</td>
                    <td className="px-6 py-4 font-medium text-slate-800">{item.type}</td>
                    <td className="px-6 py-4 text-slate-500">{item.location}</td>
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
    </div>
  );
};

export default UserDashboard;
