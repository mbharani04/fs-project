import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import ComplaintCard from '../components/ComplaintCard';
import { auth } from '../utils/auth';
import { complaintUtils } from '../utils/complaintUtils';
import { FileText, Clock, CheckCircle, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const user = auth.getCurrentUser();
  const [stats, setStats] = useState({ total: 0, pending: 0, inProgress: 0, resolved: 0 });
  const [recentComplaints, setRecentComplaints] = useState([]);

  useEffect(() => {
    if (user) {
      const userStats = complaintUtils.getStats(user.id);
      setStats(userStats);
      
      const allComplaints = complaintUtils.getUserComplaints(user.id);
      setRecentComplaints(allComplaints.slice(0, 5));
    }
  }, [user]);

  const StatCard = ({ title, value, icon: Icon, color, bg }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center gap-4">
      <div className={`p-4 rounded-lg ${bg} ${color}`}>
        <Icon className="w-8 h-8" />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
        <h4 className="text-3xl font-bold text-gray-900">{value}</h4>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-[calc(100vh-4rem)] bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Welcome, {user?.name}!</h1>
            <p className="text-gray-600 mt-2">Here is a summary of your interactions with the portal.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard title="Total Complaints" value={stats.total} icon={BarChart3} color="text-blue-600" bg="bg-blue-100" />
            <StatCard title="Pending" value={stats.pending} icon={FileText} color="text-yellow-600" bg="bg-yellow-100" />
            <StatCard title="In Progress" value={stats.inProgress} icon={Clock} color="text-purple-600" bg="bg-purple-100" />
            <StatCard title="Resolved" value={stats.resolved} icon={CheckCircle} color="text-green-600" bg="bg-green-100" />
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">Recent Complaints</h2>
              <Link to="/reports" className="text-sm font-medium text-primary-600 hover:text-primary-700">
                View All
              </Link>
            </div>
            
            <div className="p-6">
              {recentComplaints.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recentComplaints.map(complaint => (
                    <ComplaintCard key={complaint.id} complaint={complaint} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No complaints yet</h3>
                  <p className="text-gray-500 mb-6">You haven't submitted any complaints or requests.</p>
                  <Link to="/reports" className="btn-primary">
                    Register a Complaint
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
