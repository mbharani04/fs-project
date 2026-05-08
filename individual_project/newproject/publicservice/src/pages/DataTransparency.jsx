import React from 'react';
import GenericPage from '../components/GenericPage';
import { transparencyData } from '../data/transparencyData';
import { PieChart, TrendingUp, Activity, FileText } from 'lucide-react';

const DataTransparency = () => {
  return (
    <GenericPage 
      title="Data & Transparency" 
      description="View live statistics, budget allocations, and project progress to ensure accountability in public spending."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {transparencyData.stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
            <p className="text-sm font-medium text-gray-500 mb-2">{stat.label}</p>
            <h4 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h4>
            <span className="inline-flex items-center text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded w-fit">
              <TrendingUp className="w-3 h-3 mr-1" /> {stat.trend}
            </span>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary-500" /> Major Projects Status
          </h3>
          <div className="space-y-6">
            {transparencyData.projects.map(project => (
              <div key={project.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">{project.name}</h4>
                    <p className="text-xs text-gray-500">{project.department} • Budget: {project.budget}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    project.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between text-xs font-medium text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{project.completionPercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${project.status === 'Completed' ? 'bg-green-500' : 'bg-primary-500'}`} 
                      style={{ width: `${project.completionPercentage}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-right">Expected Completion: {project.expectedCompletion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-primary-500" /> Budget Overview
          </h3>
          <div className="aspect-square rounded-full border-[16px] border-primary-100 flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 rounded-full border-[16px] border-primary-500" style={{ clipPath: 'polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 0 100%, 0 70%)' }}></div>
            <div className="text-center z-10 bg-white w-full h-full rounded-full flex flex-col items-center justify-center p-4">
              <span className="text-sm text-gray-500">Total Budget</span>
              <span className="text-xl font-bold text-gray-900">{transparencyData.budget.total}</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                <span className="text-sm text-gray-600">Spent Allocation</span>
              </div>
              <span className="text-sm font-bold text-gray-900">{transparencyData.budget.spent}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary-100"></div>
                <span className="text-sm text-gray-600">Remaining</span>
              </div>
              <span className="text-sm font-bold text-gray-900">{transparencyData.budget.remaining}</span>
            </div>
          </div>
          
          <button className="w-full mt-8 btn-secondary flex items-center justify-center gap-2">
            <FileText className="w-4 h-4" /> Download Full Report
          </button>
        </div>
      </div>
    </GenericPage>
  );
};

export default DataTransparency;
