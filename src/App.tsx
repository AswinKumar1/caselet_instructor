import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  BarChart3, 
  Calendar, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Brain,
  Plus,
  ChevronDown,
  Clock
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import Students from './components/Students';
import Caselets from './components/Caselets';
import Analytics from './components/Analytics';
import Schedule from './components/Schedule';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notifications, setNotifications] = useState(3);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'students':
        return <Students />;
      case 'caselets':
        return <Caselets />;
      case 'analytics':
        return <Analytics />;
      case 'schedule':
        return <Schedule />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-indigo-600" />
            <h1 className="text-xl font-bold text-gray-800">CortexAI</h1>
          </div>
          <p className="text-xs text-gray-500 mt-1">Intelligent Tutoring System</p>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm ${
                  activeTab === 'dashboard' 
                    ? 'bg-indigo-50 text-indigo-700 font-medium' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <BarChart3 className="h-5 w-5" />
                <span>Dashboard</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('students')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm ${
                  activeTab === 'students' 
                    ? 'bg-indigo-50 text-indigo-700 font-medium' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Users className="h-5 w-5" />
                <span>Students</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('caselets')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm ${
                  activeTab === 'caselets' 
                    ? 'bg-indigo-50 text-indigo-700 font-medium' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <BookOpen className="h-5 w-5" />
                <span>Caselets</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm ${
                  activeTab === 'analytics' 
                    ? 'bg-indigo-50 text-indigo-700 font-medium' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <BarChart3 className="h-5 w-5" />
                <span>Analytics</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('schedule')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm ${
                  activeTab === 'schedule' 
                    ? 'bg-indigo-50 text-indigo-700 font-medium' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule</span>
              </button>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-200">
          <ul className="space-y-1">
            <li>
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
            </li>
            <li>
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-gray-100">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-4 px-6">
          <div className="flex items-center justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>
              
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium">
                  JD
                </div>
                <span className="text-sm font-medium text-gray-700">Dr. Jane Doe</span>
              </div>
            </div>
          </div>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;