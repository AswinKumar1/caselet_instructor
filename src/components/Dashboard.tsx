import React from 'react';
import { BarChart3, Users, BookOpen, TrendingUp, Clock, Calendar } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Instructor Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Last updated:</span>
          <span className="text-sm font-medium">Today, 10:30 AM</span>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Students</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">128</p>
            </div>
            <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Users className="h-6 w-6 text-indigo-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-green-500 text-xs font-medium flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12%
            </span>
            <span className="text-xs text-gray-500 ml-2">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Caselets</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">24</p>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-green-500 text-xs font-medium flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +8%
            </span>
            <span className="text-xs text-gray-500 ml-2">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Avg. Completion Rate</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">87%</p>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
              <BarChart3 className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-green-500 text-xs font-medium flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +5%
            </span>
            <span className="text-xs text-gray-500 ml-2">from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Upcoming Deadlines</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">8</p>
            </div>
            <div className="h-12 w-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-amber-600" />
            </div>
          </div>
          <div className="flex items-center mt-4">
            <span className="text-xs text-gray-500">Next: Data Structures (Tomorrow)</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-800">Recent Activity</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">View All</button>
          </div>
          
          <div className="space-y-4">
            {[
              { 
                student: 'Alex Johnson', 
                action: 'completed', 
                caselet: 'Neural Networks: Image Recognition', 
                time: '2 hours ago',
                score: '92%',
                avatar: 'AJ',
                avatarColor: 'bg-blue-600'
              },
              { 
                student: 'Maria Garcia', 
                action: 'started', 
                caselet: 'Database Optimization Challenge', 
                time: '4 hours ago',
                score: 'In Progress',
                avatar: 'MG',
                avatarColor: 'bg-purple-600'
              },
              { 
                student: 'Raj Patel', 
                action: 'submitted', 
                caselet: 'Algorithmic Trading Simulation', 
                time: '6 hours ago',
                score: '88%',
                avatar: 'RP',
                avatarColor: 'bg-green-600'
              },
              { 
                student: 'Sarah Kim', 
                action: 'needs review', 
                caselet: 'Cybersecurity Threat Analysis', 
                time: '1 day ago',
                score: 'Pending',
                avatar: 'SK',
                avatarColor: 'bg-amber-600'
              },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center space-x-3">
                  <div className={`h-8 w-8 rounded-full ${activity.avatarColor} flex items-center justify-center text-white text-sm font-medium`}>
                    {activity.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{activity.student}</p>
                    <p className="text-xs text-gray-500">
                      <span className="font-medium">
                        {activity.action === 'completed' && 'Completed'}
                        {activity.action === 'started' && 'Started'}
                        {activity.action === 'submitted' && 'Submitted'}
                        {activity.action === 'needs review' && 'Needs review'}
                      </span> {activity.caselet}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${
                    activity.score === 'Pending' ? 'text-amber-600' : 
                    activity.score === 'In Progress' ? 'text-blue-600' : 
                    parseInt(activity.score) > 90 ? 'text-green-600' : 'text-gray-800'
                  }`}>
                    {activity.score}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Schedule */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-800">Upcoming Schedule</h2>
            <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">View Calendar</button>
          </div>
          
          <div className="space-y-4">
            {[
              {
                title: 'Data Structures Deadline',
                time: 'Tomorrow, 11:59 PM',
                type: 'deadline',
                students: 32
              },
              {
                title: 'Machine Learning Office Hours',
                time: 'Wed, 3:00 PM - 5:00 PM',
                type: 'office-hours',
                location: 'Virtual (Zoom)'
              },
              {
                title: 'New Caselet Release: Cloud Architecture',
                time: 'Thu, 9:00 AM',
                type: 'release',
                students: 45
              },
              {
                title: 'End of Term Assessment',
                time: 'Next Mon, 10:00 AM',
                type: 'assessment',
                students: 128
              },
            ].map((event, index) => (
              <div key={index} className="flex items-start space-x-3 py-3 border-b border-gray-100 last:border-0">
                <div className={`mt-1 h-8 w-8 rounded-lg flex items-center justify-center ${
                  event.type === 'deadline' ? 'bg-red-100 text-red-600' :
                  event.type === 'office-hours' ? 'bg-indigo-100 text-indigo-600' :
                  event.type === 'release' ? 'bg-green-100 text-green-600' :
                  'bg-amber-100 text-amber-600'
                }`}>
                  {event.type === 'deadline' && <Clock className="h-4 w-4" />}
                  {event.type === 'office-hours' && <Users className="h-4 w-4" />}
                  {event.type === 'release' && <BookOpen className="h-4 w-4" />}
                  {event.type === 'assessment' && <BarChart3 className="h-4 w-4" />}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">{event.title}</p>
                  <p className="text-xs text-gray-500">{event.time}</p>
                  {event.location && (
                    <p className="text-xs text-gray-500 mt-1">{event.location}</p>
                  )}
                  {event.students && (
                    <p className="text-xs text-gray-500 mt-1">{event.students} students</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <button className="mt-4 w-full flex items-center justify-center space-x-2 py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:text-indigo-600 hover:border-indigo-300">
            <Calendar className="h-4 w-4" />
            <span>Add New Event</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;