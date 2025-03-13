import React, { useState } from 'react';
import { BarChart3, PieChart, LineChart, Calendar, Download, Filter, ChevronDown } from 'lucide-react';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('Last 30 Days');
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
        
        <div className="flex space-x-2">
          <div className="relative">
            <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span>{timeRange}</span>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
            {/* Dropdown would go here */}
          </div>
          
          <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700">
            <Download className="h-4 w-4 text-gray-500" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            title: 'Average Completion Rate', 
            value: '87%', 
            change: '+5%', 
            trend: 'up',
            icon: <BarChart3 className="h-6 w-6 text-indigo-600" />,
            color: 'bg-indigo-100'
          },
          { 
            title: 'Average Time Spent', 
            value: '2.4 hrs', 
            change: '-10 min', 
            trend: 'down',
            icon: <LineChart className="h-6 w-6 text-green-600" />,
            color: 'bg-green-100'
          },
          { 
            title: 'Student Engagement', 
            value: '92%', 
            change: '+3%', 
            trend: 'up',
            icon: <PieChart className="h-6 w-6 text-blue-600" />,
            color: 'bg-blue-100'
          },
          { 
            title: 'Avg. Attempts per Caselet', 
            value: '1.8', 
            change: '-0.2', 
            trend: 'down',
            icon: <BarChart3 className="h-6 w-6 text-amber-600" />,
            color: 'bg-amber-100'
          }
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
              </div>
              <div className={`h-12 w-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                {stat.icon}
              </div>
            </div>
            <div className="flex items-center mt-4">
              <span className={`text-xs font-medium flex items-center ${
                stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
              }`}>
                {stat.change}
              </span>
              <span className="text-xs text-gray-500 ml-2">from previous period</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Completion Rates by Caselet */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-800">Completion Rates by Caselet</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">View Details</button>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'Neural Networks: Image Recognition', rate: 78 },
              { name: 'Database Optimization Challenge', rate: 65 },
              { name: 'Algorithmic Trading Simulation', rate: 82 },
              { name: 'Cybersecurity Threat Analysis', rate: 91 },
              { name: 'Cloud Architecture Design', rate: 58 },
              { name: 'Mobile App Performance Optimization', rate: 75 }
            ].map((caselet, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-700 truncate" style={{ maxWidth: '70%' }}>{caselet.name}</p>
                  <p className="text-sm font-medium text-gray-700">{caselet.rate}%</p>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      caselet.rate >= 80 ? 'bg-green-500' : 
                      caselet.rate >= 70 ? 'bg-blue-500' : 
                      caselet.rate >= 60 ? 'bg-amber-500' : 
                      'bg-red-500'
                    }`} 
                    style={{ width: `${caselet.rate}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Performance Distribution */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-800">Student Performance Distribution</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">View Details</button>
          </div>
          
          <div className="space-y-4">
            {[
              { range: '90-100%', count: 32, percentage: 25 },
              { range: '80-89%', count: 45, percentage: 35 },
              { range: '70-79%', count: 28, percentage: 22 },
              { range: '60-69%', count: 15, percentage: 12 },
              { range: 'Below 60%', count: 8, percentage: 6 }
            ].map((range, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-700">{range.range}</p>
                  <div className="flex items-center space-x-2">
                    <p className="text-sm text-gray-500">{range.count} students</p>
                    <p className="text-sm font-medium text-gray-700">{range.percentage}%</p>
                  </div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      index === 0 ? 'bg-green-500' : 
                      index === 1 ? 'bg-blue-500' : 
                      index === 2 ? 'bg-indigo-500' : 
                      index === 3 ? 'bg-amber-500' : 
                      'bg-red-500'
                    }`} 
                    style={{ width: `${range.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Performing Students */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-800">Top Performing Students</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">View All</button>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'Sarah Kim', score: 95, avatar: 'SK', avatarColor: 'bg-amber-600' },
              { name: 'Alex Johnson', score: 92, avatar: 'AJ', avatarColor: 'bg-blue-600' },
              { name: 'Olivia Martinez', score: 88, avatar: 'OM', avatarColor: 'bg-indigo-600' },
              { name: 'Raj Patel', score: 85, avatar: 'RP', avatarColor: 'bg-green-600' },
              { name: 'Maria Garcia', score: 78, avatar: 'MG', avatarColor: 'bg-purple-600' }
            ].map((student, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center space-x-3">
                  <div className={`h-8 w-8 rounded-full ${student.avatarColor} flex items-center justify-center text-white text-sm font-medium`}>
                    {student.avatar}
                  </div>
                  <p className="text-sm font-medium text-gray-800">{student.name}</p>
                </div>
                <p className="text-sm font-medium text-gray-800">{student.score}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* Most Challenging Caselets */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-800">Most Challenging Caselets</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">View All</button>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'Cloud Architecture Design', avgAttempts: 2.8, completionRate: 58 },
              { name: 'Database Optimization Challenge', avgAttempts: 2.3, completionRate: 65 },
              { name: 'Mobile App Performance Optimization', avgAttempts: 2.1, completionRate: 75 },
              { name: 'Neural Networks: Image Recognition', avgAttempts: 1.9, completionRate: 78 },
              { name: 'Algorithmic Trading Simulation', avgAttempts: 1.7, completionRate: 82 }
            ].map((caselet, index) => (
              <div key={index} className="space-y-2">
                <p className="text-sm font-medium text-gray-800 truncate">{caselet.name}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">Avg. Attempts: <span className="font-medium text-gray-700">{caselet.avgAttempts}</span></span>
                  <span className="text-gray-500">Completion: <span className="font-medium text-gray-700">{caselet.completionRate}%</span></span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      caselet.completionRate >= 80 ? 'bg-green-500' : 
                      caselet.completionRate >= 70 ? 'bg-blue-500' : 
                      caselet.completionRate >= 60 ? 'bg-amber-500' : 
                      'bg-red-500'
                    }`} 
                    style={{ width: `${caselet.completionRate}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Gap Analysis */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-800">Skill Gap Analysis</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">View Details</button>
          </div>
          
          <div className="space-y-4">
            {[
              { skill: 'Cloud Architecture', proficiency: 62 },
              { skill: 'Database Optimization', proficiency: 68 },
              { skill: 'Mobile Development', proficiency: 75 },
              { skill: 'Neural Networks', proficiency: 78 },
              { skill: 'Algorithmic Trading', proficiency: 82 },
              { skill: 'Cybersecurity', proficiency: 88 }
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-700">{skill.skill}</p>
                  <p className="text-sm font-medium text-gray-700">{skill.proficiency}%</p>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      skill.proficiency >= 80 ? 'bg-green-500' : 
                      skill.proficiency >= 70 ? 'bg-blue-500' : 
                      skill.proficiency >= 60 ? 'bg-amber-500' : 
                      'bg-red-500'
                    }`} 
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;